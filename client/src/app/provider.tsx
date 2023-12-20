"use client";

import { useRouter } from 'next/navigation';
import { Provider, defaultTheme } from '@adobe/react-spectrum';

export function ClientProviders({ children }: {
    children: React.ReactNode
}) {
    let router = useRouter();

    return (
        <Provider theme={defaultTheme} router={{ navigate: router.push }}>
            {children}
        </Provider>
    );
}