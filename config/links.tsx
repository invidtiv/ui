import { LinkItem } from "@/types";
import { Icons } from "@/components/icons";
import {
  BookOpenTextIcon,
  CalendarIcon,
  ChartNoAxesCombinedIcon,
  CirclePlayIcon,
  Clock3Icon,
  CloudSunIcon,
  Gamepad2Icon,
  GoalIcon,
  IndianRupeeIcon,
  LayoutDashboardIcon,
  LayoutGridCirclesIcon,
  ScrollTextIcon,
  SpeechIcon,
  TrophyIcon,
} from "lucide-react";

export const MENU_LINKS: LinkItem[] = [
  {
    title: "Home",
    href: "/",
    icon: <Icons.logo />,
    shortcut: "GH",
  },
  {
    title: "Docs",
    href: "/docs",
    icon: <BookOpenTextIcon />,
    shortcut: "GD",
  },
  {
    title: "Widgets",
    href: "/widgets",
    icon: <LayoutGridCirclesIcon />,
    shortcut: "GW",
  },
  {
    title: "Playground",
    href: "/playground",
    icon: <Gamepad2Icon />,
    shortcut: "GP",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
    icon: <IndianRupeeIcon />,
    shortcut: "GS",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    icon: <SpeechIcon />,
    shortcut: "GT",
  },
  {
    title: "Changelog",
    href: "/changelog",
    icon: <ScrollTextIcon />,
    shortcut: "GC",
  },
];

export const WIDGET_CATEGORY_LINKS: LinkItem[] = [
  {
    title: "Calendar",
    href: "/widgets/calendar",
    icon: <CalendarIcon />,
  },
  {
    title: "Clock",
    href: "/widgets/clock",
    icon: <Clock3Icon />,
  },
  {
    title: "Dashboard",
    href: "/widgets/dashboard",
    icon: <LayoutDashboardIcon />,
  },
  {
    title: "Media",
    href: "/widgets/media",
    icon: <CirclePlayIcon />,
  },
  {
    title: "Productivity",
    href: "/widgets/productivity",
    icon: <GoalIcon />,
  },
  {
    title: "Sports",
    href: "/widgets/sports",
    icon: <TrophyIcon />,
  },
  {
    title: "Stocks",
    href: "/widgets/stocks",
    icon: <ChartNoAxesCombinedIcon />,
  },
  {
    title: "Weather",
    href: "/widgets/weather",
    icon: <CloudSunIcon />,
  },
];

export const SOCIAL_LINKS: LinkItem[] = [
  {
    title: "X",
    href: "https://x.com/henil106",
    icon: <Icons.X />,
  },
  {
    title: "GitHub",
    href: "https://github.com/henilshahdev",
    icon: <Icons.GitHub />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/henilshahdev",
    icon: <Icons.apple />,
  },
];
