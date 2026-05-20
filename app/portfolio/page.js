'use client'

const projects = [
  {
    title:'E-Commerce Website',
    category:'Online Shopping Platform'
  },
  {
    title:'Hospital Management',
    category:'Healthcare ERP'
  },
  {
    title:'Restaurant Website',
    category:'Food Business Platform'
  }
]

export default function PortfolioPage(){
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-16">
          Portfolio
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project,index)=>(
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >

              <div className="h-64 bg-gradient-to-r from-cyan-500 to-purple-600"></div>

              <div className="p-8">

                <h2 className="text-3xl font-bold mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-300 mb-6">
                  {project.category}
                </p>

                <button className="bg-cyan-500 px-6 py-3 rounded-full">
                  View Project
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  )
}