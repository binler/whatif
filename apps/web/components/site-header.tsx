// import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import { UserNav } from "@/components/user-nav";

export function SiteHeader() {
    const navItems = [
        {
            title: "Overview",
            href: "/overview",
        },
        {
            title: "Settings",
            href: "/setting",
        },
    ];
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                {/* <TeamSwitcher /> */}
                <MainNav items={navItems} />
                <div className="ml-auto flex items-center space-x-4">
                    <Search />
                    <UserNav />
                </div>
            </div>
        </div>
    );
}
