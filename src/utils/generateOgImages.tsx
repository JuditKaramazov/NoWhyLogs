import satori, { type SatoriOptions } from "satori"
import { Resvg } from "@resvg/resvg-js"
import { type CollectionEntry } from "astro:content"
import postOgImage from "./og-templates/post"
import siteOgImage from "./og-templates/site"

const fetchFonts = async () => {
  const fontFileRegular = await fetch(
    "https://github.com/fontsource/fontsource/raw/main/fonts/source-code-pro/files/source-code-pro-latin-400-normal.woff2"
  )
  const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer()

  const fontFileBold = await fetch(
    "https://github.com/fontsource/fontsource/raw/main/fonts/source-code-pro/files/source-code-pro-latin-600-normal.woff2"
  )
  const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer()

  return { fontRegular, fontBold }
}

const { fontRegular, fontBold } = await fetchFonts()

const options: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: "Source Code Pro",
      data: fontRegular,
      weight: 400,
      style: "normal",
    },
    {
      name: "Source Code Pro",
      data: fontBold,
      weight: 600,
      style: "normal",
    },
  ],
}

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg)
  const pngData = resvg.render()
  return pngData.asPng()
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await satori(postOgImage(post), options)
  return svgBufferToPngBuffer(svg)
}

export async function generateOgImageForSite() {
  const svg = await satori(siteOgImage(), options)
  return svgBufferToPngBuffer(svg)
}
