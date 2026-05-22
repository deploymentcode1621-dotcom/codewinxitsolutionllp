"use client";
import React, { useEffect, useRef, useState } from 'react';
import { 
  Globe, 
  GraduationCap, 
  Hospital, 
  Receipt,
  ShoppingCart,
  Building2,
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites with Next.js, React & Tailwind CSS",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      popular: true
    },
    {
      icon: Receipt,
      title: "Billing Software",
      description: "GST-compliant billing & invoicing solutions for businesses",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      popular: true
    },
    {
      icon: GraduationCap,
      title: "School Management",
      description: "Complete ERP system for schools, colleges & coaching centers",
      gradient: "from-green-500 via-emerald-600 to-teal-500",
      popular: false
    },
    {
      icon: Hospital,
      title: "Hospital Software",
      description: "Patient management, appointments & medical record systems",
      gradient: "from-red-500 via-rose-600 to-pink-500",
      popular: false
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      description: "Full-featured online stores with payment gateway integration",
      gradient: "from-orange-500 via-amber-600 to-yellow-500",
      popular: true
    },
    {
      icon: Building2,
      title: "Business Automation",
      description: "CRM, inventory & workflow automation for enterprises",
      gradient: "from-indigo-500 via-purple-600 to-violet-500",
      popular: false
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 px-6 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Our Services</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  style={{ animation: 'shimmer 3s ease-in-out infinite' }}>
              Build
            </span>
          </h2>
          
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Premium software solutions designed to elevate your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative h-full bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-700/50 p-8 transition-all duration-500 hover:bg-slate-800/70 hover:border-slate-600 hover:shadow-2xl hover:-translate-y-2 overflow-hidden cursor-pointer">
                  
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-6 right-6 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-yellow-400 text-xs font-bold">Popular</span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="relative mb-6 inline-flex">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-400 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            Need a custom solution? Let's discuss your project
          </p>
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { 
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
          50% { 
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}