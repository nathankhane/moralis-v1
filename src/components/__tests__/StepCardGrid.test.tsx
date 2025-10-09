import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StepCardGrid } from '../StepCardGrid';
import { User } from 'lucide-react';

// Mock framer-motion to avoid issues with animations in tests
interface MockMotionProps {
    children: React.ReactNode;
    whileInView?: unknown;
    [key: string]: unknown;
}

jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, whileInView, ...props }: MockMotionProps) => <div {...props}>{children}</div>,
        section: ({ children, whileInView, ...props }: MockMotionProps) => <section {...props}>{children}</section>,
    },
    useReducedMotion: () => false,
}));

describe('StepCardGrid', () => {
    describe('Experts only mode', () => {
        it('renders 4 expert cards', () => {
            render(<StepCardGrid role="experts" />);

            expect(screen.getByText('Apply & Verify')).toBeInTheDocument();
            expect(screen.getByText('Pick Offers')).toBeInTheDocument();
            expect(screen.getByText('Record Insight')).toBeInTheDocument();
            expect(screen.getByText('Get Paid on Repeat')).toBeInTheDocument();
        });

        it('shows experts heading', () => {
            render(<StepCardGrid role="experts" />);

            expect(screen.getByText('How Experts Earn')).toBeInTheDocument();
        });
    });

    describe('Companies only mode', () => {
        it('renders 4 company cards', () => {
            render(<StepCardGrid role="companies" />);

            expect(screen.getByText('Post Request')).toBeInTheDocument();
            expect(screen.getByText('Match & Meet')).toBeInTheDocument();
            expect(screen.getByText('Actionable Report')).toBeInTheDocument();
            expect(screen.getByText('Repurpose Freely')).toBeInTheDocument();
        });

        it('shows companies heading', () => {
            render(<StepCardGrid role="companies" />);

            expect(screen.getByText('How Companies Get Insights')).toBeInTheDocument();
        });
    });

    describe('Both roles mode (default)', () => {
        it('renders both expert and provider content', () => {
            render(<StepCardGrid role="both" />);

            // Should have both role headings (might be multiple due to responsive design)
            expect(screen.getAllByText('For Experts').length).toBeGreaterThanOrEqual(1);
            expect(screen.getAllByText('For Companies').length).toBeGreaterThanOrEqual(1);

            // Should have all step cards (might be multiple due to responsive design)
            expect(screen.getAllByText('Apply & Verify').length).toBeGreaterThanOrEqual(1);
            expect(screen.getAllByText('Post Request').length).toBeGreaterThanOrEqual(1);
        });

        it('shows tab interface', () => {
            render(<StepCardGrid role="both" />);

            // Should show tab buttons
            expect(screen.getByRole('tab', { name: /for experts/i })).toBeInTheDocument();
            expect(screen.getByRole('tab', { name: /for saa?s companies/i })).toBeInTheDocument();
        });

        it('switches tabs correctly', async () => {
            render(<StepCardGrid role="both" />);

            const expertsTab = screen.getByRole('tab', { name: /for experts/i });
            const companiesTab = screen.getByRole('tab', { name: /for saa?s companies/i });

            // Initially experts tab should be active
            expect(expertsTab).toHaveAttribute('aria-selected', 'true');
            expect(companiesTab).toHaveAttribute('aria-selected', 'false');

            // Click companies tab
            fireEvent.click(companiesTab);

            await waitFor(() => {
                expect(companiesTab).toHaveAttribute('aria-selected', 'true');
                expect(expertsTab).toHaveAttribute('aria-selected', 'false');
            });
        });

        it('has correct aria attributes for accessibility', () => {
            render(<StepCardGrid role="both" />);

            const expertsTab = screen.getByRole('tab', { name: /for experts/i });
            const companiesTab = screen.getByRole('tab', { name: /for saa?s companies/i });

            expect(expertsTab).toHaveAttribute('aria-selected');
            expect(companiesTab).toHaveAttribute('aria-selected');
            expect(expertsTab).toHaveAttribute('role', 'tab');
            expect(companiesTab).toHaveAttribute('role', 'tab');
        });

        it('displays step cards for active tab', () => {
            render(<StepCardGrid role="both" />);

            // Should see expert steps initially
            expect(screen.getAllByText('Apply & Verify')[0]).toBeInTheDocument();
            expect(screen.getAllByText('Set Your Terms')[0]).toBeInTheDocument();

            // Switch to companies
            const companiesTab = screen.getByRole('tab', { name: /for saa?s companies/i });
            fireEvent.click(companiesTab);

            // Should see company steps
            expect(screen.getByText('Post a Brief')).toBeInTheDocument();
            expect(screen.getByText('Instant Matchboard')).toBeInTheDocument();
        });
    });

    describe('Custom steps', () => {
        it('renders custom steps when provided', () => {
            const customSteps = {
                experts: [
                    {
                        title: 'Custom Expert Step',
                        body: 'Custom expert description',
                        icon: User, // Use a real Lucide icon for testing
                    },
                ],
                companies: [
                    {
                        title: 'Custom Company Step',
                        body: 'Custom company description',
                        icon: User, // Use a real Lucide icon for testing
                    },
                ],
            };

            render(<StepCardGrid role="both" steps={customSteps} />);

            // Use getAllByText since responsive design may show multiple instances
            expect(screen.getAllByText('Custom Expert Step').length).toBeGreaterThanOrEqual(1);
            expect(screen.getAllByText('Custom expert description').length).toBeGreaterThanOrEqual(1);
        });
    });

    describe('Anchor links', () => {
        it('has correct IDs for anchor linking', () => {
            render(<StepCardGrid role="both" />);

            expect(document.getElementById('experts-flow')).toBeInTheDocument();
            expect(document.getElementById('companies-flow')).toBeInTheDocument();
        });
    });
}); 