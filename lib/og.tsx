import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 }
export const ogAlt = "Théo Noyon — Junior GTM & Marketing Operations"

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background:
            "linear-gradient(135deg, #0a0a0b 0%, #0a0a0b 50%, #1b3a6b 100%)",
          color: "#ededed",
        }}
      >
        <div style={{ display: "flex", fontSize: 104, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          Th<span style={{ color: "#5a7fcc" }}>é</span>o Noyon
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 40, color: "#8a8a8a" }}>
          Junior GTM &amp; Marketing Operations
        </div>
      </div>
    ),
    ogSize
  )
}
