import { LinkItem } from "@/types"
import { Icons } from "@/components/icons"
import { BookOpenTextIcon, Gamepad2Icon, IndianRupeeIcon, LayoutGridCirclesIcon, QuoteIcon, ScrollTextIcon, SpeechIcon } from "lucide-react"

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
]
  
export const SOCIAL_LINKS: LinkItem[] = [
  {
    title: "X",
    href: "https://x.com/henil106",
    icon: <Icons.X />,
  },{
    title: "GitHub",
    href: "https://github.com/henilshahdev",
    icon: <Icons.GitHub />,
  },{
    title: "LinkedIn",
    href: "https://linkedin.com/in/henilshahdev",
    icon: <Icons.apple />,
  },
]