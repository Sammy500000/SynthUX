'use client';

import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
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
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Account</h1>
          <div className="mt-4 space-y-8">
            <div className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-bold">API Keys</h2>
              <div className="mt-4">
                {/* TODO: API key management will be rendered here */}
                <p className="text-gray-400">API key management is not yet available.</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-bold">Billing</h2>
              <div className="mt-4">
                {/* TODO: Billing management will be rendered here */}
                <p className="text-gray-400">Billing management is not yet available.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
