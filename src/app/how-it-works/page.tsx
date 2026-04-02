import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Create your site",
    desc: "Start from a clean scaffold. Your layout, fonts, and theme are ready to go — no boilerplate to delete.",
  },
  {
    number: "02",
    title: "Customize with AI",
    desc: "Describe what you want. Orbit's AI agent edits your code in real time, building pages, components, and styles.",
  },
  {
    number: "03",
    title: "Deploy instantly",
    desc: "Push to Vercel with one click. Your site is live on a global CDN in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-border">
        <Link href="/" className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity">
          Orbit
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="/#about" className="hover:text-foreground transition-colors">About</a>
        </nav>
        <Button size="sm">Get started</Button>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center gap-4 px-8 py-20 text-center border-b border-border">
        <span className="inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          How it works
        </span>
        <h1 className="max-w-xl text-4xl font-bold tracking-tight leading-tight">
          From idea to live site in minutes
        </h1>
        <p className="max-w-md text-muted-foreground text-lg">
          Orbit removes the friction between what you imagine and what ships.
        </p>
      </section>

      {/* Steps */}
      <section className="mx-auto w-full max-w-3xl px-8 py-20 flex flex-col gap-12">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-8 items-start">
            <span className="text-4xl font-bold text-muted-foreground/30 w-14 shrink-0 leading-none pt-1">
              {step.number}
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden" />
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-border px-8 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to try it yourself?</h2>
        <p className="text-muted-foreground mb-8">Get started for free — no credit card required.</p>
        <div className="flex justify-center gap-3">
          <Button size="lg">Get started for free</Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border px-8 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Orbit. All rights reserved.
      </footer>
    </div>
  );
}
