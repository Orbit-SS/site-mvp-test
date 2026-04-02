import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-border">
        <span className="text-lg font-semibold tracking-tight">Orbit</span>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </nav>
        <Button size="sm">Get started</Button>
      </header>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-24 text-center">
        <span className="inline-block rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          Welcome back
        </span>
        <h1 className="max-w-2xl text-5xl font-bold tracking-tight leading-tight">
          Hello, Spencer
        </h1>
        <p className="max-w-md text-muted-foreground text-lg">
          Build and ship beautiful sites faster than ever. Your personal orbit starts here.
        </p>
        <div className="flex gap-3 mt-2">
          <Button size="lg">Get started for free</Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/how-it-works">See how it works</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold mb-12">Everything you need</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { title: "Fast by default", desc: "Built on Next.js with server components for instant page loads." },
              { title: "Beautiful UI", desc: "Tailwind CSS and shadcn/ui components that look great out of the box." },
              { title: "Easy to deploy", desc: "One-click deploys to Vercel. No config needed." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-border p-6 flex flex-col gap-2">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to launch?</h2>
        <p className="text-muted-foreground mb-8">Start building your site today — no credit card required.</p>
        <Button size="lg">Start for free</Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Orbit. All rights reserved.
      </footer>
    </div>
  );
}
