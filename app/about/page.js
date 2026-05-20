'use client'
import { motion } from 'framer-motion'

export default function AboutPage(){
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className="text-5xl font-bold mb-8"
        >
          About CODEWINX IT SOLUTIONS
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-300 leading-8">
              We help startups and businesses grow digitally
              using modern websites, scalable software and
              premium UI/UX.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-semibold mb-4">
              Why Choose Us
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Modern 3D Websites</li>
              <li>✔ SEO Friendly Design</li>
              <li>✔ Fast Performance</li>
              <li>✔ Mobile Responsive</li>
              <li>✔ Technical Support</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  )
}