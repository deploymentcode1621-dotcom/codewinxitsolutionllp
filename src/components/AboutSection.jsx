"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import {
  Instagram, Linkedin, Twitter, MessageCircle, Send, Phone,
  Sparkles, Zap, Shield, TrendingUp, Code, Palette, Headphones,
  Rocket, Users, Award, ArrowRight, Check, Globe, ShoppingCart,
  Heart, BookOpen, Cpu, BarChart2, Settings, Smartphone, Star,
  ChevronDown, Mail, MapPin, Clock
} from "lucide-react";

export default function AboutPage() {
  const fullText = "CodeWinX IT Solutions";
  const [typedText, setTypedText] = useState("");
  const [activeService, setActiveService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counterVisible, setCounterVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, satisfaction: 0, clients: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 90);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === heroRef.current && entry.isIntersecting) setHeroVisible(true);
        if (entry.target === statsRef.current && entry.isIntersecting) { setStatsVisible(true); setCounterVisible(true); }
        if (entry.target === featuresRef.current && entry.isIntersecting) setFeaturesVisible(true);
        if (entry.target === aboutRef.current && entry.isIntersecting) setAboutVisible(true);
        if (entry.target === servicesRef.current && entry.isIntersecting) setServicesVisible(true);
        if (entry.target === testimonialsRef.current && entry.isIntersecting) setTestimonialsVisible(true);
        if (entry.target === ctaRef.current && entry.isIntersecting) setCtaVisible(true);
      });
    }, { threshold: 0.15 });

    [heroRef, statsRef, featuresRef, aboutRef, servicesRef, testimonialsRef, ctaRef].forEach(
      (ref) => ref.current && observer.observe(ref.current)
    );

    return () => {
      clearInterval(typingInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!counterVisible) return;
    const targets = { years: 3, projects: 12, satisfaction: 98, clients: 50 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        years: Math.floor(ease * targets.years),
        projects: Math.floor(ease * targets.projects),
        satisfaction: Math.floor(ease * targets.satisfaction),
        clients: Math.floor(ease * targets.clients),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [counterVisible]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { Icon: Instagram, gradient: "from-pink-500 via-purple-500 to-orange-500", href: "#", label: "Instagram" },
    { Icon: Linkedin, gradient: "from-blue-600 to-blue-400", href: "#", label: "LinkedIn" },
    { Icon: MessageCircle, gradient: "from-green-500 to-green-400", href: "#", label: "WhatsApp" },
    { Icon: Send, gradient: "from-blue-400 to-blue-300", href: "#", label: "Telegram" },
    { Icon: Twitter, gradient: "from-sky-500 to-blue-400", href: "#", label: "Twitter" },
  ];

  const stats = [
    { number: counts.years, suffix: "+", label: "Years Experience", icon: TrendingUp, gradient: "from-blue-500 to-cyan-500", bg: "from-blue-500/20 to-cyan-500/20" },
    { number: counts.projects, suffix: "+", label: "Projects Delivered", icon: Zap, gradient: "from-purple-500 to-pink-500", bg: "from-purple-500/20 to-pink-500/20" },
    { number: counts.satisfaction, suffix: "%", label: "Client Satisfaction", icon: Sparkles, gradient: "from-orange-500 to-red-500", bg: "from-orange-500/20 to-red-500/20" },
    { number: counts.clients, suffix: "+", label: "Happy Clients", icon: Users, gradient: "from-green-500 to-emerald-500", bg: "from-green-500/20 to-emerald-500/20" },
  ];

  const services = [
    { title: "Website Development", icon: Globe, gradient: "from-blue-500 to-cyan-500", desc: "Modern, fast and SEO-optimized websites tailored for your business goals." },
    { title: "MERN Stack Development", icon: Code, gradient: "from-purple-500 to-violet-500", desc: "Full-stack web applications using MongoDB, Express, React, and Node.js." },
    { title: "Next.js Applications", icon: Zap, gradient: "from-cyan-500 to-blue-500", desc: "Server-side rendered apps for maximum performance and SEO dominance." },
    { title: "E-commerce Solutions", icon: ShoppingCart, gradient: "from-pink-500 to-rose-500", desc: "Complete online store setups with payment integration and inventory management." },
    { title: "Hospital Management", icon: Heart, gradient: "from-red-500 to-pink-500", desc: "End-to-end hospital software for patient records, billing and scheduling." },
    { title: "School ERP Systems", icon: BookOpen, gradient: "from-green-500 to-emerald-500", desc: "Comprehensive school management for admissions, fees, results and communication." },
    { title: "Billing Software", icon: BarChart2, gradient: "from-orange-500 to-amber-500", desc: "Smart billing and invoicing software for businesses of all sizes." },
    { title: "SEO Optimization", icon: TrendingUp, gradient: "from-yellow-500 to-orange-500", desc: "Rank higher on Google with our proven on-page and off-page SEO strategies." },
    { title: "Business Automation", icon: Settings, gradient: "from-violet-500 to-purple-500", desc: "Automate repetitive tasks and workflows to save time and boost productivity." },
    { title: "Mobile Responsive Design", icon: Smartphone, gradient: "from-teal-500 to-cyan-500", desc: "Pixel-perfect responsive designs that look stunning on any device." },
    { title: "UI/UX Design", icon: Palette, gradient: "from-pink-500 to-purple-500", desc: "Creative interfaces that captivate users and drive conversions." },
    { title: "Custom Software", icon: Cpu, gradient: "from-indigo-500 to-blue-500", desc: "Tailor-made software solutions built exactly for your business needs." },
  ];

  const features = [
    { title: "Creative Design", desc: "Premium UI/UX with neon gradients and clean modern layouts that captivate and engage users.", icon: Palette, gradient: "from-pink-500 to-purple-500" },
    { title: "High Performance", desc: "Next.js optimized websites delivering lightning-fast speed and top-tier SEO rankings.", icon: Code, gradient: "from-blue-500 to-cyan-500" },
    { title: "Premium Support", desc: "Long-term support, maintenance and continuous improvements ensuring your success.", icon: Headphones, gradient: "from-purple-500 to-pink-500" },
    { title: "Security First", desc: "Enterprise-grade security practices protecting your data and your customers at all times.", icon: Shield, gradient: "from-green-500 to-teal-500" },
    { title: "On-Time Delivery", desc: "We respect deadlines and deliver quality projects on schedule, every single time.", icon: Clock, gradient: "from-orange-500 to-red-500" },
    { title: "Scalable Architecture", desc: "Future-ready systems built to scale as your business grows without compromising performance.", icon: Rocket, gradient: "from-cyan-500 to-blue-500" },
  ];

  const values = [
    { icon: Rocket, title: "Innovation First", desc: "Cutting-edge solutions" },
    { icon: Users, title: "Client-Centric", desc: "Your success is ours" },
    { icon: Award, title: "Excellence", desc: "Quality in every detail" },
  ];

  const techStack = [
    { name: "Next.js", color: "text-white" },
    { name: "React", color: "text-cyan-400" },
    { name: "Tailwind CSS", color: "text-purple-400" },
    { name: "MongoDB", color: "text-green-400" },
    { name: "Express", color: "text-orange-400" },
    { name: "Node.js", color: "text-green-500" },
  ];

  const testimonials = [
    { name: "Rahul Sharma", role: "Founder, StartupX", text: "CodeWinX delivered our MERN stack platform ahead of schedule. The quality exceeded our expectations and the support was outstanding throughout.", rating: 5, avatar: "RS" },
    { name: "Priya Mehta", role: "Principal, Green Valley School", text: "Our School ERP system transformed our operations completely. Attendance, fees, results — everything is now digital and seamless.", rating: 5, avatar: "PM" },
    { name: "Dr. Amit Joshi", role: "Director, City Hospital", text: "The hospital management software they built is intuitive and robust. Our staff adopted it instantly. CodeWinX truly understands business needs.", rating: 5, avatar: "AJ" },
    { name: "Sneha Verma", role: "CEO, Fashion Hub", text: "Our e-commerce store went live beautifully. Sales doubled within 3 months after launch. Incredible team and flawless execution!", rating: 5, avatar: "SV" },
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "We understand your vision, goals and requirements through detailed consultation.", icon: Users },
    { step: "02", title: "Strategy", desc: "We plan the architecture, design system and technology stack for your project.", icon: BarChart2 },
    { step: "03", title: "Development", desc: "Our team builds your product with clean code, modern design and best practices.", icon: Code },
    { step: "04", title: "Launch & Support", desc: "We deploy, test and provide ongoing support to ensure long-term success.", icon: Rocket },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          animation: "gridMove 25s linear infinite",
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "0.5s" }} />

      <div className="relative z-10 px-4 sm:px-6 py-24">

        {/* ── HERO SECTION ── */}
        <div ref={heroRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* LEFT */}
          <div
            className={`flex flex-col items-center transition-all duration-1000 ease-out ${heroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-32"}`}
            style={{ transform: heroVisible ? `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` : "translateX(-128px)", transition: "all 1s ease-out" }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse" style={{ animationDuration: "3s" }} />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl" />
                <Image
                  src="https://selectedfirms.co/public/assets/images/blog_cover_image/659825942_1706523199.webp"
                  alt="CodeWinX IT Solutions Team"
                  width={600}
                  height={400}
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform transition duration-500 group-hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-white" />
                    <span className="text-white font-bold text-sm">Premium Quality</span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-white font-bold text-sm">5★ Rated</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-14">
              {socialLinks.map(({ Icon, gradient, href, label }, index) => (
                <a key={index} href={href} aria-label={label}
                  className={`group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg`}
                  style={{ animationName: "float", animationDuration: "3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: `${index * 0.3}s` }}
                >
                  <Icon className="text-white w-5 h-5 relative z-10" />
                </a>
              ))}
            </div>

            <a href="tel:+919999999999"
              className="group mt-8 flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <Phone className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-white font-semibold">Let's Talk — Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* RIGHT */}
          <div className={`transition-all duration-1000 ease-out ${heroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">About Our Company</span>
            </div>

            <h1 className="mb-6">
              <span className="block text-xl md:text-2xl text-gray-400 font-medium mb-2">Welcome to</span>
              <span className="block text-4xl md:text-5xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block" style={{ animation: "shimmer 3s ease-in-out infinite" }}>
                  {typedText}
                </span>
                <span className="animate-pulse text-blue-400">|</span>
              </span>
              <span className="block text-xl md:text-2xl text-gray-400 font-light italic">"We Code, You Win."</span>
            </h1>

            <div className="space-y-4">
              <p className="text-base text-gray-300 leading-relaxed">
                A modern software and web development company dedicated to transforming ideas into powerful <span className="text-blue-400 font-semibold">digital experiences</span>. We help startups, businesses, educational institutions and enterprises build scalable, secure and high-performance digital products.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                We believe every brand deserves <span className="text-purple-400 font-semibold">premium quality development</span>, strong digital presence and future-ready solutions that drive growth and success.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((tech, index) => (
                  <span key={index} className={`px-4 py-2 rounded-full bg-white/5 border border-white/10 ${tech.color} text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10`}
                    style={{ animation: heroVisible ? `fadeIn 0.5s ease-out ${0.6 + index * 0.1}s both` : "none" }}>
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-blue-500/40"
                      style={{ animation: heroVisible ? `fadeIn 0.5s ease-out ${0.9 + index * 0.1}s both` : "none" }}>
                      <IconComponent className="w-6 h-6 text-blue-400 mb-2" />
                      <span className="text-xs font-semibold text-white">{value.title}</span>
                      <span className="text-xs text-gray-400 mt-1">{value.desc}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── ABOUT SECTION ── */}
        <div ref={aboutRef} className="max-w-7xl mx-auto mb-32">
          <div className={`transition-all duration-1000 ease-out ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-4">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Building the <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Future</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <p className="text-base text-gray-300 leading-relaxed border-l-2 border-blue-500 pl-4">
                  At <span className="text-blue-400 font-semibold">CodeWinX IT Solutions</span>, our mission is to empower businesses through innovative technology and smart digital transformation. We focus on performance, user experience, mobile responsiveness and SEO optimization to ensure every project creates long-term value.
                </p>
                <p className="text-base text-gray-300 leading-relaxed border-l-2 border-purple-500 pl-4">
                  We specialize in <span className="text-purple-400 font-semibold">Website Development, MERN Stack Applications, Next.js Development, E-commerce Solutions, Billing Software, School Management Systems, Hospital Management Software, SEO Services and Business Automation</span>.
                </p>
                <p className="text-base text-gray-300 leading-relaxed border-l-2 border-pink-500 pl-4">
                  From custom web applications to enterprise software systems, we work closely with clients to understand their vision and convert ideas into impactful digital solutions. Whether you are a startup launching your first product or an established business looking to automate operations, <span className="text-pink-400 font-semibold">CodeWinX IT Solutions is your trusted technology partner</span>.
                </p>
                <p className="text-base text-gray-300 leading-relaxed border-l-2 border-green-500 pl-4">
                  We are committed to delivering <span className="text-green-400 font-semibold">premium quality, innovation and long-term support</span> — because your success is our success. Together, let's build technology that creates opportunities, solves problems and shapes the future.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Website Development", icon: Globe, color: "blue" },
                  { label: "MERN Stack Development", icon: Code, color: "purple" },
                  { label: "Next.js Applications", icon: Zap, color: "cyan" },
                  { label: "E-commerce Solutions", icon: ShoppingCart, color: "pink" },
                  { label: "School ERP Systems", icon: BookOpen, color: "green" },
                  { label: "Hospital Software", icon: Heart, color: "red" },
                  { label: "SEO Optimization", icon: TrendingUp, color: "orange" },
                  { label: "Business Automation", icon: Settings, color: "violet" },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  const colorMap = {
                    blue: "border-blue-500/40 hover:border-blue-400 text-blue-400",
                    purple: "border-purple-500/40 hover:border-purple-400 text-purple-400",
                    cyan: "border-cyan-500/40 hover:border-cyan-400 text-cyan-400",
                    pink: "border-pink-500/40 hover:border-pink-400 text-pink-400",
                    green: "border-green-500/40 hover:border-green-400 text-green-400",
                    red: "border-red-500/40 hover:border-red-400 text-red-400",
                    orange: "border-orange-500/40 hover:border-orange-400 text-orange-400",
                    violet: "border-violet-500/40 hover:border-violet-400 text-violet-400",
                  };
                  return (
                    <div key={index}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border ${colorMap[item.color]} transition-all duration-300 hover:bg-white/10 hover:scale-105`}
                      style={{ animation: aboutVisible ? `fadeIn 0.4s ease-out ${index * 0.08}s both` : "none" }}
                    >
                      <IconComponent className={`w-5 h-5 ${colorMap[item.color].split(" ")[2]} flex-shrink-0`} />
                      <span className="text-xs font-medium text-gray-300">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS SECTION ── */}
        <div ref={statsRef} className="max-w-7xl mx-auto mb-32">
          <div className={`text-center mb-12 transition-all duration-1000 ease-out ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Impact in Numbers</span>
            </h2>
            <p className="text-gray-400 mt-2">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index}
                  className={`group relative overflow-hidden transition-all duration-1000 ease-out ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className={`relative h-44 flex flex-col justify-center items-center px-4 py-6 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800/50 shadow-xl transition-all duration-500 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`} />
                    <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <IconComponent className="w-12 h-12 text-blue-400" />
                    </div>
                    <h3 className={`relative text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.number}{stat.suffix}
                    </h3>
                    <p className="relative text-gray-300 font-medium text-sm text-center">{stat.label}</p>
                    <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <div ref={servicesRef} className="max-w-7xl mx-auto mb-32">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-sm mb-4">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">What We Deliver</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">Comprehensive digital solutions designed to transform your business and accelerate growth</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ease-out ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                  style={{ transitionDelay: `${index * 0.06}s` }}
                >
                  <div className="relative flex flex-col gap-4 px-6 py-6 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800/50 shadow-xl transition-all duration-400 hover:scale-[1.03] hover:border-blue-500/40 hover:shadow-2xl min-h-[160px]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.08] transition-all duration-500 rounded-2xl`} />
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-6 shadow-lg flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-base font-bold mb-1 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                    <div className={`absolute bottom-3 right-3 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100`}>
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── PROCESS SECTION ── */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 backdrop-blur-sm mb-4">
              <Settings className="w-4 h-4 text-teal-400" />
              <span className="text-teal-300 text-sm font-medium">How We Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-1/4 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 opacity-30" />
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-teal-500/40 hover:shadow-2xl hover:shadow-teal-500/10">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-800 border border-teal-500/50 flex items-center justify-center">
                      <span className="text-teal-400 text-xs font-bold">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <div ref={featuresRef} className="max-w-7xl mx-auto mb-32">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm mb-4">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Why Partner With Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animation: "shimmer 3s ease-in-out infinite" }}>
                CodeWinX?
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((card, index) => {
              const IconComponent = card.icon;
              const isLeft = index === 0;
              const isRight = index === 2 || index === 5;
              return (
                <div key={index}
                  className={`group relative overflow-hidden transition-all duration-1000 ease-out ${featuresVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${isLeft ? "-translate-x-32" : isRight ? "translate-x-32" : "translate-y-20"}`}`}
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="relative h-64 flex flex-col justify-center items-center px-8 py-8 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800/50 shadow-xl transition-all duration-500 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`} />
                    <div className={`relative mb-5 p-4 rounded-2xl bg-gradient-to-br ${card.gradient} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`relative text-lg font-bold mb-3 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent text-center`}>{card.title}</h3>
                    <p className="relative text-gray-400 text-sm text-center leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div ref={testimonialsRef} className="max-w-5xl mx-auto mb-32">
          <div className={`text-center mb-12 transition-all duration-1000 ease-out ${testimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-sm mb-4">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">Client Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className={`transition-all duration-1000 ease-out ${testimonialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="relative overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm p-8 md:p-12 shadow-2xl">
              <div className="absolute top-6 left-8 text-6xl text-blue-500/20 font-serif">"</div>
              <div className="absolute bottom-6 right-8 text-6xl text-purple-500/20 font-serif rotate-180">"</div>

              {testimonials.map((t, index) => (
                <div key={index} className={`transition-all duration-700 ${activeTestimonial === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute inset-0"}`}>
                  {activeTestimonial === index && (
                    <div className="flex flex-col items-center text-center">
                      <div className="flex gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-3xl italic">"{t.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {t.avatar}
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-white">{t.name}</p>
                          <p className="text-gray-400 text-sm">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTestimonial === index ? "w-8 bg-blue-400" : "bg-slate-600 hover:bg-slate-400"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA SECTION ── */}
        <div ref={ctaRef} className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1200 ease-out ${ctaVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}`}>
            <div className="relative overflow-hidden rounded-3xl p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" style={{ animationDuration: "3s" }} />
              <div className="relative bg-slate-950 rounded-3xl p-12 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
                    <Rocket className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-300 text-sm font-medium">Ready to Build Something Amazing?</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                    Let's <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Build Together</span>
                  </h2>
                  <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
                    From concept to launch — we're your end-to-end technology partner. Get a free consultation and let's turn your vision into reality.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+919999999999"
                      className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 font-semibold"
                    >
                      <Phone className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-white">Call Now — Free Consultation</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <a href="mailto:info@codewinx.com"
                      className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 font-semibold"
                    >
                      <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Send a Message</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
                    {[
                      { icon: MapPin, text: "Akola, Maharashtra" },
                      { icon: Phone, text: "+91 99999 99999" },
                      { icon: Mail, text: "info@codewinx.com" },
                    ].map((item, i) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                          <IconComponent className="w-4 h-4 text-blue-400" />
                          <span>{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="text-center mt-20 pb-4">
          <p className="text-gray-600 text-sm">© 2024 CodeWinX IT Solutions. All rights reserved.</p>
          <p className="text-blue-500/60 text-xs mt-1 font-semibold tracking-widest">WE CODE, YOU WIN.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; background-size: 200% 200%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
}