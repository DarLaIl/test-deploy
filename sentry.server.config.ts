import * as Sentry from '@sentry/nextjs';

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_DSN,

    tracesSampleRate: 1,

    debug: false,
});
