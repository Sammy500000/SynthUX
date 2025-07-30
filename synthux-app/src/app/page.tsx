'use client';

import Link from 'next/link';
import HeroAnimation from '@/components/HeroAnimation';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold">SynthUX</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-[50vh] flex items-center justify-center">
          <HeroAnimation />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI-Powered UX Testing
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  SynthUX provides AI-powered user testing to help you build better products.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="/dashboard"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
