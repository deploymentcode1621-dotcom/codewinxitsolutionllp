"use client";
import React, { useEffect, useState } from 'react';
import { Instagram, Linkedin, MessageCircle, Send, Twitter } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '2s' }} />

      {/* Content */}
      <div 
        className="relative z-10 text-center max-w-5xl"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-blue-300 text-sm font-medium">Leading Digital Innovation</span>
        </div>

        {/* Main heading with staggered animation */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
          <span 
            className={`inline-block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Building{' '}
          </span>
          <span 
            className={`inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: '0.2s',
              animation: 'shimmer 3s ease-in-out infinite'
            }}
          >
            Digital Solutions
          </span>
          <br />
          <span 
            className={`inline-block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            for Modern Businesses
          </span>
        </h1>

        {/* Description with glow effect */}
        <p 
          className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                style={{ animation: 'shimmer 4s ease-in-out infinite' }}>
            CodeWinx IT Solutions
          </span>{' '}
          delivers scalable, secure and high-performance web applications using modern technologies.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`mt-10 flex flex-wrap justify-center gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group px-8 py-4 rounded-xl border-2 border-gray-500/50 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
            Our Services
          </button>
        </div>

        {/* Social Icons with enhanced animations */}
        <div 
          className={`mt-12 flex justify-center gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          {[
            { Icon: Instagram, gradient: 'from-pink-500 via-purple-500 to-orange-500', delay: '0.1s' },
            { Icon: Linkedin, gradient: 'from-blue-600 to-blue-400', delay: '0.15s' },
            { Icon: MessageCircle, gradient: 'from-green-500 to-green-400', delay: '0.2s' },
            { Icon: Send, gradient: 'from-blue-400 to-blue-300', delay: '0.25s' },
            { Icon: Twitter, gradient: 'from-sky-500 to-blue-400', delay: '0.3s' }
          ].map(({ Icon, gradient, delay }, index) => (
            <a
              key={index}
              href="#"
              className={`group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer shadow-lg`}
              style={{
                animation: `float 3s ease-in-out infinite`,
                animationDelay: delay
              }}
            >
              <Icon className="text-white text-xl relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* Stats or features */}
        <div 
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.7s' }}
        >
          {[
            { number: '500+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Expert Support' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/50 hover:scale-105 cursor-default"
              style={{
                animation: `fadeInUp 0.8s ease-out ${0.8 + index * 0.1}s both`
              }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}