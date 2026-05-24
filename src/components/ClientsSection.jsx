"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Star, Quote, Sparkles, ChevronLeft, ChevronRight,
  ExternalLink, TrendingUp, Award, Users, Heart,
  CheckCircle, ArrowRight, Phone, Zap, Shield
} from "lucide-react";

const clients = [
  {
    name: "TechCorp Solutions",
    logo: "TC",
    industry: "Technology",
    project: "Custom Web Platform",
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.3)",
    result: "3x faster performance",
    link: "#",
  },
  {
    name: "EduMaster Schools",
    logo: "EM",
    industry: "Education",
    project: "School ERP System",
    gradient: "from-green-500 to-emerald-400",
    glow: "rgba(16,185,129,0.3)",
    result: "100% digitized ops",
    link: "#",
  },
  {
    name: "HealthPlus Hospital",
    logo: "HP",
    industry: "Healthcare",
    project: "Hospital Management",
    gradient: "from-rose-500 to-pink-400",
    glow: "rgba(244,63,94,0.3)",
    result: "50% faster records",
    link: "#",
  },
  {
    name: "RetailPro India",
    logo: "RP",
    industry: "E-Commerce",
    project: "Online Store Platform",
    gradient: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.3)",
    result: "300% sales growth",
    link: "#",
  },
  {
    name: "SmartBiz Enterprises",
    logo: "SB",
    industry: "Business",
    project: "CRM & Automation",
    gradient: "from-purple-500 to-violet-400",
    glow: "rgba(139,92,246,0.3)",
    result: "60% time saved",
    link: "#",
  },
  {
    name: "GreenLeaf Industries",
    logo: "GL",
    industry: "Manufacturing",
    project: "Billing Software",
    gradient: "from-teal-500 to-cyan-400",
    glow: "rgba(20,184,166,0.3)",
    result: "Zero billing errors",
    link: "#",
  },
  {
    name: "CloudNine Systems",
    logo: "CN",
    industry: "SaaS",
    project: "Next.js Application",
    gradient: "from-sky-500 to-blue-400",
    glow: "rgba(14,165,233,0.3)",
    result: "99.9% uptime",
    link: "#",
  },
  {
    name: "NextGen Analytics",
    logo: "NA",
    industry: "Analytics",
    project: "Data Dashboard",
    gradient: "from-indigo-500 to-blue-400",
    glow: "rgba(99,102,241,0.3)",
    result: "Real-time insights",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "CEO, TechCorp Solutions",
    rating: 5,
    text: "CodeWinX transformed our entire digital presence. The team delivered a blazing-fast, SEO-optimized platform that tripled our leads in the first quarter. Truly exceptional work — they treat your business like their own.",
    avatar: "RK",
    gradient: "from-blue-500 to-cyan-400",
    company: "TechCorp Solutions",
    metric: "3x Lead Growth",
    metricColor: "text-cyan-400",
  },
  {
    name: "Priya Sharma",
    position: "Director, EduMaster Schools",
    rating: 5,
    text: "The School ERP they built has completely automated our institution. Attendance, fee collection, exam results, parent communication — all under one roof. Our staff loves it and parents are impressed. Highly professional team.",
    avatar: "PS",
    gradient: "from-green-500 to-emerald-400",
    company: "EduMaster Schools",
    metric: "100% Digitized",
    metricColor: "text-emerald-400",
  },
  {
    name: "Dr. Amit Patel",
    position: "Hospital Administrator, HealthPlus",
    rating: 5,
    text: "Their hospital management software has revolutionized how we operate. Patient records, appointments, billing — everything is seamless now. Response time for patient data dropped by 50%. The support team is always available.",
    avatar: "AP",
    gradient: "from-rose-500 to-pink-400",
    company: "HealthPlus Hospital",
    metric: "50% Faster Records",
    metricColor: "text-pink-400",
  },
  {
    name: "Sneha Reddy",
    position: "Founder, RetailPro India",
    rating: 5,
    text: "The e-commerce platform CodeWinX built for us is phenomenal. Beautifully designed, fast and conversion-optimized. Our online sales increased by 300% within 3 months of launch. Best investment we've made for our business.",
    avatar: "SR",
    gradient: "from-orange-500 to-amber-400",
    company: "RetailPro India",
    metric: "300% Sales Growth",
    metricColor: "text-amber-400",
  },
  {
    name: "Vikram Mehta",
    position: "MD, SmartBiz Enterprises",
    rating: 5,
    text: "We needed a CRM and workflow automation solution fast. CodeWinX delivered in 3 weeks — a complete, polished product. Our team saves 60% of the time we used to spend on manual tasks. Absolutely recommend them.",
    avatar: "VM",
    gradient: "from-purple-500 to-violet-400",
    company: "SmartBiz Enterprises",
    metric: "60% Time Saved",
    metricColor: "text-violet-400",
  },
];

const trustStats = [
  { icon: Users, number: "50+", label: "Happy Clients", color: "from-blue-500 to-cyan-400" },
  { icon: Award, number: "12+", label: "Projects Delivered", color: "from-purple-500 to-pink-400" },
  { icon: TrendingUp, number: "98%", label: "Satisfaction Rate", color: "from-green-500 to-emerald-400" },
  { icon: Heart, number: "100%", label: "Long-term Support", color: "from-rose-500 to-pink-400" },
];

export default function ClientsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredClient, setHoveredClient] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, projects: 0, satisfaction: 0 });
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setIsVisible(true); }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || counted) return;
    setCounted(true);
    const targets = { clients: 50, projects: 12, satisfaction: 98 };
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCounts({
        clients: Math.floor(ease * targets.clients),
        projects: Math.floor(ease * targets.projects),
        satisfaction: Math.floor(ease * targets.satisfaction),
      });
      if (step >= steps) clearInterval(timer);
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [isVisible, counted]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const next = () => setCurrentTestimonial((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentTestimonial];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 text-white py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
          animation: "gridShift 30s linear infinite",
        }} />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-32 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-pink-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold tracking-wide">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-5 leading-tight tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animation: "shimmer 3s ease-in-out infinite" }}>
              Clients
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We've partnered with startups, schools, hospitals and enterprises to deliver digital solutions that create real business impact.
          </p>
        </div>

        {/* ── TRUST STATS ── */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {trustStats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div key={i} className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm transition-all duration-400 hover:scale-105 hover:border-white/20 hover:shadow-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 rounded-2xl`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <p className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.number}</p>
                <p className="text-gray-400 text-xs font-medium text-center mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* ── CLIENT CARDS GRID ── */}
        <div className={`mb-24 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black text-white">
              Brands We've <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Worked With</span>
            </h3>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-bold">All Active Projects</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredClient(index)}
                onMouseLeave={() => setHoveredClient(null)}
                className={`group relative flex flex-col p-6 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-700/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer`}
                style={{
                  boxShadow: hoveredClient === index ? `0 20px 50px ${client.glow}` : "none",
                  borderColor: hoveredClient === index ? client.glow : undefined,
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                {/* top line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${client.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                {/* bg glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`} />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </div>

                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}
                  style={{ boxShadow: hoveredClient === index ? `0 8px 24px ${client.glow}` : undefined }}>
                  <span className="text-white font-black text-lg">{client.logo}</span>
                </div>

                <p className="text-white font-bold text-sm mb-0.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {client.name}
                </p>
                <p className="text-gray-500 text-xs mb-3">{client.industry} · {client.project}</p>

                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${client.gradient} w-fit opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0`}>
                  <TrendingUp className="w-3 h-3 text-white" />
                  <span className="text-white text-[11px] font-bold">{client.result}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/25 backdrop-blur-sm mb-4">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-300 text-sm font-semibold">Client Stories</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white">
              What They <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Say About Us</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main testimonial */}
            <div
              className="md:col-span-2"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative h-full rounded-3xl border border-slate-700/40 bg-slate-900/70 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-700">
                {/* gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${current.gradient} transition-all duration-700`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-[0.04] transition-all duration-700`} />

                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote className="w-12 h-12 text-blue-500/20 mb-4 flex-shrink-0" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-200 text-lg leading-relaxed mb-8 flex-1 italic">
                    "{current.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <span className="text-white font-black text-lg">{current.avatar}</span>
                      </div>
                      <div>
                        <p className="text-white font-black">{current.name}</p>
                        <p className="text-gray-400 text-sm">{current.position}</p>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${current.gradient} shadow-lg`}>
                      <p className={`text-white text-sm font-black`}>{current.metric}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — stacked mini testimonials */}
            <div className="flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-400 ${
                    i === currentTestimonial
                      ? `bg-slate-800/80 border-white/20 shadow-lg scale-[1.02]`
                      : "bg-slate-900/50 border-slate-800/50 hover:border-slate-600/60 hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-black text-xs">{t.avatar}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold leading-tight">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.company}</p>
                    </div>
                    {i === currentTestimonial && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">"{t.text}"</p>
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8 items-center">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-slate-800/70 border border-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`rounded-full transition-all duration-400 ${i === currentTestimonial ? "w-8 h-2 bg-blue-500" : "w-2 h-2 bg-slate-600 hover:bg-slate-400"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-slate-800/70 border border-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── TRUST BADGES ROW ── */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="relative rounded-2xl border border-white/8 bg-slate-900/40 backdrop-blur-sm p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
            <h4 className="text-center text-xs font-black text-gray-500 uppercase tracking-widest mb-6">Why Clients Trust CodeWinX</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { icon: Shield, label: "NDA Protected" },
                { icon: Zap, label: "On-Time Delivery" },
                { icon: CheckCircle, label: "Clean Code" },
                { icon: Heart, label: "Post-Launch Care" },
                { icon: TrendingUp, label: "ROI Focused" },
                { icon: Award, label: "Premium Quality" },
              ].map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="group flex flex-col items-center gap-2 text-center cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/15 group-hover:border-blue-500/30 transition-all duration-300">
                      <Icon className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    <span className="text-gray-500 text-xs font-semibold group-hover:text-gray-300 transition-colors duration-300">{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="relative inline-block p-px rounded-3xl overflow-hidden w-full max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" style={{ animationDuration: "3s" }} />
            <div className="relative bg-slate-950 rounded-3xl px-8 py-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-3xl" />
              <div className="relative">
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest font-semibold">Join 50+ Happy Clients</p>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Ready to Be Our{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Next Success Story?
                  </span>
                </h3>
                <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto">
                  Let's build something that grows your business, impresses your customers and stands the test of time.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:+919999999999"
                    className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-black text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 w-full sm:w-auto justify-center"
                  >
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a href="#"
                    className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-bold text-base transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto justify-center"
                  >
                    View Our Work
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-600 text-xs mt-6">No commitment · Free strategy call · Fast response guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; background-size: 200% 200%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gridShift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(52px, 52px); }
        }
      `}</style>
    </section>
  );
}