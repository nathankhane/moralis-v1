"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

import { track } from "@/lib/analytics";

// Define types for better type safety
type GoalType = 'launch_validation' | 'win_loss' | 'persona' | 'competitive' | 'other';
type FormatType = 'async_video' | 'survey' | 'live_call';
type UrgencyType = 'standard_48h' | 'rush';
type VolumeType = 'one_off' | 'sprint' | 'monthly';
type BudgetBandType = 'exploring' | 'have_range' | 'approved';

const quoteSchema = z.object({
    goal: z.enum(['launch_validation', 'win_loss', 'persona', 'competitive', 'other'], {
        required_error: "Please select your primary goal"
    }),
    formats: z.array(z.enum(['async_video', 'survey', 'live_call'])).min(1, 'Select at least one format'),
    urgency: z.enum(['standard_48h', 'rush'], {
        required_error: "Please select urgency level"
    }),
    volume: z.enum(['one_off', 'sprint', 'monthly'], {
        required_error: "Please select volume"
    }),
    budget_band: z.enum(['exploring', 'have_range', 'approved']).optional(),
    stack: z.string().min(2, 'Tell us your stack/domain'),
    notes: z.string().max(500).optional(),
    email: z.string().email('Please enter a valid email'),
    company: z.string().min(2, 'Company name is required'),
    role: z.string().min(2, 'Role is required'),
    no_record: z.boolean().optional()
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
    onSuccess: () => void;
}

const GOAL_OPTIONS = [
    { value: 'launch_validation', label: 'Launch validation' },
    { value: 'win_loss', label: 'Win/loss analysis' },
    { value: 'persona', label: 'Persona research' },
    { value: 'competitive', label: 'Competitive intelligence' },
    { value: 'other', label: 'Other' }
];

const FORMAT_OPTIONS = [
    { value: 'async_video', label: 'Async video' },
    { value: 'survey', label: 'Survey' },
    { value: 'live_call', label: 'Live call' }
];

export function QuoteForm({ onSuccess }: QuoteFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<QuoteFormData>({
        resolver: zodResolver(quoteSchema),
        defaultValues: {
            formats: [],
            no_record: false
        }
    });

    const watchedFormats = watch('formats') || [];

    const handleFirstFocus = () => {
        if (!hasStarted) {
            setHasStarted(true);
            track('pricing_quote_started');
        }
    };

    const onSubmit = async (data: QuoteFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to submit quote request');
            }

            track('pricing_quote_submitted', {
                goal: data.goal,
                formats: data.formats,
                urgency: data.urgency,
                volume: data.volume
            });

            toast.success("Thanks! We'll send a scope & quote within 24 hours.");

            onSuccess();
        } catch (error) {
            toast.error("Failed to submit quote request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFormatChange = (format: string, checked: boolean) => {
        const currentFormats = watchedFormats;
        if (checked) {
            setValue('formats', [...currentFormats, format as FormatType]);
        } else {
            setValue('formats', currentFormats.filter(f => f !== format));
        }
    };

    return (
        <Card className="rounded-2xl shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Get your custom quote</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="email">Work Email *</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                                onFocus={handleFirstFocus}
                                className="mt-1"
                            />
                            {errors.email && (
                                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="company">Company *</Label>
                            <Input
                                id="company"
                                {...register('company')}
                                onFocus={handleFirstFocus}
                                className="mt-1"
                            />
                            {errors.company && (
                                <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="role">Role *</Label>
                        <Input
                            id="role"
                            {...register('role')}
                            onFocus={handleFirstFocus}
                            className="mt-1"
                        />
                        {errors.role && (
                            <p className="text-sm text-destructive mt-1">{errors.role.message}</p>
                        )}
                    </div>

                    {/* Primary Goal */}
                    <div>
                        <Label htmlFor="goal">Primary goal *</Label>
                        <Select onValueChange={(value) => setValue('goal', value as GoalType)}>
                            <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select your primary goal" />
                            </SelectTrigger>
                            <SelectContent>
                                {GOAL_OPTIONS.map(option => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.goal && (
                            <p className="text-sm text-destructive mt-1">{errors.goal.message}</p>
                        )}
                    </div>

                    {/* Stack/Domain */}
                    <div>
                        <Label htmlFor="stack">Stack / domain *</Label>
                        <Input
                            id="stack"
                            {...register('stack')}
                            onFocus={handleFirstFocus}
                            placeholder="e.g., B2B SaaS, fintech, Salesforce ecosystem"
                            className="mt-1"
                        />
                        {errors.stack && (
                            <p className="text-sm text-destructive mt-1">{errors.stack.message}</p>
                        )}
                    </div>

                    {/* Desired Formats */}
                    <div>
                        <Label>Desired formats *</Label>
                        <div className="mt-2 space-y-2">
                            {FORMAT_OPTIONS.map(option => (
                                <div key={option.value} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={option.value}
                                        checked={watchedFormats.includes(option.value as FormatType)}
                                        onCheckedChange={(checked) => handleFormatChange(option.value, checked as boolean)}
                                    />
                                    <Label htmlFor={option.value} className="text-sm font-normal">
                                        {option.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                        {errors.formats && (
                            <p className="text-sm text-destructive mt-1">{errors.formats.message}</p>
                        )}
                    </div>

                    {/* Urgency */}
                    <div>
                        <Label>Urgency *</Label>
                        <RadioGroup
                            className="mt-2"
                            onValueChange={(value) => setValue('urgency', value as UrgencyType)}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="standard_48h" id="standard" />
                                <Label htmlFor="standard" className="text-sm font-normal">
                                    Standard ≤48h
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="rush" id="rush" />
                                <Label htmlFor="rush" className="text-sm font-normal">
                                    Rush
                                </Label>
                            </div>
                        </RadioGroup>
                        {errors.urgency && (
                            <p className="text-sm text-destructive mt-1">{errors.urgency.message}</p>
                        )}
                    </div>

                    {/* Volume Signal */}
                    <div>
                        <Label>Volume signal *</Label>
                        <RadioGroup
                            className="mt-2"
                            onValueChange={(value) => setValue('volume', value as VolumeType)}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="one_off" id="one_off" />
                                <Label htmlFor="one_off" className="text-sm font-normal">
                                    One-off
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="sprint" id="sprint" />
                                <Label htmlFor="sprint" className="text-sm font-normal">
                                    Sprint
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="monthly" id="monthly" />
                                <Label htmlFor="monthly" className="text-sm font-normal">
                                    Monthly
                                </Label>
                            </div>
                        </RadioGroup>
                        {errors.volume && (
                            <p className="text-sm text-destructive mt-1">{errors.volume.message}</p>
                        )}
                    </div>

                    {/* Budget Band */}
                    <div>
                        <Label>Budget band (optional)</Label>
                        <RadioGroup
                            className="mt-2"
                            onValueChange={(value) => setValue('budget_band', value as BudgetBandType)}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="exploring" id="exploring" />
                                <Label htmlFor="exploring" className="text-sm font-normal">
                                    Exploring
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="have_range" id="have_range" />
                                <Label htmlFor="have_range" className="text-sm font-normal">
                                    Have range
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="approved" id="approved" />
                                <Label htmlFor="approved" className="text-sm font-normal">
                                    Approved
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Notes */}
                    <div>
                        <Label htmlFor="notes">Notes (optional)</Label>
                        <Textarea
                            id="notes"
                            {...register('notes')}
                            onFocus={handleFirstFocus}
                            placeholder="Any additional context or requirements..."
                            className="mt-1"
                            rows={3}
                        />
                        {errors.notes && (
                            <p className="text-sm text-destructive mt-1">{errors.notes.message}</p>
                        )}
                    </div>

                    {/* Privacy Checkbox */}
                    <div className="flex items-start space-x-2">
                        <Checkbox
                            id="no_record"
                            {...register('no_record')}
                        />
                        <Label htmlFor="no_record" className="text-sm font-normal leading-relaxed">
                            Don&apos;t record or share sensitive details
                        </Label>
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-lg py-6 rounded-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            'Get my custom quote'
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
