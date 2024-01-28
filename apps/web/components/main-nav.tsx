import { NavItem } from "@ui/types/nav";

import { LinkItem } from "@/components/link-item";

interface MainNavProps {
    items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
    return (
        <>
            {items?.length ? (
                <nav className="flex gap-6">
                    {items?.map(
                        (item, index) =>
                            item.href && <LinkItem key={index} item={item} />
                    )}
                </nav>
            ) : null}
        </>
    );
}
