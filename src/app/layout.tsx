"use client";

import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo-client';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Search Pokemon</title>
                <meta name="description" content="Search for your favorite Pokemon" />
            </head>
            <body>
                <ApolloProvider client={client}>
                    <main>{children}</main>
                </ApolloProvider>
            </body>
        </html>
    );
}
