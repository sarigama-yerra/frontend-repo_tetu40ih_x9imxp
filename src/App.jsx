import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, BookOpen, Mail, Github, Linkedin, Youtube, Twitter, Sparkles, Code2, Mic2, Newspaper, ChevronDown, Star, Quote } from 'lucide-react'

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 shadow-md" />
            <span className="text-lg font-semibold tracking-tight">Alex Marchand</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#projects" className="hover:text-gray-900">Projets</a>
            <a href="#courses" className="hover:text-gray-900">Formations</a>
            <a href="#content" className="hover:text-gray-900">Contenu</a>
            <a href="#about" className="hover:text-gray-900">À propos</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">Me contacter</a>
          </div>
          <button className="md:hidden p-2 rounded-lg border border-gray-200" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">
            <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#projects" onClick={() => setOpen(false)} className="py-2">Projets</a>
            <a href="#courses" onClick={() => setOpen(false)} className="py-2">Formations</a>
            <a href="#content" onClick={() => setOpen(false)} className="py-2">Contenu</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">À propos</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 rounded-lg bg-gray-900 text-white text-center">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-sky-400/20 via-emerald-400/10 to-violet-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.04),transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div variants={stagger} initial="hidden" animate="show" className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-medium bg-white/70 backdrop-blur px-3 py-1 rounded-full w-max border border-white/60 shadow-sm">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>Développeur full stack • Narration produit</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Je crée des expériences qui racontent une histoire
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600"> pour le web moderne</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
              Créateur de contenu et formateur en technologies, j’aide les marques et les talents à concevoir des produits pédagogiques et des interfaces mémorables.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">
                Voir mes projets <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                Me contacter
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <a className="flex items-center gap-2 hover:text-gray-900" href="https://github.com/" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
              <a className="flex items-center gap-2 hover:text-gray-900" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a className="flex items-center gap-2 hover:text-gray-900" href="https://youtube.com/" target="_blank" rel="noreferrer"><Youtube className="h-4 w-4" /> YouTube</a>
              <a className="flex items-center gap-2 hover:text-gray-900" href="https://x.com/" target="_blank" rel="noreferrer"><Twitter className="h-4 w-4" /> Twitter</a>
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <motion.div variants={fadeUp} className="relative aspect-[4/3] rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50" />
              <div className="relative z-10 h-full w-full grid grid-cols-3 gap-3 p-4">
                <div className="col-span-2 rounded-xl bg-white border border-gray-100 p-4 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="text-xs text-gray-500">Étude de cas</div>
                    <div className="mt-1 font-semibold">Plateforme e-learning interactive</div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm text-indigo-600">
                    <Play className="h-4 w-4" /> Voir la démo
                  </div>
                </div>
                <div className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
                  <div className="text-xs text-gray-500">Stack</div>
                  <div className="mt-1 text-sm">React • FastAPI • MongoDB</div>
                </div>
                <div className="rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
                  <div className="text-xs text-gray-500">Rôle</div>
                  <div className="mt-1 text-sm">Design • Dev • Motion</div>
                </div>
                <div className="col-span-2 rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
                  <div className="text-xs text-gray-500">Impact</div>
                  <div className="mt-1 text-sm">+38% d’engagement sur les cours</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && <div className="text-xs font-medium tracking-wider uppercase text-indigo-600">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  )
}

function Projects() {
  const items = [
    { title: 'Studio vidéo interactif', tag: 'Produit', desc: 'Outils live + chapitrage automatique + templates.', impact: '+120k vues/mois', stack: 'React, FFmpeg, WebAssembly' },
    { title: 'Plateforme de cours', tag: 'Éducation', desc: 'Progression, évaluations, certification, analytics.', impact: '+18k apprenants', stack: 'React, FastAPI, MongoDB' },
    { title: 'Kit narration produit', tag: 'Design', desc: 'Composants UI animés pour raconter des features.', impact: '-30% time-to-ship', stack: 'Tailwind, Framer Motion' },
    { title: 'Podcast tech', tag: 'Média', desc: 'Site + flux RSS + générateur de shorts auto.', impact: 'Top 10 FR Cat. Tech', stack: 'Next.js, Edge Functions' },
    { title: 'SaaS créateurs', tag: 'Growth', desc: 'Automatisation factures, paiement, sponsors.', impact: '+45% revenu récurrent', stack: 'Stripe, Webhooks' },
    { title: 'Boîte à outils IA', tag: 'R&D', desc: 'Assistants pour scripts, sous-titres, résumés.', impact: 'x3 vitesse prod', stack: 'OpenAI, Whisper' },
  ]
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Réalisations" title="Projets sélectionnés" subtitle="Une approche orientée impact, du concept à la livraison." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: idx * 0.05, duration: 0.5 }} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="text-xs text-indigo-600 font-medium">{p.tag}</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">{p.title}</div>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-gray-200 p-3">Impact <span className="font-medium text-gray-900">{p.impact}</span></div>
                <div className="rounded-lg border border-gray-200 p-3">Stack <span className="font-medium text-gray-900">{p.stack}</span></div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-transparent group-hover:ring-indigo-200 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Courses() {
  const items = [
    { icon: BookOpen, title: 'Architecture front‑end moderne', level: 'Intermédiaire', hours: '8h', outcome: 'Pattern thinking, performances, accessibilité' },
    { icon: Code2, title: 'Full‑stack avec React & FastAPI', level: 'Avancé', hours: '10h', outcome: 'API, Auth, DB, déploiement' },
    { icon: Sparkles, title: 'Motion & narration avec Framer Motion', level: 'Tous niveaux', hours: '6h', outcome: 'Micro‑interactions, scénographie, story beats' },
  ]
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Formations" title="Apprenez avec moi" subtitle="Des parcours concrets, orientés pratique et livrables réels." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((c, idx) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-md">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-lg font-semibold text-gray-900">{c.title}</div>
              <div className="mt-1 text-sm text-gray-600">{c.level} • {c.hours}</div>
              <p className="mt-2 text-sm text-gray-600">{c.outcome}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900">Recevoir le programme <ArrowRight className="h-4 w-4" /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContentHub() {
  const items = [
    { icon: Youtube, title: 'Chaîne YouTube', stat: '52k abonnés', desc: 'Tutoriels, études de cas et formats courts sur le dev & le design.' },
    { icon: Newspaper, title: 'Newsletter', stat: '12k lecteurs', desc: 'Une lettre hebdo sur la création de contenu tech et le produit.' },
    { icon: Mic2, title: 'Podcast', stat: 'Top 10 FR', desc: 'Entretiens avec des makers et CTO sur la pédagogie et la stratégie.' },
  ]
  return (
    <section id="content" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Contenu" title="Apprendre, partager, inspirer" subtitle="Des formats pédagogiques multi‑plateformes, avec une touche narrative." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((i, idx) => (
            <motion.div key={i.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center shadow-md">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-lg font-semibold text-gray-900">{i.title}</div>
              <div className="text-sm text-gray-600">{i.stat}</div>
              <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-900">Proposer une collaboration <ArrowRight className="h-4 w-4" /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const bullets = [
    '10+ ans d’expérience entre produit, dev et pédagogie',
    'Approche narrative: chaque feature est une scène',
    'Focus accessibilité, performance et valeur métier',
  ]
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle eyebrow="À propos" title="Une pédagogie au service du produit" subtitle="Je conçois des expériences d’apprentissage qui révèlent la valeur de votre technologie." />
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3"><Star className="h-4 w-4 text-amber-500 mt-0.5" /> {b}</li>
            ))}
          </ul>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black">Parler de votre projet <ArrowRight className="h-4 w-4" /></a>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative aspect-[4/3] rounded-2xl border border-gray-200 overflow-hidden bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50">
          <div className="absolute inset-0 grid grid-cols-6 gap-3 p-4">
            <div className="col-span-4 rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
              <div className="text-xs text-gray-500">Workshops</div>
              <div className="mt-1 font-semibold">Design Systems vivants</div>
              <div className="mt-3 text-sm text-gray-600">Du storybook aux composants animés orientés narration.</div>
            </div>
            <div className="col-span-2 rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
              <div className="text-xs text-gray-500">Certification</div>
              <div className="mt-1 text-sm">Formateur agréé</div>
            </div>
            <div className="col-span-2 rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
              <div className="text-xs text-gray-500">Formats</div>
              <div className="mt-1 text-sm">Vidéo, live, cohortes</div>
            </div>
            <div className="col-span-4 rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
              <div className="text-xs text-gray-500">Résultats</div>
              <div className="mt-1 text-sm">+30% d’achèvement des cours</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    { author: 'Clara, Head of Product', text: 'Une narration limpide. Les équipes ont compris la vision et livré plus vite.' },
    { author: 'Mehdi, CTO', text: 'Il transforme des sujets complexes en expériences plaisantes et performantes.' },
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Témoignages" title="Ce que disent les clients" />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {quotes.map((q, idx) => (
            <motion.blockquote key={q.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3 text-gray-700"><Quote className="h-5 w-5 text-indigo-600" /> {q.text}</div>
              <div className="mt-3 text-sm font-medium text-gray-900">{q.author}</div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_top_right,rgba(99,102,241,0.25),transparent)]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Parlons de votre projet</h2>
        <p className="mt-3 text-gray-300">Expliquez-moi vos objectifs. Je reviens vers vous sous 48h avec une proposition.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:hello@example.com" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-100">
            <Mail className="h-4 w-4" /> Envoyer un e‑mail
          </a>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10">
            Télécharger le media kit
          </a>
        </div>
        <div className="mt-4 text-xs text-gray-400">Disponibilités: 2 créneaux par mois • Paris / Remote</div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600" />
          <span className="text-sm font-semibold">Alex Marchand</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-gray-600">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900">LinkedIn</a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900">YouTube</a>
        </div>
        <div className="text-sm text-gray-500">© {new Date().getFullYear()} Tous droits réservés.</div>
      </div>
    </footer>
  )
}

export default function App() {
  React.useEffect(() => {
    // Défilement fluide pour les ancres
    const handler = (e) => {
      const target = e.target
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href').slice(1)
        const el = document.getElementById(id)
        if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Courses />
      <ContentHub />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
