"use client";

import { MainNav } from "@ui/components/main-nav";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <MainNav />
            {children}
        </div>
    );
}
