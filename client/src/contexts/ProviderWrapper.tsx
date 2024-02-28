
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren } from 'react';

export const queryClient = new QueryClient();

export const ProviderWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </>

    )
}
