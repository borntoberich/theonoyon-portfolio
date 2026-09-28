import type { Metadata } from "next"

import { ContactLinks } from "@/components/portfolio/ContactLinks"
import { Container } from "@/components/portfolio/Container"
import { H2, h1Class } from "@/components/portfolio/Prose"
import { Reveal } from "@/components/portfolio/Reveal"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  title: "À propos — Théo Noyon",
  description: "Parcours, ce que je cherche, et comment me contacter.",
  path: "/about",
})

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Ce que je fais",
    paragraphs: [
      "Je suis alternant Growth Marketing chez Manutan Group, dans l'équipe Go-To-Market qui pilote les campagnes marketing sur 17 marchés européens. Au quotidien, je travaille sur des programmes GTM multi-pays, la coordination transverse marketing/product/e-merch, et l'intégration d'outils IA dans nos workflows.",
      "Mon terrain de jeu : l'IA appliquée au marketing en environnement enterprise. Pas les démos et les slides d'inspiration — la production réelle, avec ses contraintes de scale, d'adoption et de fiabilité.",
    ],
  },
  {
    heading: "Le parcours",
    paragraphs: [
      "En parallèle de l'alternance, je suis le Programme Grande École de KEDGE Business School, spécialisation Strategic Branding & Marketing (English Track). J'ai également suivi le programme HBR \"Lead with Tech & AI\" et je progresse actuellement sur les parcours certifiants P&G VIA (Digital Fluency, Data & Digital Skills, AI & Automation).",
      "Avant Manutan, j'ai obtenu une Licence Administration Économique et Sociale à l'Université de Rouen. Entre les deux, un passage terrain en vente B2C au Mexique — une école de résilience et d'adaptation qui reste utile aujourd'hui.",
    ],
  },
  {
    heading: "Ce que je cherche",
    paragraphs: [
      "Un premier poste tech en septembre 2027 : consumer tech, gaming, marketplace ou fintech. Idéalement dans une scale-up ou un groupe avec une culture produit forte et une ambition IA native.",
      "Les postes qui m'attirent : Junior GTM Manager, Junior Product Marketing Manager, Marketing Operations, Growth Analyst — tous les rôles qui combinent stratégie GTM, exécution transverse et outillage moderne.",
      "Je suis basé à Paris, disponible pour discuter d'opportunités CDD/CDI à partir de septembre 2027.",
    ],
  },
  {
    heading: "Hors travail",
    paragraphs: [
      "Gaming compétitif : je suis l'écosystème esport (LEC, Karmine Corp) et j'y trouve autant de matière business que de plaisir de joueur. Ma revue de littérature académique sur le sujet en témoigne.",
      "Voyage (Asie, Amérique du Sud) et lecture professionnelle (Marketing 6.0 de Kotler, HBR).",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="pt-16 pb-8 md:pt-24">
        <Container>
          <h1 className={h1Class}>À propos</h1>

          {sections.map((section, i) => {
            const id = `about-${i + 1}`
            return (
              <Reveal key={section.heading} disabled={i === 0}>
                <section aria-labelledby={id} className="mt-14 md:mt-16">
                  <H2 id={id}>{section.heading}</H2>
                  <div className="mt-6 space-y-5">
                    {section.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            )
          })}
        </Container>
      </div>

      <section aria-labelledby="discutons" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <H2 id="discutons">Discutons.</H2>
            <div className="mt-8">
              <ContactLinks cvLabel="Télécharger le CV" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
