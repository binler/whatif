"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@ui/lib/utils";

export function LinkItem({ item }) {
    const pathname = usePathname();
    const isActive =
        pathname === item.href || pathname?.startsWith(`${item.href}/`);
    return (
        <Link
            href={item.href}
            className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                item.disabled && "cursor-not-allowed opacity-80",
                isActive ? "" : "text-muted-foreground"
            )}
        >
            {item.title}
        </Link>
    );
}
