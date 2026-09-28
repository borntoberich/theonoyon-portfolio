export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

export const site = {
  name: "Théo Noyon",
  email: "theo.noyon@hotmail.com",
  linkedin: {
    label: "linkedin.com/in/theo-noyon",
    href: "https://www.linkedin.com/in/theo-noyon",
  },
  cv: {
    href: "/cv.pdf",
    filename: "Theo-Noyon-CV.pdf",
  },
} as const
