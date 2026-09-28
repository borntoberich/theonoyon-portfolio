# theonoyon-portfolio

Portfolio de Théo Noyon — Junior GTM & Marketing Operations.

Next.js 15 (App Router, TypeScript strict) · Tailwind CSS 4 · shadcn/ui · Framer Motion · next-themes · Geist.

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm run start      # sert le build
npm run lint
```

Node 20+ requis.

## Structure

```
app/                     routes (App Router) + sitemap, robots, image OG
  projects/<slug>/       les 3 case studies
components/portfolio/    composants du site (Nav, Footer, Hero, ProjectCard…)
components/ui/           composants shadcn/ui
content/projects.ts      contenu typé des 3 projets (cards + case studies)
lib/site.ts              URL du site, email, LinkedIn, CV
public/                  cv.pdf, rapport-sponsoring-esport.pdf (placeholders)
```

- **Modifier un projet** : `content/projects.ts`.
- **Palette** : variables CSS dans `app/globals.css` (`:root` = light, `.dark` = dark, thème par défaut).
- **Remplacer les PDF** : déposer les vrais fichiers sous le même nom dans `public/`.

## Déploiement Vercel

1. Pousser le repo sur GitHub, puis « Add New → Project » sur vercel.com et importer le repo (framework détecté automatiquement).
2. (Optionnel) Définir `NEXT_PUBLIC_SITE_URL` (ex. `https://theonoyon.com`) pour les URLs canoniques, Open Graph et le sitemap. Sans cette variable, l'URL de production Vercel est utilisée.

Ou en CLI :

```bash
npx vercel          # preview
npx vercel --prod   # production
```
