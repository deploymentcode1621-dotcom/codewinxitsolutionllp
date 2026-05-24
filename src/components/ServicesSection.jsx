"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Globe, GraduationCap, Heart, Receipt, ShoppingCart, Building2,
  Sparkles, ArrowRight, Star, Code, Zap, Palette, TrendingUp,
  Smartphone, Cpu, Shield, CheckCircle, ExternalLink, Phone,
  ChevronRight, BarChart2, Settings, BookOpen, Layers
} from "lucide-react";

const CATEGORIES = ["All", "Web", "Software", "Marketing", "Design"];

const services = [
  {
    icon: Globe,
    title: "Website Development",
    shortDesc: "Modern, responsive websites built for speed and conversions.",
    fullDesc: "We design and develop lightning-fast websites using Next.js, React & Tailwind CSS. SEO-optimized, mobile-first and conversion-focused for every business type.",
    gradient: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59,130,246,0.35)",
    category: "Web",
    popular: true,
    features: ["Next.js / React", "SEO Optimized", "Mobile Responsive", "CMS Integration"],
    badge: "Most Popular",
    badgeColor: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    shortDesc: "Full-featured online stores with secure payment integration.",
    fullDesc: "End-to-end e-commerce development with product management, cart, wishlists, order tracking and payment gateway integration for maximum sales.",
    gradient: "from-orange-500 to-amber-400",
    glowColor: "rgba(249,115,22,0.35)",
    category: "Web",
    popular: true,
    features: ["Payment Gateway", "Inventory System", "Order Tracking", "Admin Panel"],
    badge: "High Demand",
    badgeColor: "from-orange-500 to-amber-500",
  },
  {
    icon: Code,
    title: "MERN Stack Development",
    shortDesc: "Scalable full-stack web applications for complex needs.",
    fullDesc: "Custom full-stack applications using MongoDB, Express, React and Node.js. Ideal for SaaS, dashboards, portals and business platforms.",
    gradient: "from-violet-500 to-purple-400",
    glowColor: "rgba(139,92,246,0.35)",
    category: "Web",
    popular: false,
    features: ["REST APIs", "Real-time Features", "Auth & Roles", "Cloud Deployment"],
    badge: null,
    badgeColor: null,
  },
  {
    icon: Receipt,
    title: "Billing Software",
    shortDesc: "GST-compliant invoicing and billing for all businesses.",
    fullDesc: "Smart billing and invoicing system with GST compliance, client management, payment tracking, automated reports and multi-user access for businesses of all sizes.",
    gradient: "from-emerald-500 to-green-400",
    glowColor: "rgba(16,185,129,0.35)",
    category: "Software",
    popular: true,
    features: ["GST Compliant", "Auto Invoicing", "Payment Tracking", "Reports & Analytics"],
    badge: "Best Seller",
    badgeColor: "from-emerald-500 to-green-500",
  },
  {
    icon: GraduationCap,
    title: "School ERP System",
    shortDesc: "Complete management system for schools and colleges.",
    fullDesc: "Comprehensive School ERP covering student admissions, attendance, fee collection, results, timetable, staff management and parent-teacher communication portals.",
    gradient: "from-teal-500 to-cyan-400",
    glowColor: "rgba(20,184,166,0.35)",
    category: "Software",
    popular: false,
    features: ["Student Profiles", "Fee Management", "Exam & Results", "Parent Portal"],
    badge: null,
    badgeColor: null,
  },
  {
    icon: Heart,
    title: "Hospital Management",
    shortDesc: "End-to-end patient and clinic management software.",
    fullDesc: "Full hospital management system with patient records, appointment scheduling, doctor management, billing, lab reports, pharmacy and staff roles.",
    gradient: "from-rose-500 to-pink-400",
    glowColor: "rgba(244,63,94,0.35)",
    category: "Software",
    popular: false,
    features: ["Patient Records", "Appointment System", "Lab Reports", "Pharmacy Module"],
    badge: null,
    badgeColor: null,
  },
  {
    icon: Building2,
    title: "Business Automation",
    shortDesc: "CRM, inventory and workflow automation solutions.",
    fullDesc: "Automate your repetitive business workflows with custom CRM, inventory management, HR tools and process automation — saving time and reducing human error.",
    gradient: "from-indigo-500 to-blue-400",
    glowColor: "rgba(99,102,241,0.35)",
    category: "Software",
    popular: false,
    features: ["Custom CRM", "Inventory Control", "HR Automation", "Analytics Dashboard"],
    badge: null,
    badgeColor: null,
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    shortDesc: "Rank higher on Google and dominate search results.",
    fullDesc: "Data-driven SEO strategy including keyword research, on-page optimization, technical SEO, link building and monthly performance reporting.",
    gradient: "from-yellow-500 to-orange-400",
    glowColor: "rgba(234,179,8,0.35)",
    category: "Marketing",
    popular: true,
    features: ["Keyword Research", "On-Page SEO", "Technical Audit", "Monthly Reports"],
    badge: "High ROI",
    badgeColor: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    shortDesc: "Stunning interfaces that convert visitors into customers.",
    fullDesc: "Premium UI/UX design with Figma — wireframes, prototypes, design systems and pixel-perfect handoffs. User-centered design that drives engagement and retention.",
    gradient: "from-pink-500 to-rose-400",
    glowColor: "rgba(236,72,153,0.35)",
    category: "Design",
    popular: false,
    features: ["Figma Design", "Prototyping", "Design System", "User Research"],
    badge: null,
    badgeColor: null,
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive Design",
    shortDesc: "Pixel-perfect design across all screens and devices.",
    fullDesc: "Every project we build is fully responsive and tested across all devices. We ensure flawless UX on mobile, tablet and desktop for maximum reach.",
    gradient: "from-sky-500 to-blue-400",
    glowColor: "rgba(14,165,233,0.35)",
    category: "Design",
    popular: false,
    features: ["Cross-Device Testing", "Touch Optimized", "Fast Load", "Accessibility"],
    badge: null,
    badgeColor: null,
  },
  {
    icon: Cpu,
    title: "Custom Software",
    shortDesc: "Tailor-made software built exactly for your needs.",
    fullDesc: "When off-the-shelf software doesn't fit, we build custom solutions from scratch — fully tailored to your workflows, teams and business logic.",
    gradient: "from-fuchsia-500 to-purple-400",
    glowColor: "rgba(217,70,239,0.35)",
    category: "Software",
    popular: false,
    features: ["Requirement Analysis", "Custom Architecture", "Integration Ready", "Scalable"],
    badge: null,
    badgeColor: null,
  },
  {
    icon: Zap,
    title: "Next.js Applications",
    shortDesc: "Server-side rendered apps for speed and SEO dominance.",
    fullDesc: "Next.js development for maximum performance — SSR, SSG, API routes, edge functions and seamless deployment for fast, SEO-optimized web applications.",
    gradient: "from-cyan-500 to-teal-400",
    glowColor: "rgba(6,182,212,0.35)",
    category: "Web",
    popular: false,
    features: ["SSR / SSG", "API Routes", "Edge Functions", "Vercel Deploy"],
    badge: null,
    badgeColor: null,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.target === sectionRef.current && e.isIntersecting) setIsVisible(true);
        if (e.target === headerRef.current && e.isIntersecting) setHeaderVisible(true);
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = activeCategory === "All"
    ? services
    : services.filter((s) => s.category === activeCategory);

  const whyPoints = [
    { icon: Shield, text: "100% Secure & Reliable Code" },
    { icon: Zap, text: "Lightning Fast Delivery" },
    { icon: CheckCircle, text: "Post-Launch Support Included" },
    { icon: BarChart2, text: "Performance Optimized Always" },
    { icon: Layers, text: "Scalable Architecture" },
    { icon: Settings, text: "Fully Customizable Solutions" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950 text-white py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated grid bg */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
          animation: "gridShift 30s linear infinite",
        }} />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-32 left-16 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />
      <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold tracking-wide">What We Build</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-5 leading-tight tracking-tight">
            Our{" "}
            <span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ animation: "shimmer 3s ease-in-out infinite" }}
            >
              Services
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Comprehensive digital solutions crafted to transform your business and accelerate growth in the modern era.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white scale-105 shadow-lg shadow-purple-500/30"
                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── FEATURED HIGHLIGHT (first popular in filter) ── */}
        {activeCategory === "All" && (
          <div className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-md p-1 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl" />
              <div className="relative grid md:grid-cols-2 gap-0 rounded-[22px] overflow-hidden">
                {/* Left */}
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 mb-5 w-fit">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-yellow-300 text-xs font-bold tracking-wider uppercase">Featured Service</span>
                  </div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl shadow-blue-500/30">
                      <Globe className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white">Website Development</h3>
                      <p className="text-blue-400 text-sm font-semibold">Next.js · React · Tailwind CSS</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed mb-7">
                    We design and develop lightning-fast, SEO-optimized websites that convert visitors into customers. From landing pages to complex web platforms — built to perform, built to impress.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {["Next.js / React", "SEO Optimized", "Mobile Responsive", "CMS Integration", "Lightning Fast", "Conversion Focused"].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="tel:+919999999999"
                    className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 w-fit"
                  >
                    <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                {/* Right — visual */}
                <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-blue-950/60 to-slate-950/80 p-10">
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59,130,246,0.4) 1px, transparent 0)`,
                      backgroundSize: "28px 28px",
                    }}
                  />
                  {/* Floating metric cards */}
                  <div className="relative w-full max-w-xs">
                    {[
                      { label: "Page Speed Score", value: "98/100", color: "from-green-500 to-emerald-400", top: "0%", left: "0%" },
                      { label: "SEO Score", value: "100%", color: "from-blue-500 to-cyan-400", top: "35%", left: "20%" },
                      { label: "Mobile Score", value: "99/100", color: "from-purple-500 to-pink-400", top: "65%", left: "0%" },
                    ].map((m, i) => (
                      <div
                        key={i}
                        className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-sm shadow-xl"
                        style={{ top: m.top, left: m.left, animation: `floatCard${i} ${3 + i}s ease-in-out infinite`, animationDelay: `${i * 0.7}s` }}
                      >
                        <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${m.color}`} />
                        <div>
                          <p className="text-gray-400 text-xs">{m.label}</p>
                          <p className="text-white font-black text-lg leading-none">{m.value}</p>
                        </div>
                      </div>
                    ))}
                    <div className="mt-20 ml-8">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center">
                        <Globe className="w-20 h-20 text-blue-400/40" style={{ animation: "spin 20s linear infinite" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── SERVICES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedCard === index;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={`${activeCategory}-${index}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative cursor-pointer transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${(index % 6) * 0.08}s` }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
              >
                <div
                  className="relative h-full bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-700/40 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    boxShadow: isHovered ? `0 20px 60px ${service.glowColor}` : "none",
                    borderColor: isHovered ? service.glowColor : undefined,
                  }}
                >
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`} />

                  {/* Subtle bg glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500 rounded-2xl`}
                    style={{ opacity: isHovered ? 0.05 : 0 }}
                  />

                  <div className="relative p-7">
                    {/* Badge */}
                    {service.badge && (
                      <div className={`absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${service.badgeColor} shadow-md`}>
                        <Star className="w-3 h-3 text-white fill-white" />
                        <span className="text-white text-xs font-bold">{service.badge}</span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="relative mb-5 inline-flex">
                      <div
                        className={`p-3.5 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg transition-all duration-400 group-hover:scale-110 group-hover:rotate-6`}
                        style={{ boxShadow: isHovered ? `0 8px 24px ${service.glowColor}` : undefined }}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Category tag */}
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{service.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.shortDesc}</p>

                    {/* Expandable features */}
                    <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-48 opacity-100 mb-5" : "max-h-0 opacity-0"}`}>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.fullDesc}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 bg-gradient-to-r ${service.gradient} rounded-full p-0.5 text-white`} />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer action */}
                    <div className="flex items-center justify-between">
                      <button
                        className={`flex items-center gap-2 text-sm font-bold transition-all duration-300 ${
                          isHovered
                            ? `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`
                            : "text-gray-500"
                        }`}
                      >
                        {isExpanded ? "Show Less" : "Learn More"}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : "group-hover:translate-x-1"} ${isHovered ? "text-blue-400" : "text-gray-500"}`} />
                      </button>
                      <a
                        href="tel:+919999999999"
                        onClick={(e) => e.stopPropagation()}
                        className={`opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-xs font-bold hover:scale-105`}
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── WHY CHOOSE US STRIP ── */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-slate-900/50 backdrop-blur-sm p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
            <h3 className="text-center text-lg font-black text-white mb-6 uppercase tracking-widest text-sm">
              Every Service Comes With
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {whyPoints.map((point, i) => {
                const IconComponent = point.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-2 text-center group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    <span className="text-gray-400 text-xs font-medium leading-tight group-hover:text-gray-200 transition-colors duration-300">{point.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── PROCESS NUMBERS ── */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <h3 className="text-center text-2xl md:text-3xl font-black text-white mb-10">
            How We <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Deliver</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            {[
              { n: "01", label: "Discovery Call", icon: Phone, color: "from-blue-500 to-cyan-400" },
              { n: "02", label: "Strategy & Design", icon: Palette, color: "from-purple-500 to-pink-400" },
              { n: "03", label: "Development", icon: Code, color: "from-green-500 to-emerald-400" },
              { n: "04", label: "Launch & Support", icon: Zap, color: "from-orange-500 to-amber-400" },
            ].map((step, i) => {
              const IconComponent = step.icon;
              return (
                <div key={i} className="group flex flex-col items-center text-center p-5 rounded-2xl bg-slate-900/50 border border-white/8 hover:border-white/20 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1">
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-950 border border-white/20 flex items-center justify-center">
                      <span className="text-white text-[10px] font-black">{step.n}</span>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-sm">{step.label}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative inline-block p-px rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" style={{ animationDuration: "3s" }} />
            <div className="relative bg-slate-950 rounded-3xl px-12 py-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-3xl" />
              <div className="relative">
                <p className="text-gray-400 text-base mb-2">Ready to get started?</p>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Let's Build Something{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Extraordinary
                  </span>
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+919999999999"
                    className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-black text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Start Your Project Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="#"
                    className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-bold text-base transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Our Work
                  </a>
                </div>
                <p className="text-gray-500 text-sm mt-6">Free consultation · No commitment · Fast turnaround</p>
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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatCard0 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes floatCard1 {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-14px) rotate(-1deg); }
        }
        @keyframes floatCard2 {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
}