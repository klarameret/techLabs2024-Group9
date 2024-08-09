import React from 'react';
import { Inter } from 'next/font/google';
import '@/app/ui/global.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
            <body className={inter.className}>{children}</body>
        </html>
    );
}