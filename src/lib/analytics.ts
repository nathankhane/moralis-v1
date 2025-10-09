/**
 * Analytics shim for Bridge
 * Supports Plausible and Segment/Analytics.js
 */

declare global {
    interface Window {
        plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
        analytics?: {
            track: (event: string, properties?: Record<string, any>) => void;
        };
    }
}

export function track(event: string, payload?: Record<string, any>): void {
    try {
        // Try Plausible first
        if (typeof window !== 'undefined' && window.plausible) {
            window.plausible(event, payload ? { props: payload } : undefined);
            return;
        }

        // Fallback to Segment/Analytics.js
        if (typeof window !== 'undefined' && window.analytics) {
            window.analytics.track(event, payload);
            return;
        }

        // Development logging
        if (process.env.NODE_ENV === 'development') {
            console.log('[Analytics]', event, payload);
        }
    } catch (error) {
        // Silently fail in production
        if (process.env.NODE_ENV === 'development') {
            console.error('[Analytics Error]', error);
        }
    }
}
