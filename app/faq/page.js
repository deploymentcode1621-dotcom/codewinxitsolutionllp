'use client'

const faqs = [
  {
    q:'How long does a project take?',
    a:'Most projects are completed within 1-4 weeks.'
  },
  {
    q:'Do you provide maintenance?',
    a:'Yes, we provide long-term support.'
  },
  {
    q:'Are websites mobile friendly?',
    a:'Yes, all websites are responsive.'
  }
]

export default function FAQPage(){
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-24">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          FAQ
        </h1>

        <div className="space-y-8">

          {faqs.map((faq,index)=>(
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl"
            >

              <h2 className="text-2xl font-semibold mb-4">
                {faq.q}
              </h2>

              <p className="text-gray-300 leading-8">
                {faq.a}
              </p>

            </div>
          ))}

        </div>
      </div>
    </main>
  )
}