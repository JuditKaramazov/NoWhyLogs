# No Why Games - Devlog

<p align="center">
  <a href="https://nowhylogs.vercel.app">
    <img src="https://raw.githubusercontent.com/JuditKaramazov/NoWhyLogs/main/public/assets/NoWhyGames.png" width="170" alt="No Why Games original logo."
        style="filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, .7));">
  </a>
</p>
<p align="center">
  <strong><span style="font-size: larger;">aka NoWhyLogs</span></strong>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" title="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" title="TailwindCSS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" title="TypeScript" />
  <img src="https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE" alt="Astro" title="Astro" />
</div>

<p align="center">
  <a href="https:/github.com/JuditKaramazov">🐱 /JuditKaramazov</a>
</p>
<p align="center">
  <a href="https://karamazfolio.xyz/">📍 Portfolio</a>
</p>
<p align="center">
  <a href="https://karamablog.xyz">☕ Blog</a>
</p>

---

Table of Contents
-----------------

* [🔧 Getting started](#-getting-started)
* [🚪 Introduction](#-introduction)
* [🔮 Features](#-features)
  * [🌐 Accessibility](#-accessibility)
  * [🎨 Dynamic OG image generation](#-dynamic-og-image-generation)
  * [🔍 Fuzzy search](#-fuzzy-search)
  * [🌓 Light & dark themes](#-light--dark-themes)
  * [🤝 SEO-friendly](#-seo-friendly)
  * [📰 Sitemap & RSS feed](#-sitemap--rss-feed)
* [🧞 Commands](#-commands)
* [💅 Style](#-style)
* [🙌 Immense thanks to them awesome Sponsors](#-immense-thanks-to-them-awesome-sponsors)
* [🏛 License & Copyright](#-license--copyright)

---

## 🔧 Getting started

Remember when I fell in love with... `Astro`? Well, here we go again! **TypeScript**'s type safety and developer-friendly features, **React**'s dynamic interactivity and reusable components... _and_ **Astro**, of course.

If by any chance you'd want to get started with its characteristic flexibility and neat results, allow me to remind you that achieving such a goal couldn't be easier once Astro joins the match. Now, and just in case this is _another one_ of those **Need for Speed™** moments for you, please consider the following steps.

Open your terminal and run the following command:

```bash
npm create astro@latest
```

There are even Starter Templates available:

```bash
# create a new project with an official example
npm create astro@latest -- --template <example-name>

# create a new project based on a GitHub repository’s main branch
npm create astro@latest -- --template <github-username>/<github-repo>
```

Finally:

```bash
npm run dev
```

Easy, right? Feel free to check [Astro's documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat). Enjoy the ride, fellow astronaut! 🚀🧑‍🚀 

> [!TIP]
> Whatever you decide to do, please remember to respect the [Code of Conduct](CODE_OF_CONDUCT.md) while interacting with the project and the platform itself. Thank you so much for your time and patience!

---

## 🚪 Introduction

A couple of days ago, I started my first [No Why Games - Devlog entry](https://nowhylogs.vercel.app/posts/postmodern-beginnings/) as follows:

> As the last heated hours of this day of August creep away from Barcelona, we are cooling down our screens with some weird, warbly digital words explaining this site’s nature and architecture. Fiercely human, inherently spontaneous.

In all honesty, it took me quite a long time to articulate my thoughts into words - and it took me even longer to gather the necessary courage and mental strength to finally create a site that could serve as a valid representation of my misadventures as something else than a "website developer" - a label that I stopped using when I realized that my work was reaching the shores of the concept of "software", with no relevant borders anymore.

Do you remember Red Hot Chili Pepper's emblematic [Road Trippin'](https://www.youtube.com/watch?v=11GYvfYjyV0)? (_"Are you kidding, Judit? It's a masterpiece; of course we remember!"_, huh, well. Nice to see you again, guys.) "Just a mirror for the sun" is one of those lines that hit hard for no specific reason, and after tons of highs and lows, moments where I silently asked myself again: "Who am I supposed to be?", and some other unfortunate yet human episodes, I told myself that I _needed_ a space that could eventually become something similar to that _mirror for the sun_. A mirror for the soul, if anything.

As some of you probably know, I already own a [private blog](https://karamablog.xyz) where I can share some of my thoughts, analysis, and nonsense; however, I still didn't work on a bonfire where I could sit, take the time to digest `video game development`'s essence, and represent the trip itself in the shape of a "diary" or "dev blog". That's why [NoWhyLogs](https://nowhylogs.vercel.app) (a `personal devlog containing relevant information on my progress as an indie developer`) exists, I suppose. When the fog becomes way too dense, we all need to find our own lighthouse.

---

## 🔮 Features

![Lighthouse-score](https://github.com/user-attachments/assets/8dc07696-c613-4f92-b5b6-eb8af73e585a)

Speaking of lighthouses! Isn't the previous score just _lovely_?

While simple and accessible, I put some effort into making `No Why Games - Devlog` a mirror (another one!) of my intentions and inner rules as a developer, always putting `performance`, `accessibility`, and `best practices` first.

_"How did you do that, Judit?_, asked absolutely no one. Let me share a couple of secrets and features so that you can see what's been the 🔑 _k e y_ 🔑, then.

### 🌐 Accessibility

Undoubtedly, whatever has to do with the concept of `Accessibility` translates into an immense ocean of possibilities, doubts, and new things to learn each day. However, I wanted to make sure that this devlog was `as accessible as possible` (and not only thanks to proper landmarks), which means that you'll be capable to navigate it by using:

1. `Keyboard` 💻
2. `VoiceOver` 🎙️

> [!TIP]
> As an example, you can turn on VoiceOver on an iPhone running IOS 17 or later. This can be done from settings -> Accessibility -> VoiceOver.

### 🎨 Dynamic OG image generation

OG images, also known as "social images" (this is, an image displayed whenever we share our website URL on platforms such as Twitter, WhatsApp, Discord, etc.), play an essential role in social media engagement - but we don't usually have the time to prepare them one by one... right? _Right...?_ (_Perhaps I'm the only one facing this problem..._)

Although it's possible to use a default OG image as a fallback (in this case, `public/nowhylogs-og.jpg`), I wanted to avoid the static usage (and even overuse) of the same image being displayed post after post whenever no other ogImage is specified in the frontmatter.

![NoWhyGames OG image](/public/nowhylogs-og.jpg)

Thanks to [Satori's library](https://github.com/vercel/satori), capable of converting HTML and CSS to SVG (it has its limitations, like RTL languages not being supported yet... but give it time!), it's been possible to **generate dynamic OG images at build time for posts that do not include any**. Then, you will find a beautiful image displaying:

1. `Post title`.
2. `Author name`.
3. `Site title`.

If you need to use non-Latin characters, please remember to add your preferred font in `src/utils/loadGoogleFont.ts`:

```ts
async function loadGoogleFonts(
  text: string
): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>
> {
  const fontsConfig = [
    {
      name: "IBM Plex Mono",
      font: "IBM+Plex+Mono",
      weight: 400,
      style: "normal",
    },
    {
      name: "IBM Plex Mono",
      font: "IBM+Plex+Mono:wght@700",
      weight: 700,
      style: "bold",
    },
  ]
// Rest of the code.
```

### 🔍 Fuzzy search

Remember the many times you tried to find something specific on a website with no search tools? What did the deities you prayed to say about that, dear stranger? Say no more! Since that is what usually happens to me even up to these days, I included again a **global search empowered by [Fuse.js](https://github.com/krisk/Fuse)**, a lightweight fuzzy-search library... with zero dependencies!

For further information, feel free to visit:

- [src/components/Search.tsx](src/components/Search.tsx)

> [!TIP]
> Given that I already used Fuse.js back in the day, you can also check how I implemented it in my dearly beloved [karamaBlog](https://github.com/JuditKaramazov/karamaBlog/tree/main/src/features/Search). I promise you won't regret it!


### 🌓 Light & dark themes

Are you wearing your sunglasses already? No need. Just as it's mandatory nowadays, I incorporated a `theme switcher` to enhance the visual experience for readers. Why? Because even though it says "devlog", it's still a blog - and our retinas should matter a lot to us!

For further information about this specific feature and its components, please, have a look at:

- [public/toggle-theme.js](public/toggle-theme.js)

### 🤝 SEO-friendly

_"Can we stop discussing SEO-thingys for once, Judit?"_, not quite, not _quite_! If it's a matter of discussion, it is simply because its existence might benefit us, in some ways. Let me explain:

What we call "SEO-friendly content" is the type of content that's created in a way that helps the search engines rank it high - and no, it's not all about keywords. Funnily, what we call "SEO" is really meant to help search engines **find, understand, and connect** your content to the topic you're trying to cover.

![NoWhyGames-02](https://github.com/user-attachments/assets/306d8036-afff-44d1-ae52-f43b3392cc69)

Remember the `dynamic ogImage` we discussed before? Even such images (Open Graph ones) are **useful for social media sharing and SEO**... and that's just a part of it!

Let's have a look at our [config.ts file](src/config.ts), for instance:

```ts
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
```

All of these elements (including canonical URLs, social cards, etc.) are essential in order to make our site **easily crawled and indexed by search engines**, leading to better visibility in search engine results.

### 📰 Sitemap & RSS feed

As you all know, RSS is a web feed that allows users and applications to access updates to websites in a standardized, computer-readable format. If you feel like quickly weed through what interests you _and_ my logs happen to be relevant for you... do not hesitate to hit the wavy button! 📡

```ts
import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import getSortedPosts from "@utils/getSortedPosts"
import { SITE } from "@config"

export async function GET() {
  const posts = await getCollection("blog")
  const sortedPosts = getSortedPosts(posts)
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data, slug }) => ({
      link: `posts/${slug}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  })
}
```

The easier, the better! 🚀

---

## 🧞 Commands

You can run all commands from the root of the project using your beautiful terminal:


| Command                              | Action                                                                                                                           |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `npm install`                        | Install dependencies.                                                                                                            |
| `npm run dev`                        | Start local dev server at `localhost:4321`.                                                                                      |
| `npm run build`                      | Build your production site to `./dist/`                                                                                          |
| `npm run preview`                    | Preview your build locally.                                                                                 |
| `npm run format:check`               | Check code format with Prettier.                                                                                                  |
| `npm run format`                     | Format codes with Prettier.                                                                                                       |
| `npm run sync`                       | Generate TypeScript types for all Astro modules. [Learn more here](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `npm run lint`                       | Lint with ESLint.                                                                                                                 |
| `docker compose up -d`               | Run NoWhyLogs on Docker.                              |
| `docker compose run app npm install` | Run any command above into the docker container.                                                                         |
| `docker build -t nowhylogs .`       | Build Docker image for NoWhyLogs.                                                                                               |
| `docker run -p 4321:80 nowhylogs`   | Run NoWhyLogs on Docker. The website will be accessible at `http://localhost:4321`.

---

## 💅 Style

_Ah, yes... the styles, the styles...!_

First things first, allow me to share some of the key elements that made this site's existence possible:

- **Code Formatting** - [Prettier](https://prettier.io/) 
- **Icons** - [Phosphor Icons](https://phosphoricons.com/) 
- **Linting** - [ESLint](https://eslint.org)
- **Styling** - [TailwindCSS](https://tailwindcss.com/)  
- **UI/UX** - [Figma Design File](https://www.figma.com/)  

However, that's just a _minimal part_ of the real work (human one) behind this little project.

<p align="center">
  <a href="https://nowhylogs.vercel.app">
    <img src="https://raw.githubusercontent.com/JuditKaramazov/NoWhyLogs/main/public/favicon.png" width="170" alt="No Why Games original favicon."
        style="filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, .7));">
  </a>
</p>

As for the color palette itself, now that [No Why Games](https://linktr.ee/nowhygames) is a thing, I had to (slightly) distance myself from the style I was so used to, as you could get to see in my [personal portfolio](https://karamazfolio.xyz) and [blog](https://karamablog.xyz). This distance, as well as the new approximation to myself (the indie developer now), wouldn't have been possible without an extremely-well-known-artist around here: [@AuNedelec](https://github.com/AuNedelec).

Allow me to start by saying that I'm extremely sorry for destroying your incredibly beautiful logo, but turns out that I am the worst artist you'll ever find _in your entire life._ All jokes aside, if it wasn't for our conversations while sharing a coffee in Viena, your patience, support, keen eye, and extreme skills, I would never have gathered the courage to embrace video games in a way that's not limited to _writing, speaking, and thinking about them_.

If there is something I'd want to add here other than: "thank you for your talent, support, and company", that's an immense: "thank you for being part of my life". No matter how dark the sky might look sometimes, those clouds always pale in front of the sun... and Grenoble has quite a beautiful sun to admire from the balcony!

---


## 🙌 Immense thanks to them awesome Sponsors

**Los jugadores son mis amigos**. That said, I couldn't close this new chapter of my disturbing life without intoning a loud and sincere: `Thank you! 🥳`. 

To our amazing Sponsor, `@Entreprises LEMRHALI`, `thank you so much` for your support, calm, knowledge, patience, and entire existence. Lately, "uncertainty" is a work spreading quite a huge shadow around our lands - and believe me when I say I'd love to change that reality if only it was possible for me to do so _(where did I forget my magic wand this time? Ah...)_. However, I _do believe_ that everything will find its place sooner than later.

As someone once said:

> An interstate highway — sixty-five — running from Alabama up to just shy of Chicago. It ought to be quitting time in this part of Kentucky, but the daylight just won't shake. The sun just won't go away.

Which translates into: **Hay esperanza.**

<p align="center">
  <img src="https://raw.githubusercontent.com/JuditKaramazov/InsightsFromJuniorToFutureSeniors/main/images/lemrhali-logo.png" width="250" alt="Visual asset of a pixel-art weapon rack."
    style="filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, .7));">
</p>

---

## 🏛 License & Copyright

This work lives under the robust, warm, and beautiful roof of the [MIT License](/LICENSE); whatever visual or written content scapes from it, you'll always find a proper reference specifying the authors and websites behind it.

Attributions are essential these days, and whoever took part directly _or_ indirectly in this project deserves the best possible recognition. That said, and only if you enjoyed what you found here, remember that you can make the Dinosaur extremely happy if you...
<br />

---

<h1 align="center">
  <a href="https://karamazfolio.xyz/"><img src="https://raw.githubusercontent.com/JuditKaramazov/JuditKaramazfolio/a7b1825e33711948f51e53e249751761e1779f56/public/karamaBrand.png" width="100" height="100" alt="Original Karama logo asset.">
</h1>
<h2 align="center">
  <a href="https://www.buymeacoffee.com/JuditKaramazov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 207px !important;" ></a>
</h2>
