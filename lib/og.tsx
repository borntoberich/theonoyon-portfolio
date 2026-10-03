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
 * Satori mesure mal l'espace qui suit certains glyphes (g, s, t…).
 * L'espace insécable n'a pas ce défaut.
 */
const nbsp = (text: string) => text.replaceAll(" ", "\u00a0")

const ink = "#0a0a0b"
const muted = "#5f5f5f"
const accent = "#1b3a6b"

/** Reprend la section Contact du site (mode clair), avec le nom en titre. */
export async function renderOgImage() {
  const [regular, semibold, mono] = await Promise.all([
    loadGoogleFont("Geist", 400),
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
          padding: "64px 80px 44px",
          backgroundColor: "#fafafa",
          fontFamily: "Geist",
          color: ink,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Geist Mono", fontSize: 26, color: muted }}>
            {nbsp("Junior GTM & Marketing Operations")}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Th<span style={{ color: accent }}>é</span>o Noyon
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 32 }}>
            {nbsp("Disponible en CDD ou CDI à partir de septembre 2027.")}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 34, gap: 14, fontSize: 30 }}>
            <span>theo.noyon@hotmail.com</span>
            <span>linkedin.com/in/theo-noyon</span>
            <span>{nbsp("Download CV")}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid #e5e5e5",
            fontSize: 22,
            color: muted,
          }}
        >
          <span>{nbsp("© 2026 Théo Noyon")}</span>
          <span>theonoyon-portfolio.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  )
}

/** Coupe un texte en lignes d'au plus `max` caractères (Satori ne renvoie pas à la ligne avec des espaces insécables). */
function wrapLines(text: string, max: number) {
  // Un nombre reste collé au mot qui le suit (« 20 euros », « 25 ans »).
  return text.replace(/(\d) /g, "$1\u00a0").split(" ").reduce<string[]>((lines, word) => {
    const last = lines.at(-1)
    if (last !== undefined && `${last} ${word}`.length <= max) lines[lines.length - 1] = `${last} ${word}`
    else lines.push(word)
    return lines
  }, [])
}

/** Image de partage d'une page de contenu (case study, presse) : même langage que l'image principale. */
export async function renderArticleOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const [regular, semibold, mono] = await Promise.all([
    loadGoogleFont("Geist", 400),
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
          padding: "64px 80px 44px",
          backgroundColor: "#fafafa",
          fontFamily: "Geist",
          color: ink,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Geist Mono", fontSize: 30, color: accent }}>
            {nbsp(eyebrow)}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 28,
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
            }}
          >
            {wrapLines(title, 30).map((line) => (
              <span key={line}>{nbsp(line)}</span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 22,
            borderTop: "1.5px solid #e5e5e5",
            fontSize: 26,
            color: muted,
          }}
        >
          <div style={{ display: "flex" }}>
            Th<span style={{ color: accent }}>é</span>
            {nbsp("o Noyon")}
          </div>
          <span>theonoyon-portfolio.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  )
}
