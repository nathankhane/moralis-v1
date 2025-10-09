import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const quoteSchema = z.object({
    goal: z.enum(['launch_validation', 'win_loss', 'persona', 'competitive', 'other']),
    formats: z.array(z.enum(['async_video', 'survey', 'live_call'])).min(1),
    urgency: z.enum(['standard_48h', 'rush']),
    volume: z.enum(['one_off', 'sprint', 'monthly']),
    budget_band: z.enum(['exploring', 'have_range', 'approved']).optional(),
    stack: z.string().min(2),
    notes: z.string().max(500).optional(),
    email: z.string().email(),
    company: z.string().min(2),
    role: z.string().min(2),
    no_record: z.boolean().optional()
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedData = quoteSchema.parse(body);

        // Send to Slack if webhook URL is configured
        if (process.env.SLACK_QUOTE_WEBHOOK_URL) {
            try {
                const slackPayload = {
                    text: "New Quote Request",
                    blocks: [
                        {
                            type: "header",
                            text: {
                                type: "plain_text",
                                text: "🎯 New Quote Request"
                            }
                        },
                        {
                            type: "section",
                            fields: [
                                {
                                    type: "mrkdwn",
                                    text: `*Contact:* ${validatedData.email}`
                                },
                                {
                                    type: "mrkdwn",
                                    text: `*Company:* ${validatedData.company}`
                                },
                                {
                                    type: "mrkdwn",
                                    text: `*Role:* ${validatedData.role}`
                                },
                                {
                                    type: "mrkdwn",
                                    text: `*Goal:* ${validatedData.goal.replace('_', ' ')}`
                                }
                            ]
                        },
                        {
                            type: "section",
                            fields: [
                                {
                                    type: "mrkdwn",
                                    text: `*Formats:* ${validatedData.formats.join(', ')}`
                                },
                                {
                                    type: "mrkdwn",
                                    text: `*Urgency:* ${validatedData.urgency.replace('_', ' ')}`
                                },
                                {
                                    type: "mrkdwn",
                                    text: `*Volume:* ${validatedData.volume.replace('_', ' ')}`
                                },
                                {
                                    type: "mrkdwn",
                                    text: `*Stack:* ${validatedData.stack}`
                                }
                            ]
                        }
                    ]
                };

                if (validatedData.budget_band) {
                    slackPayload.blocks.push({
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: `*Budget Band:* ${validatedData.budget_band.replace('_', ' ')}`
                        }
                    });
                }

                if (validatedData.notes) {
                    slackPayload.blocks.push({
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: `*Notes:* ${validatedData.notes}`
                        }
                    });
                }

                if (validatedData.no_record) {
                    slackPayload.blocks.push({
                        type: "section",
                        text: {
                            type: "mrkdwn",
                            text: "⚠️ *Privacy:* Don't record or share sensitive details"
                        }
                    });
                }

                await fetch(process.env.SLACK_QUOTE_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(slackPayload)
                });
            } catch (slackError) {
                console.error('Failed to send to Slack:', slackError);
                // Continue anyway - don't fail the request
            }
        } else {
            // Log to console if no Slack webhook configured
            console.log('[Quote Request]', validatedData);
        }

        return NextResponse.json({ ok: true });

    } catch (error) {
        console.error('Quote API error:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { ok: false, error: 'Invalid form data', details: error.errors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { ok: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
