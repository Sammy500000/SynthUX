import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="sr-only">SynthUX</span>
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
        <h1 className="text-2xl font-bold">Account</h1>
        <div className="mt-4 space-y-8">
          <div>
            <h2 className="text-xl font-bold">API Keys</h2>
            <div className="mt-4">
              {/* TODO: API key management will be rendered here */}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Billing</h2>
            <div className="mt-4">
              {/* TODO: Billing management will be rendered here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
