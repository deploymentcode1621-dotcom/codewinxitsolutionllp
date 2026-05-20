'use client'

export default function ContactPage(){
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-24">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">

            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6 text-gray-300 text-lg">
              <p>📧 codewinxitsolutions@gmail.com</p>
              <p>📞 +91 0000000000</p>
              <p>🌍 India</p>
            </div>

          </div>

          <form className="bg-white/5 p-10 rounded-3xl border border-white/10 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/30 border border-white/10 rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/30 border border-white/10 rounded-xl p-4"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-black/30 border border-white/10 rounded-xl p-4"
            ></textarea>

            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </main>
  )
}