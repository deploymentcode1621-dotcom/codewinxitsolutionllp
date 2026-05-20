'use client'

const services = [
  {
    title:'Website Development',
    desc:'Modern responsive business websites.'
  },
  {
    title:'Billing Software',
    desc:'Professional billing systems for businesses.'
  },
  {
    title:'Hospital Management',
    desc:'Advanced healthcare ERP software.'
  },
  {
    title:'School Management',
    desc:'Smart education management systems.'
  }
]

export default function ServicesPage(){
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service,index)=>(
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {service.title}
              </h2>

              <p className="text-gray-300 leading-7">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </main>
  )
}