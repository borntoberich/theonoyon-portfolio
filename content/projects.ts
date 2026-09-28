export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }

export type Section = {
  heading: string
  blocks: Block[]
}

export type Project = {
  slug: "agent-ia" | "automation-ia" | "esport-research"
  /** Card */
  tag: string
  title: string
  summary: string
  org: string
  date: string
  tags: string[]
  /** Case study */
  tldr: string
  meta: { label: string; value: string }[]
  sections: Section[]
  download?: { label: string; href: string; filename: string }
  seo: { title: string; description: string }
}

export const projects: Project[] = [
  {
    slug: "automation-ia",
    tag: "Process design",
    title:
      "Cartographie et architecture IA d'un processus Trade Marketing multi-pays",
    summary:
      "Analyse end-to-end d'un processus représentant 5,5 M€ annuels sur 17 marchés européens et 225 fournisseurs. Proposition d'architecture IA soumise au comité innovation.",
    org: "Manutan Group",
    date: "2026",
    tags: ["Process", "AI-architecture", "Multi-market"],
    tldr: "Analyse end-to-end d'un processus Trade Marketing représentant 5,5 M€ annuels sur 17 marchés européens et 225 fournisseurs. Proposition d'une architecture IA soumise au comité innovation.",
    meta: [
      {
        label: "Context",
        value: "Manutan Group · Programme d'innovation interne",
      },
      { label: "Period", value: "2026" },
      {
        label: "Role",
        value: "Cartographie process, chiffrage friction, architecture IA",
      },
      { label: "Status", value: "En cours d'arbitrage comité innovation" },
    ],
    sections: [
      {
        heading: "Le contexte",
        blocks: [
          {
            type: "p",
            text: "Le processus Trade Marketing chez Manutan Group orchestre les campagnes promotionnelles co-financées avec les fournisseurs sur 17 marchés européens. Volume annuel : 5,5 M€. Fournisseurs impliqués : 225. Interlocuteurs transverses : marketing, sales, product, subsidiaries locales.",
          },
          {
            type: "p",
            text: "Le processus fonctionne, mais avec une complexité opérationnelle croissante et des points de friction identifiés par les équipes terrain.",
          },
        ],
      },
      {
        heading: "La démarche",
        blocks: [
          {
            type: "p",
            text: "J'ai construit une cartographie complète du processus en trois étapes :",
          },
          {
            type: "ol",
            items: [
              "Interviews qualitatives avec les acteurs (équipes centrales, subsidiaries, ops fournisseurs) pour identifier le processus tel qu'il est vécu, pas seulement tel qu'il est documenté.",
              "Reconstitution du workflow réel avec ses points de décision, ses handovers entre équipes, ses systèmes touchés.",
              "Chiffrage des frictions détectées, en volume et en temps consommé.",
            ],
          },
        ],
      },
      {
        heading: "Les frictions détectées",
        blocks: [
          {
            type: "p",
            text: "Deux frictions majeures ont émergé du diagnostic :",
          },
          {
            type: "ul",
            items: [
              "63% des réservations de campagnes ne contenaient pas la référence produit au moment de la saisie initiale, forçant les équipes à revenir en aval pour compléter l'information.",
              "120 à 360 heures par an étaient consommées en ressaisie manuelle entre systèmes non connectés, avec un taux d'erreur associé non nul.",
            ],
          },
          {
            type: "p",
            text: "Ces deux frictions ont un point commun : elles proviennent de moments où l'information existe déjà quelque part dans le système, mais n'est pas connectée au bon endroit au bon moment.",
          },
        ],
      },
      {
        heading: "L'architecture IA proposée",
        blocks: [
          {
            type: "p",
            text: "Plutôt que d'automatiser la saisie (approche RPA classique), j'ai proposé une architecture IA qui traite les frictions à la source :",
          },
          {
            type: "ul",
            items: [
              "Un agent IA en interface d'entrée du processus, capable de suggérer automatiquement les références produits manquantes en croisant la nature de la campagne, le fournisseur et l'historique.",
              "Une couche d'orchestration entre les systèmes, où l'IA sert de traducteur contextuel plutôt que de simple pipe.",
              "Un système de contrôle humain en boucle courte pour les cas ambigus, garantissant la qualité sans bloquer le flux.",
            ],
          },
          {
            type: "p",
            text: "Le dossier a été soumis au comité innovation Manutan. Statut : arbitrage en cours.",
          },
        ],
      },
      {
        heading: "Ce que j'en retiens",
        blocks: [
          { type: "p", text: "Trois apprentissages :" },
          {
            type: "ul",
            items: [
              "L'analyse process est un préalable non négociable à toute proposition IA. Sans cartographie honnête du réel, on automatise un processus imaginé et non le processus vécu.",
              "La friction chiffrée est bien plus persuasive que la friction ressentie. \"63% des réservations sans référence produit\" a plus de poids en comité que \"c'est compliqué\".",
              "L'IA n'est pas toujours la meilleure réponse. Pour être défendable, la proposition doit démontrer que l'IA fait ce qu'un système déterministe ne peut pas faire — sinon on empile de la complexité.",
            ],
          },
        ],
      },
    ],
    seo: {
      title: "Automatisation IA d'un processus Trade Marketing 5,5 M€ — Théo Noyon",
      description:
        "Cartographie end-to-end et architecture IA d'un processus multi-pays chez Manutan Group. Comité innovation.",
    },
  },
  {
    slug: "agent-ia",
    tag: "AI in production",
    title: "Un agent IA dans le workflow d'une Content Factory Groupe",
    summary:
      "Développement d'un agent IA (Claude, GPT) intégré au workflow de production content, réduisant les allers-retours entre équipes d'environ 1h par brief.",
    org: "Manutan Group",
    date: "2026",
    tags: ["AI", "Workflow-automation", "Content"],
    tldr: "Réduction d'environ 1h par brief content grâce à un agent IA (Claude, GPT) intégré au workflow transverse d'une équipe marketing multi-pays.",
    meta: [
      { label: "Context", value: "Manutan Group · Équipe Go-To-Market" },
      { label: "Period", value: "2026" },
      { label: "Role", value: "Développement & intégration" },
      { label: "Stack", value: "Claude, GPT, prompt engineering, Notion" },
    ],
    sections: [
      {
        heading: "Le contexte",
        blocks: [
          {
            type: "p",
            text: "La Content Factory de Manutan Group produit l'ensemble du contenu marketing déployé sur 17 marchés européens. Elle sert plusieurs équipes en amont : marketing produit, e-merchandising, communication interne, GTM.",
          },
          {
            type: "p",
            text: "Chaque brief part d'un émetteur (par exemple un Chef de Produit) et arrive à la Content Factory qui produit le livrable (fiche produit, landing page, contenu campagne). Entre les deux : une phase itérative d'allers-retours pour clarifier la demande, valider les intentions, préciser les livrables attendus.",
          },
        ],
      },
      {
        heading: "Le problème",
        blocks: [
          {
            type: "p",
            text: "Chaque brief perdait en moyenne une heure en allers-retours de clarification avant que la Content Factory n'ait la matière suffisante pour produire.",
          },
          {
            type: "p",
            text: "À l'échelle du volume de briefs traités mensuellement, ce temps se cumulait en une friction opérationnelle mesurable. Le problème n'était pas la qualité des briefs — c'était la structure des briefs. Les émetteurs remplissaient des templates statiques qui n'anticipaient pas les questions récurrentes de la Content Factory.",
          },
        ],
      },
      {
        heading: "L'approche",
        blocks: [
          {
            type: "p",
            text: "Plutôt que de refaire le template (approche déjà tentée), j'ai proposé un agent IA en amont du template : un assistant conversationnel qui questionne l'émetteur pour extraire l'intention complète du brief, puis génère un livrable structuré directement exploitable par la Content Factory.",
          },
          { type: "p", text: "Trois choix de conception clés :" },
          {
            type: "ul",
            items: [
              "Approche conversationnelle plutôt que formulaire à trous. L'agent pose des questions contextuelles, adapte ses relances à la nature du brief (produit, campagne, contenu éditorial).",
              "Prompt engineering itératif. Base de connaissances sur les typologies de briefs Manutan, guardrails sur les questions obligatoires, ton adapté au contexte pro.",
              "Sortie structurée. Le livrable généré suit la structure attendue par la Content Factory, ce qui évite le travail de reformatage en aval.",
            ],
          },
        ],
      },
      {
        heading: "L'impact",
        blocks: [
          {
            type: "p",
            text: "L'agent est en production sur le périmètre transverse Groupe. Les gains observés :",
          },
          {
            type: "ul",
            items: [
              "Environ 1h gagnée par brief en moyenne (moins d'allers-retours).",
              "Périmètre couvert : marketing, product, e-merchandising.",
              "Adoption progressive au sein des équipes émettrices.",
            ],
          },
        ],
      },
      {
        heading: "Ce que j'en retiens",
        blocks: [
          { type: "p", text: "Trois apprentissages transposables :" },
          {
            type: "ul",
            items: [
              "Le prompt engineering en contexte enterprise ne s'improvise pas. Il demande une connaissance fine des typologies internes et des non-dits organisationnels que l'IA doit apprendre à contourner.",
              "L'adoption compte autant que la qualité technique. Un agent parfait mais mal introduit reste sur l'étagère. J'ai passé autant de temps sur la conduite du changement que sur les prompts.",
              "L'IA générative appliquée au marketing n'est pas un gadget. Bien intégrée dans un workflow existant, elle produit un ROI temps immédiat et mesurable.",
            ],
          },
        ],
      },
    ],
    seo: {
      title: "Agent IA dans une Content Factory Groupe — Théo Noyon",
      description:
        "Développement d'un agent IA en production pour un workflow content marketing multi-pays chez Manutan Group.",
    },
  },
  {
    slug: "esport-research",
    tag: "Academic research",
    title:
      "Sponsoring esport, relations parasociales et congruence sponsor-sponsee",
    summary:
      "Étude pilote quantitative sur les mécanismes d'efficacité du sponsoring esport (LEC, Karmine Corp, Razer). Note 18/20.",
    org: "KEDGE Business School",
    date: "Août 2026",
    tags: ["Research", "Esport", "Quantitative"],
    tldr: "Étude pilote quantitative sur les mécanismes d'efficacité du sponsoring dans l'écosystème esport, appliquée à des cas réels (LEC, Karmine Corp, Razer). Note : 18/20.",
    meta: [
      {
        label: "Context",
        value:
          "KEDGE Business School · Cours Business Research Skills & Methods",
      },
      { label: "Period", value: "Août 2026" },
      {
        label: "Role",
        value:
          "Conception recherche, revue de littérature, design instrument, pilote",
      },
      {
        label: "Deliverable",
        value: "Rapport académique 2 455 mots + questionnaire pilote testé",
      },
    ],
    sections: [
      {
        heading: "La question de recherche",
        blocks: [
          {
            type: "p",
            text: "Le sponsoring esport a explosé sur la décennie 2020, avec deux typologies distinctes de sponsors :",
          },
          {
            type: "ul",
            items: [
              "Sponsors endémiques : marques natives du secteur gaming (Razer, Logitech, périphériques, éditeurs).",
              "Sponsors non-endémiques : marques venant d'autres secteurs (banques, télécoms, alimentaire, mode) qui cherchent à toucher l'audience jeune et engagée de l'esport.",
            ],
          },
          {
            type: "p",
            text: "La littérature académique s'est peu penchée sur ce qui rend un sponsoring esport efficace, et surtout sur ce qui distingue l'efficacité perçue entre sponsors endémiques et non-endémiques.",
          },
          {
            type: "p",
            text: "Ma question : les relations parasociales entre l'audience et les joueurs/streamers modèrent-elles l'effet de la congruence perçue sponsor-sponsee sur l'efficacité du sponsoring ?",
          },
        ],
      },
      {
        heading: "Le cadre théorique",
        blocks: [
          {
            type: "p",
            text: "Le travail mobilise trois construits issus de la littérature :",
          },
          {
            type: "ul",
            items: [
              "La relation parasociale (PSR) : le lien unilatéral qu'un membre d'audience développe avec une figure médiatique. Concept ancien (Horton & Wohl, 1956) mais renouvelé par les streams live et le contenu asynchrone.",
              "La congruence sponsor-sponsee : le fit perçu entre la marque sponsor et l'entité sponsorisée (équipe, joueur, ligue).",
              "L'efficacité perçue du sponsoring : ce que l'audience croit que le sponsoring apporte à la marque et à l'entité sponsorisée.",
            ],
          },
          {
            type: "p",
            text: "L'hypothèse : la relation parasociale joue un rôle modérateur sur la relation entre congruence et efficacité. En clair : plus l'audience est attachée à un joueur, plus la congruence du sponsor devient déterminante dans la perception d'efficacité.",
          },
        ],
      },
      {
        heading: "Le design méthodologique",
        blocks: [
          {
            type: "p",
            text: "Étude quantitative par questionnaire (Google Forms) :",
          },
          {
            type: "ul",
            items: [
              "Échelle de Likert 5 points avec option neutre.",
              "Items inversés par bloc construit (PSR, congruence) pour détecter les réponses données sans attention.",
              "Filtre 18+ pour conformité RGPD.",
              "Le répondant nomme lui-même un sponsor réel qu'il connaît, plutôt que de réagir à un stimulus fictif imposé.",
              "Définition intégrée d'\"endémique\" dans la question, car le terme n'est pas familier à tous.",
            ],
          },
          {
            type: "p",
            text: "Instrument pilote testé sur 10 répondants recrutés via Discord (communautés gaming FR).",
          },
        ],
      },
      {
        heading: "Les résultats du pilote",
        blocks: [
          { type: "p", text: "Le pilote visait à valider trois choses :" },
          {
            type: "ul",
            items: [
              "Le branchement conditionnel du questionnaire fonctionne (un mineur ne peut pas continuer, un non-suiveur d'esport est routé vers la sortie).",
              "Les items sont compris tels qu'ils étaient formulés.",
              "Les données récoltées sont exploitables (pas de straight-lining, échantillon utilisable).",
            ],
          },
          {
            type: "p",
            text: "Les 10 réponses collectées ont validé le design instrumental. Une étude à échelle complète est faisable avec ce questionnaire.",
          },
        ],
      },
      {
        heading: "Ce que j'en retiens",
        blocks: [
          {
            type: "p",
            text: "Trois apprentissages transposables au marketing appliqué :",
          },
          {
            type: "ul",
            items: [
              "Le sponsoring esport ne fonctionne pas comme le sponsoring sportif traditionnel. Les mécanismes d'attachement (parasocial) sont différents, plus intenses, plus individualisés.",
              "La question de la congruence est plus complexe qu'un simple fit sectoriel. Un sponsor non-endémique peut être perçu comme congruent si son positionnement de marque résonne avec la culture esport.",
              "Pour les marques qui investissent dans l'esport (Razer, Karmine Corp, LEC sponsors), les enseignements pratiques sont directs : investir sur les figures qui génèrent le plus de parasocial, soigner la cohérence narrative plutôt que la cohérence sectorielle.",
            ],
          },
        ],
      },
    ],
    download: {
      label: "Télécharger le rapport complet (PDF)",
      href: "/rapport-sponsoring-esport.pdf",
      filename: "Theo-Noyon-Rapport-Sponsoring-Esport.pdf",
    },
    seo: {
      title:
        "Recherche appliquée : sponsoring esport & relations parasociales — Théo Noyon",
      description:
        "Étude pilote quantitative sur les mécanismes d'efficacité du sponsoring esport (LEC, Karmine Corp, Razer). KEDGE, 18/20.",
    },
  },
]

export function getProject(slug: Project["slug"]) {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) throw new Error(`Unknown project: ${slug}`)
  return {
    project: projects[index],
    next: projects[(index + 1) % projects.length],
  }
}
