import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2, Shield, Zap, Wallet, LineChart, Cog, Sparkles, Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 shadow-md" />
            <span className="text-lg font-semibold tracking-tight">FluxPay</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="px-4 py-2 text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">Get started</a>
          </div>
          <button className="md:hidden p-2 rounded-lg border border-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/70 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="#features" onClick={() => setOpen(false)} className="py-2">Features</a>
            <a href="#how" onClick={() => setOpen(false)} className="py-2">How it works</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="py-2">Pricing</a>
            <a href="#faq" onClick={() => setOpen(false)} className="py-2">FAQ</a>
            <a href="#cta" onClick={() => setOpen(false)} className="py-2 rounded-lg bg-gray-900 text-white text-center">Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-6 w-full pt-24">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium bg-white/60 backdrop-blur px-3 py-1 rounded-full w-max border border-white/50 shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span>Automate finance. Accelerate growth.</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            The modern way to automate your finance ops
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl">
            FluxPay unifies invoicing, reconciliation, payouts, and forecasting. Cut manual work by 80% with secure, AI-assisted workflows.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-200 bg-white/70 backdrop-blur hover:bg-white">
              See features
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> No credit card</div>
            <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> SOC 2 Type II</div>
            <div className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> 14-day free trial</div>
          </div>
        </div>
        <div className="lg:col-span-6" />
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <LogosStrip />
      </div>
    </section>
  )
}

function LogosStrip() {
  const logos = ['Nova', 'Zenith', 'Orbit', 'Aperture', 'Vertex', 'Nimbus']
  return (
    <div className="w-full py-6 bg-white/80 backdrop-blur border-t border-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">Trusted by forward-thinking teams</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((l) => (
            <div key={l} className="text-center text-gray-400 font-semibold py-2 px-3 rounded-lg border border-gray-100 bg-white">{l}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 text-white flex items-center justify-center shadow-md">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    { icon: Wallet, title: 'Smart invoicing', desc: 'Auto-generate, send and reconcile invoices across markets with one click.' },
    { icon: LineChart, title: 'Live forecasting', desc: 'Predict cash flow with AI scenarios that adapt as your business moves.' },
    { icon: Shield, title: 'Bank-grade security', desc: 'End-to-end encryption, SSO, audit trails, and granular roles & permissions.' },
    { icon: Zap, title: 'Workflow automation', desc: 'Drag-and-drop workflows to automate approvals, payouts and reminders.' },
    { icon: Cog, title: 'Plug-and-play integrations', desc: 'Connect your bank, ERP, CRM and payments in minutes—no engineers required.' },
    { icon: Sparkles, title: 'AI copilots', desc: 'Let AI draft invoices, match payments, and spot anomalies before they matter.' },
  ]
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need to run finance on autopilot</h2>
          <p className="mt-3 text-gray-600">Beautiful defaults, secure by design, and flexible enough to fit your stack.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Connect accounts', desc: 'Securely link banks, payment processors and ERPs.', badge: '01' },
    { title: 'Design workflows', desc: 'Build automations for invoicing, approvals and payouts.', badge: '02' },
    { title: 'Track & optimize', desc: 'Monitor cash in real-time and let AI suggest improvements.', badge: '03' },
  ]
  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Set up in minutes, not months</h2>
            <p className="mt-4 text-gray-600">Skip the implementation saga. FluxPay configures to your business with simple, guided steps.</p>
            <div className="mt-8 space-y-6">
              {steps.map((s) => (
                <div key={s.title} className="relative p-5 rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <span className="absolute -top-3 left-5 text-xs font-semibold bg-gray-900 text-white px-2 py-1 rounded-full">{s.badge}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl border border-gray-200 overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: 'Free', sub: 'For startups testing automation', features: ['Up to 3 workflows', 'Basic invoicing', 'Email support'] },
    { name: 'Growth', price: '$49/mo', sub: 'For growing teams', featured: true, features: ['Unlimited workflows', 'AI reconciliation', 'Priority support', 'SSO + roles'] },
    { name: 'Scale', price: 'Contact', sub: 'For finance at scale', features: ['Custom limits', 'Dedicated success', 'On-prem options'] },
  ]
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Clear pricing, instant value</h2>
          <p className="mt-3 text-gray-600">Start free. Upgrade when you’re ready.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.featured ? 'border-gray-900' : 'border-gray-200'} bg-white p-6 shadow-sm`}> 
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                {t.featured && <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">Most popular</span>}
              </div>
              <div className="mt-4 text-3xl font-semibold">{t.price}</div>
              <p className="text-sm text-gray-600 mt-1">{t.sub}</p>
              <div className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> {f}</div>
                ))}
              </div>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors ${t.featured ? 'bg-gray-900 text-white border-gray-900 hover:bg-black' : 'border-gray-200 hover:bg-gray-50'}`}>
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Is FluxPay secure?', a: 'Yes. We use bank-grade encryption, SSO, SAML, audit logs and SOC 2 Type II compliance.' },
    { q: 'Do I need engineers to set this up?', a: 'No. Most customers connect systems and go live within an hour.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel or change plans at any time with no hidden fees.' },
    { q: 'Do you support multiple currencies?', a: 'Yes. We support multi-currency invoicing, reconciliation and reporting.' },
  ]
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center">Questions, answered</h2>
        <div className="mt-10 divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
          {faqs.map((f, i) => (
            <details key={f.q} className="group">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between">
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_top_right,rgba(59,130,246,0.25),transparent)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to automate your finance stack?</h2>
        <p className="mt-3 text-gray-300">Start your free trial today and see how much time you save in the first week.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-100">
            Create account
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/test" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10">
            Run connectivity test
          </a>
        </div>
        <div className="mt-4 text-xs text-gray-400">No credit card required • 14-day free trial</div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500" />
          <span className="text-sm font-semibold">FluxPay</span>
        </div>
        <div className="text-sm text-gray-500">© {new Date().getFullYear()} FluxPay, Inc. All rights reserved.</div>
        <div className="flex items-center gap-5 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Security</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  React.useEffect(() => {
    // Smooth scroll for anchor links
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
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
