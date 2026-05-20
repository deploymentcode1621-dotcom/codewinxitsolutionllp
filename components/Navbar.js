'use client'

import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          CODEWINX
        </h1>

        <div className="flex gap-6">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>

        </div>

      </div>
    </nav>
  )
}