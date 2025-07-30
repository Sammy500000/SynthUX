'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, name: 'Project 1', description: 'A description of project 1.' },
  { id: 2, name: 'Project 2', description: 'A description of project 2.' },
  { id: 3, name: 'Project 3', description: 'A description of project 3.' },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="text-2xl font-bold">SynthUX</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/account"
          >
            Account
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="/projects/new"
          >
            New Project
          </Link>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg p-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
