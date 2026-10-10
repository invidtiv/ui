import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

import { Button } from "@/registry/default/ui/button";

import { CodeBlockCommand } from "@/components/code-block-command";
import { convertNpmCommand } from "@/lib/convert-npm-command";
import { WidgetMarquee } from "@/components/widget-marquee";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-0 w-full grid-rows-[auto_1fr] gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="space-y-1.5 text-center">
          <h1
            className={`text-4xl font-semibold text-balance lg:text-5xl ${outfit.className}`}
          >
            The first ever collection of Widgets for the Web.
          </h1>
          <p className="text-muted-foreground text-lg">
            An open-source curated collection of copy-paste widgets for your
            next project.
          </p>
        </div>
        <div className="mx-auto w-max">
          <CodeBlockCommand
            {...convertNpmCommand("npx shadcn@latest add @wigggleui/widget")}
          />
        </div>
        <div className="flex items-center justify-center gap-6">
          <Button asChild>
            <Link href="/widgets">Explore Widgets</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs">View Docs</Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto w-full min-w-0 overflow-hidden">
        <WidgetMarquee />
      </div>
    </div>
  );
}
