import type { Cta, Meta, Section } from "@/content/projects"

export type PressItem = {
  slug: "figaro"
  /** Card */
  tag: string
  title: string
  summary: string
  /** Ligne de métadonnées de la card. */
  byline: string
  /** Page */
  meta: Meta
  cover: { src: string; alt: string }
  sections: Section[]
  cta: Cta
  seo: { title: string; description: string }
}

export const figaro: PressItem = {
  slug: "figaro",
  tag: "Le Figaro · Champs Libres",
  title: "À 25 ans, il gère son patrimoine avec une IA à 20 euros par mois",
  summary:
    "Portrait publié dans Le Figaro Champs Libres sur ma démarche de conception d'une architecture conversationnelle avec Claude pour piloter mes décisions patrimoniales — avec roadmap, protocoles comportementaux et garde-fous.",
  byline: "17 septembre 2026 · Adrien Bez",
  meta: [
    { label: "Media", value: "Le Figaro · Champs Libres" },
    { label: "Date", value: "17 septembre 2026" },
    { label: "Journaliste", value: "Adrien Bez" },
    { label: "Format", value: "Portrait, pleine page" },
  ],
  cover: {
    src: "/press/figaro-cover.jpg",
    alt: "Article du Figaro Champs Libres : « À 25 ans, il gère son patrimoine avec une IA à 20 euros par mois »",
  },
  sections: [
    {
      heading: "Résumé",
      blocks: [
        {
          type: "p",
          text: "Portrait publié dans Le Figaro à l'occasion d'une enquête sur l'usage de l'IA dans la gestion patrimoniale des particuliers.",
        },
        {
          type: "p",
          text: "L'article présente la démarche méthodologique que j'ai construite autour de Claude pour piloter mes décisions patrimoniales : conception d'un mandat clair, structuration d'une roadmap, définition de protocoles comportementaux, mise en place de garde-fous contre les biais de l'IA.",
        },
      ],
    },
    {
      heading: "Angle de l'article",
      blocks: [
        {
          type: "p",
          text: "Le journaliste a choisi d'explorer un cas concret : comment un jeune actif peut, sans conseiller financier dédié, utiliser l'IA conversationnelle comme copilote méthodologique pour arbitrer entre épargne, placements et objectifs long terme.",
        },
        {
          type: "p",
          text: "L'article met en regard ma démarche avec les réserves de l'Autorité des marchés financiers (AMF) sur l'usage de l'IA comme source de conseil financier — un point de vigilance que je partage pleinement et qui a nourri la conception du système (voir le case study Family office personnel).",
        },
      ],
    },
    {
      heading: "Ce que j'en retiens",
      blocks: [
        { type: "p", text: "Trois réflexions à l'issue de l'exercice :" },
        {
          type: "ul",
          items: [
            "L'IA conversationnelle est un copilote méthodologique, pas un conseiller. Le framing est essentiel : garder la tête froide face au marché, demander à l'IA de laisser place au doute plutôt que de produire des certitudes.",
            "La qualité des décisions dépend de la qualité du mandat initial. Un prompt bien construit, avec objectifs clairs et contraintes explicites, change tout.",
            "L'exercice déborde largement de la finance personnelle. Les méthodes que j'ai éprouvées sur ce projet — mandat clair, protocoles, garde-fous — se transposent à tous les workflows IA que je conçois en contexte pro.",
          ],
        },
      ],
    },
  ],
  cta: {
    label: "Lire l'article complet sur Le Figaro",
    href: "https://www.lefigaro.fr/offrir-article/bGVmaWdhcm8uZnJfXzFmMTkxOThlLThhZjEtNmRkMi1hZTYwLTZkOTMyYTVjMTMwNl9fQXJ0aWNsZQ==?shareId=fc3275b4-f928-4613-a8de-07ad2db2f268&utm_source=lefigaro&utm_medium=copy_link&utm_campaign=offer_article",
    external: true,
  },
  seo: {
    title:
      "Portrait Le Figaro — À 25 ans, il gère son patrimoine avec une IA à 20 euros par mois",
    description:
      "Portrait publié dans Le Figaro Champs Libres sur ma démarche de conception d'une architecture conversationnelle avec Claude pour piloter mes décisions patrimoniales.",
  },
}
