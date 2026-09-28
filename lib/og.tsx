import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 }
export const ogAlt = "Théo Noyon — Junior GTM & Marketing Operations"

/** Charge un TTF depuis Google Fonts au build (Satori ne lit pas le woff2). */
async function loadGoogleFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(" ", "+")}:wght@${weight}`
  ).then((res) => res.text())
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1]
  if (!url) throw new Error(`Font not found: ${family} ${weight}`)
  return fetch(url).then((res) => res.arrayBuffer())
}

/**
 * Satori mesure mal l'espace qui suit certains glyphes de Geist (g, s, t…).
 * L'espace insécable n'a pas ce défaut.
 */
const nbsp = (text: string) => text.replaceAll(" ", "\u00a0")

export async function renderOgImage() {
  const [regular, medium, semibold, mono] = await Promise.all([
    loadGoogleFont("Geist", 400),
    loadGoogleFont("Geist", 500),
    loadGoogleFont("Geist", 600),
    loadGoogleFont("Geist Mono", 400),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 100% 100%, rgba(41, 82, 163, 0.38) 0%, rgba(10, 10, 11, 0) 60%)",
          color: "#ededed",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Geist Mono",
            fontSize: 24,
            letterSpacing: "0.02em",
            color: "#8a8a8a",
          }}
        >
          <span>theonoyon-portfolio.vercel.app</span>
          <span>Portfolio</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 128,
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1,
            }}
          >
            Th<span style={{ color: "#5a7fcc" }}>é</span>o Noyon
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 44, fontWeight: 500 }}>
            {nbsp("Junior GTM & Marketing Operations")}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: medium, weight: 500, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  )
}
