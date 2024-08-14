---
author: Judit Lázaro Moyano
pubDatetime: 2024-08-13T21:22:00Z
title: Postmodern beginnings
slug: postmodern-beginnings
featured: true
draft: false
tags:
  - FAQ
  - description
description: "'Some people choose to see the ugliness in this world. The disarray.'"
---

As the last heated hours of this day of August creep away from Barcelona, we are cooling down our screens with some weird, warbly digital words explaining this site's nature and architecture. Fiercely human, inherently spontaneous.

## Table of contents

## Introduction

It's no secret that the author of these words, [Judit Karamazov](https://karamazfolio.xyz), already owns a `computational bonfire` in the shape of a [personal blog](https://karamablog.xyz) where she tries to make sense of her puzzled thoughts while sharing some of her projects as a website developer. However, after many conjectures about the essence of video games, their meaning, limits, possibilities, and working pieces, a project called `No Why Games` was unexpectedly born. A question amidst many was inevitably (yet silently) asked: how can _I_ bring these concepts I'm working on closer to the ones interested in such rudimentary experiments?

If my personal blog focuses on finding a balance between the rambling writer and the stereotypical developer who didn't dare give video games a proper space other than the analytical one, should I finally grab some tools and build a place for my own creations to exist?

### Thorny devlog

> A devlog (in other words, a variation of the canonical [blog](https://en.wikipedia.org/wiki/Blog)) is meant to chronic the development progress of _something_, usually a video game, website, or app.

In the specific case of `No Why Games - Devlog` also known as "[nowhylogs](https://nowhylogs.vercel.app)", choosing [Astro](https://astro.build), pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks, seemed to be the best option to share updates, nonsensical commentaries, and deconstructed theorizations of `No Why Games` as a whole: pure development, musical composition, art design, and so on.

---

## This site's guts

If you feel tempted to get started with your own Astro "diary", here is the list of frontmatter properties and random features I took into account for this specific project.

### Frontmatter dissection

| Property           | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| **_author_**       | Author of the post (usually... _you_).                                              |
| **_canonicalURL_** | Canonical URL (absolute), in case the article is already published on another site. |
| **_description_**  | Description of the post, used in the post excerpt and site description.             |
| **_draft_**        | Indicates if the post is unpublished.                                               |
| **_featured_**     | Indicates if the post should be displayed in the featured section of the home page. |
| **_modDatetime_**  | Modified datetime in ISO 8601 format (include only if the blog post is modified).   |
| **_ogImage_**      | Open Graph image for the post, useful for social media sharing and SEO.             |
| **_pubDatetime_**  | Published datetime in ISO 8601 format.                                              |
| **_slug_**         | Slug for the post; optional but cannot be an empty string.                          |
| **_tags_**         | Related keywords for the post, written in array YAML format.                        |
| **_title_**        | Title of the post, displayed as an H1 header.                                       |

> It is possible to get ISO 8601 datetime by running `new Date().toISOString()` in the console.

### Visual example

In essence, here is the sample frontmatter for a post:

```yaml
# src/content/blog/sample-post.md
---
title: The title of the post
author: your name
pubDatetime: 2022-09-21T05:17:19Z
slug: the-title-of-the-post
featured: true
draft: false
tags:
  - some
  - beautiful
  - tags
  - here
ogImage: ""
description: You should write the description of your post here in a clear and concise way.
canonicalURL: https://example.net/my-article-was-originally-posted-here
---
```

---

### Tags and spiderwebs

If no `tag` property is specified, the default `others` will be used as a tag for that post, as it's specified in the `/src/content/config.ts` file:

```ts
// src/content/config.ts
export const blogSchema = z.object({
  // ---
  draft: z.boolean().optional(),
  tags: z.array(z.string()).default(["others"]),
  // ---
});
```

---

### (Uns)table of contents

By default (do not blame it entirely on me!), articles and posts do not include what we know as a [Table of contents](https://en.wikipedia.org/wiki/Table_of_contents) (abbreviated informally as TOC). In order to include it, keep in mind what follows:

1. You can write `Table of contents` in **h2 format** (## in markdown), and place it where you want it to appear.

2. If you desire to place your `Table of contents` under an intro paragraph, you can do that in the following way:

```md
---
author: Judit Lázaro Moyano
pubDatetime: 2024-08-13T16:22:00Z
title: Postmodern beginnings
slug: postmodern-beginnings
featured: true
draft: false
tags:
  - FAQ
  - description
description: "'Some people choose to see the ugliness in this world. The disarray.'"
---

As the last heated hours of July creep away from Barcelona, we are cooling down our screens with some weird, warbly digital words explaining this site's nature and architecture. Fiercely human, inherently spontaneous.

## Table of contents

## Introduction

<!-- The rest of your beautiful post -->
```

---

### Images and imagineries: storation and display

Here are two methods for storing images and displaying them inside a markdown file.

> Technically, you can store images inside any directory under `src`. In here, `src/assets` is just a recommendation. Also, don't forget the existence of useful compression sites like [TinyPng](https://tinypng.com/) and [TinyJPG](https://tinyjpg.com/)!

1. Inside the `src/assets/` directory (recommended).
   These images will be automatically optimized by Astro, through, as it's specified in their ["Image Service API"](https://docs.astro.build/en/reference/image-service-reference/) section.
   Example:

```md
![example's description](@assets/images/example.jpg)

<!-- OR -->

![example's description](../../assets/images/example.jpg)

<!-- Using img tag or Image component ❌ won't work ❌ -->
<img src="@assets/images/example.jpg" alt="example's description">
<!-- ^^ This is wrong -->
```

2. Inside the `public` directory.
   Keep in mind, however, that images stored in the `public` directory remain untouched by Astro, which means that they will remain unoptimized - and you'll need to handle image optimization by yourself.
   Example:

```md
![something](/assets/images/example.jpg)

<!-- OR -->

<img src="/assets/images/example.jpg" alt="something">
```

---

## Last campfire: final words

Definitely not my last words, but clearly the ones closing this post.

Although I wanted to give developers an approximation of what's going on in this website (under the hood style, just like you saw above), the truth is that my main purpose is to give _everyone_ some insight into the development process without making it sound way too technical or unreachable.

### Medium, GitHub, and the void

As previously stated, I already discussed video games on different platforms, such as:

- [Medium](https://medium.com/@JuditKaramazov), with some articles as part of my personal ["You (do/don't) need" series](https://medium.com/@JuditKaramazov/list/web-app-game-development-19a0f2c3514e) - a clear reference to Evangelion, just like the big nerd that I am.
- [GitHub](https://github.com/JuditKaramazov/), more specifically in my book [Rising Up: Insights from a Junior to Future Seniors](https://github.com/JuditKaramazov/InsightsFromJuniorToFutureSeniors/blob/main/content/07-Game-development/README.md).
- My [personal blog](https://karamablog.xyz).

If I had to quote myself, I would say:

> You (don’t) have to be a hero, but you can definitely create a shell of a game that accomplishes the basic goals you’d want to represent and deliver to the world. You can learn programming as you go, which means that you can make a game. You have endless tools around you, hands to clap, and free music at reach, which means that you can make a game. Perhaps you don’t consider yourself the most talented artist ever, but that’s probably your brain telling you that you can’t do something — and that’s not accurate at all. There are games starring shapes, explosions of colors, and even stick figures. Can you draw a stick or a triangle? Then, you can make a game.

### New platforms and ways

Now that I started walking a new path, allow me to remind you some behind-the-screen-yet-human essentials:

1. It's possible to find **all No Why Games platforms** listed in the ["Why" section](http://nowhylogs.vercel.app/why/).

2. If you are looking for **some other ways of communication**, please remember that my preferred social media appears either in this exact website, either available in my [personal portfolio](https://karamazfolio.xyz).

### What now?

As I _think_ I can draw sticks and triangles, let's make games. No "why".
