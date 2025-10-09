import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import HeroTabs from '../HeroTabs';

// Mock next/navigation
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    useSearchParams: jest.fn(),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
        h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
        p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
        span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
        button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    },
    useReducedMotion: () => false,
    AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock other components
jest.mock('../ui/text-effect', () => ({
    TextEffect: ({ children }: any) => <div>{children}</div>
}));

jest.mock('../BenefitsSection', () => ({
    __esModule: true,
    default: () => <div>Benefits Section</div>
}));

jest.mock('../RevenueCalculator', () => ({
    __esModule: true,
    default: () => <div>Revenue Calculator</div>
}));

jest.mock('../FloatingTabsPill', () => ({
    __esModule: true,
    default: () => <div>Floating Tabs Pill</div>
}));

describe('HeroTabs', () => {
    const mockRouter = {
        replace: jest.fn(),
    };

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue(mockRouter);
        (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    });

    it('renders with expert as default persona', () => {
        render(<HeroTabs />);

        expect(screen.getByText('Turn expertise into recurring revenue.')).toBeInTheDocument();
        expect(screen.getByText('Sign up as Expert')).toBeInTheDocument();
    });

    it('switches to expert persona when expert tab is clicked', () => {
        render(<HeroTabs />);

        const expertTab = screen.getByRole('tab', { name: 'Experts' });
        fireEvent.click(expertTab);

        expect(screen.getByText('Turn expertise into recurring revenue.')).toBeInTheDocument();
        expect(screen.getByText('Sign up as Expert')).toBeInTheDocument();
        expect(mockRouter.replace).toHaveBeenCalledWith('/?persona=expert', { scroll: false });
    });

    it('initializes with expert persona when URL param is set', () => {
        (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams('?persona=expert'));

        render(<HeroTabs />);

        expect(screen.getByText('Turn expertise into recurring revenue.')).toBeInTheDocument();
        expect(screen.getByText('Sign up as Expert')).toBeInTheDocument();
    });
}); 