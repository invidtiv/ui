import type { JSX } from "react";

export type WidgetCreditType = {
  name: string;
  homepage: string;
  url: string;
  logo: string;
};

export type SponsorType = {
  name: string;
  url: string;
  logo: (props: React.ComponentProps<"svg">) => JSX.Element;
  tier?: "platinum" | "gold" | "silver" | "bronze";
};

export type LinkItem = {
  title: string
  href: string
  icon?: React.ReactElement
  shortcut?: string
  openInNewTab?: boolean
}
