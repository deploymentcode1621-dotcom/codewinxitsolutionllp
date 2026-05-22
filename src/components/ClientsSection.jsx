"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export default function ClientsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // ❌ REMOVED:
  // SmartBiz Enterprises
  // GreenLeaf Industries
  // CloudNine Systems
  // NextGen Analytics

  const clients = [
    { name: "TechCorp Solutions", logo: "TC", link: "https://techcorp.com" },
    { name: "EduMaster Schools", logo: "EM", link: "https://edumaster.com" },
    { name: "HealthPlus Hospital", logo: "HP", link: "https://healthplus.com" },
    { name: "RetailPro India", logo: "RP", link: "https://retailpro.com" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, TechCorp Solutions",
      rating: 5,
      text: "CodeWinx transformed our business with their exceptional website development. The team delivered beyond our expectations with a modern, fast, and SEO-optimized solution.",
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      position: "Director, EduMaster Schools",
      rating: 5,
      text: "The school management system they built has streamlined our entire operations. From attendance to fee management, everything is automated and efficient now.",
      avatar: "PS"
    },
    {
      name: "Dr. Amit Patel",
      position: "Hospital Administrator",
      rating: 5,
      text: "Their hospital management software has revolutionized how we handle patient records and appointments. Professional team with excellent support.",
      avatar: "AP"
    },
    {
      name: "Sneha Reddy",
      position: "Founder, RetailPro India",
      rating: 5,
      text: "The e-commerce platform they developed for us is phenomenal. Sales have increased by 300% since launch. Highly recommend CodeWinx!",
      avatar: "SR"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 px-6 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div
        className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '5s' }}
      />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '7s', animationDelay: '2s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Trusted By Industry Leaders</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Our{' '}
            <span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ animation: 'shimmer 3s ease-in-out infinite' }}
            >
              Clients
            </span>
          </h2>

          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Partnering with amazing businesses to deliver exceptional results
          </p>
        </div>

        {/* Client Logos Grid */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-300">
            Trusted by leading brands
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-700/50 transition-all duration-500 hover:bg-slate-800/70 hover:border-blue-500/50 hover:scale-105 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                </div>

                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{client.logo}</span>
                </div>

                <p className="relative text-gray-300 text-center font-medium group-hover:text-white transition-colors duration-300">
                  {client.name}
                </p>

                <p className="relative text-blue-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Visit Project →
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-300">
            What our clients say
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative p-10 bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-700/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-20 h-20 text-blue-400" />
              </div>

              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-slate-800/70 border border-slate-700/50 text-gray-300 hover:bg-slate-700/70 hover:text-white hover:border-blue-500/50 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'w-8 bg-blue-500'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-slate-800/70 border border-slate-700/50 text-gray-300 hover:bg-slate-700/70 hover:text-white hover:border-blue-500/50 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
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
