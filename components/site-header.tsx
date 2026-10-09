import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchCommandMenu } from "@/components/search-command-menu";

const LINKS = [
  { href: "/docs", label: "Docs" },
  { href: "/widgets", label: "Widgets" },
  { href: "/playground", label: "Playground" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/changelog", label: "Changelog" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-background border-border flex h-12 w-full items-center justify-between border-b px-3">
      <div className="flex items-center justify-start gap-6">
        <Icons.logo className="size-5" />
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-end gap-4">
        <SearchCommandMenu />
        <Button asChild size="icon" variant="ghost" className="group">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Icons.GitHub className="text-muted-foreground group-hover:text-foreground size-4.5 transition-colors duration-300" />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
