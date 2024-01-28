"use client";

import { useRouter } from "next/navigation";

export function ClientProviders({ children }: { children: React.ReactNode }) {
    let router = useRouter();

    return { children };
}
