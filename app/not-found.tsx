'use client';

import Link from 'next/link';
import { ArrowLeft, Cpu } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07090e] text-white p-6 text-center">
      <div className="w-20 h-20 rounded-full border border-blue-500/30 bg-blue-950/40 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(37,99,235,0.3)]">
        <Cpu className="w-8 h-8 text-blue-400" />
      </div>
      <div className="font-mono text-xs uppercase tracking-[0.4em] text-blue-400 mb-2">
        Error 404
      </div>
      <h1 className="font-serif-heading text-4xl sm:text-6xl font-bold text-white mb-4">
        Page Deconstructed
      </h1>
      <p className="text-slate-400 text-sm max-w-md font-light mb-8">
        The requested automation route or engineering asset does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Portfolio
      </Link>
    </div>
  );
}
