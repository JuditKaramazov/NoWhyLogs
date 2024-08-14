import type { Site, SocialObjects } from "./types"

export const SITE: Site = {
  website: "https://nowhylogs.vercel.app/",
  author: "Judit Lázaro",
  desc: "A minimal devlog containing No Why Games' misadventures.",
  title: "No Why Games - Devlog",
  ogImage: "nowhylogs-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
}

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const

export const LOGO_IMAGE = {
  enable: true,
  width: 200,
  height: "auto",
}

export const SOCIALS: SocialObjects = [
  {
    name: "CodePen",
    href: "https://codepen.io/JuditKaramazov",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Github",
    href: "https://github.com/JuditKaramazov",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/miss.oranjediscodancer",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/juditlazaromoyano",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:j.lazaromoyano7@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@JuditKaramazov",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/VKaramazov",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/vkaramazov",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/v_karamazov",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
]
