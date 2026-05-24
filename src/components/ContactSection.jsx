"use client";
import { useState, useEffect, useRef } from "react";
import {
  Mail, MapPin, Phone, Send, CheckCircle, MessageSquare,
  User, Clock, Globe, Award, Users, Zap, Shield, Sparkles,
  ArrowRight, Instagram, Linkedin, Twitter, MessageCircle,
  ChevronDown, Star, Heart
} from "lucide-react";

const SERVICES = [
  "Website Development",
  "MERN Stack Development",
  "Next.js Application",
  "E-Commerce Platform",
  "School ERP System",
  "Hospital Management Software",
  "Billing Software",
  "SEO Optimization",
  "Business Automation",
  "UI/UX Design",
  "Custom Software",
  "Other",
];

const BUDGETS = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
  "Let's Discuss",
];

const socials = [
  { label: "WhatsApp", href: "https://wa.me/919999999999", color: "from-green-500 to-emerald-400", glow: "rgba(16,185,129,0.4)", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  )},
  { label: "Instagram", href: "#", color: "from-pink-500 to-orange-400", glow: "rgba(236,72,153,0.4)", icon: <Instagram className="w-5 h-5" /> },
  { label: "LinkedIn", href: "#", color: "from-blue-600 to-blue-400", glow: "rgba(37,99,235,0.4)", icon: <Linkedin className="w-5 h-5" /> },
  { label: "Telegram", href: "#", color: "from-sky-500 to-blue-400", glow: "rgba(14,165,233,0.4)", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
  )},
  { label: "Twitter", href: "#", color: "from-slate-700 to-slate-500", glow: "rgba(100,116,139,0.4)", icon: <Twitter className="w-5 h-5" /> },
];

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Akola, Maharashtra, India 🇮🇳", gradient: "from-purple-500 to-violet-400", glow: "rgba(139,92,246,0.35)" },
  { icon: Mail, label: "Email", value: "support@codewinxitsolutions.com", gradient: "from-blue-500 to-cyan-400", glow: "rgba(59,130,246,0.35)" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", gradient: "from-green-500 to-emerald-400", glow: "rgba(16,185,129,0.35)" },
  { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9AM – 7PM IST", gradient: "from-orange-500 to-amber-400", glow: "rgba(249,115,22,0.35)" },
];

const features = [
  { icon: Zap, title: "Fast Response", desc: "Reply within 24 hours", gradient: "from-yellow-500 to-orange-400" },
  { icon: Users, title: "Expert Team", desc: "15+ Professionals", gradient: "from-blue-500 to-cyan-400" },
  { icon: Award, title: "Quality Work", desc: "100% Satisfaction", gradient: "from-purple-500 to-pink-400" },
  { icon: Globe, title: "Global Reach", desc: "Worldwide Service", gradient: "from-green-500 to-teal-400" },
];

export default function ContactPage() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredInfo, setHoveredInfo] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setIsVisible(true); }),
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setIsSubmitting(false);
      setTimeout(() => { setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" }); setStatus(""); }, 4000);
    }, 1800);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 text-white py-28 px-4 sm:px-6 overflow-hidden min-h-screen"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
          animation: "gridShift 30s linear infinite",
        }} />
      </div>

      {/* Orbs */}
      <div className="absolute top-24 left-12 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
      <div className="absolute bottom-24 right-12 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold tracking-wide">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-5 leading-tight tracking-tight">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ animation: "shimmer 3s ease-in-out infinite" }}>
              Amazing
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's talk. We'll turn your idea into a powerful digital product — fast, beautiful and business-ready.
          </p>
        </div>

        {/* ── FEATURE CARDS ── */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-xl overflow-hidden cursor-default">
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 rounded-2xl`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-400`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-black text-white text-base">{f.title}</p>
                <p className="text-gray-400 text-sm mt-1">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-3 gap-8 mb-14">

          {/* ── FORM ── */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
            <div className="relative rounded-3xl border border-slate-700/40 bg-slate-900/70 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/4 to-purple-500/4" />

              <div className="relative p-8 md:p-10">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white">Send Us a Message</h2>
                    <p className="text-gray-400 text-sm">We reply within 24 hours — guaranteed</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-300">
                        <User className="w-4 h-4 text-cyan-400" /> Full Name *
                      </label>
                      <input
                        name="name" type="text" required value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-slate-800/80 border border-slate-700/60 px-4 py-3.5 rounded-xl text-white text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-300">
                        <Mail className="w-4 h-4 text-blue-400" /> Email Address *
                      </label>
                      <input
                        name="email" type="email" required value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-slate-800/80 border border-slate-700/60 px-4 py-3.5 rounded-xl text-white text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-300">
                        <Phone className="w-4 h-4 text-green-400" /> Phone Number
                      </label>
                      <input
                        name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-800/80 border border-slate-700/60 px-4 py-3.5 rounded-xl text-white text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all duration-300"
                      />
                    </div>
                    {/* Service dropdown */}
                    <div className="relative">
                      <label className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-300">
                        <Globe className="w-4 h-4 text-purple-400" /> Service Needed
                      </label>
                      <button
                        type="button"
                        onClick={() => { setServiceOpen(!serviceOpen); setBudgetOpen(false); }}
                        className="w-full bg-slate-800/80 border border-slate-700/60 px-4 py-3.5 rounded-xl text-sm text-left flex items-center justify-between transition-all duration-300 focus:border-blue-500 focus:outline-none hover:border-slate-500"
                      >
                        <span className={form.service ? "text-white" : "text-gray-500"}>{form.service || "Select a service"}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`} />
                      </button>
                      {serviceOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-2xl z-50 max-h-52 overflow-y-auto">
                          {SERVICES.map((s) => (
                            <button key={s} type="button"
                              onClick={() => { setForm({ ...form, service: s }); setServiceOpen(false); }}
                              className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                            >{s}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Budget dropdown */}
                  <div className="relative">
                    <label className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-300">
                      <Award className="w-4 h-4 text-orange-400" /> Project Budget
                    </label>
                    <button
                      type="button"
                      onClick={() => { setBudgetOpen(!budgetOpen); setServiceOpen(false); }}
                      className="w-full bg-slate-800/80 border border-slate-700/60 px-4 py-3.5 rounded-xl text-sm text-left flex items-center justify-between transition-all duration-300 focus:border-blue-500 focus:outline-none hover:border-slate-500"
                    >
                      <span className={form.budget ? "text-white" : "text-gray-500"}>{form.budget || "Select your budget range"}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${budgetOpen ? "rotate-180" : ""}`} />
                    </button>
                    {budgetOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-2xl z-50">
                        {BUDGETS.map((b) => (
                          <button key={b} type="button"
                            onClick={() => { setForm({ ...form, budget: b }); setBudgetOpen(false); }}
                            className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                          >{b}</button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-2 mb-2 text-sm font-bold text-gray-300">
                      <MessageSquare className="w-4 h-4 text-pink-400" /> Your Message *
                    </label>
                    <textarea
                      name="message" rows={5} required value={form.message} onChange={handleChange}
                      placeholder="Tell us about your project — what you need, your goals, timeline..."
                      className="w-full bg-slate-800/80 border border-slate-700/60 px-4 py-3.5 rounded-xl text-white text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit" disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-black text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/40 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending your message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                          Send Message — We'll Reply Fast
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </button>

                  {/* Success */}
                  {status === "success" && (
                    <div className="flex items-center gap-4 bg-green-500/15 border border-green-500/30 px-5 py-4 rounded-xl" style={{ animation: "fadeInUp 0.5s ease-out" }}>
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-green-300 font-black">Message Sent Successfully!</p>
                        <p className="text-green-400/70 text-sm">We'll get back to you within 24 hours. Check your email!</p>
                      </div>
                    </div>
                  )}

                  <p className="text-gray-600 text-xs text-center">🔒 Your information is 100% confidential and never shared.</p>
                </form>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className={`flex flex-col gap-5 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>

            {/* Contact Info */}
            <div className="rounded-3xl border border-slate-700/40 bg-slate-900/70 backdrop-blur-md overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 to-purple-500" />
              <div className="p-6">
                <h3 className="text-lg font-black text-white mb-5 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={i}
                        onMouseEnter={() => setHoveredInfo(i)}
                        onMouseLeave={() => setHoveredInfo(null)}
                        className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-default"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                          style={{ boxShadow: hoveredInfo === i ? `0 4px 16px ${info.glow}` : undefined }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{info.label}</p>
                          <p className="text-white text-sm font-semibold mt-0.5 leading-snug">{info.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="relative rounded-3xl overflow-hidden border border-white/8 p-px">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500" />
              <div className="relative bg-slate-950/90 rounded-3xl p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Available Now</span>
                  </div>
                  <h4 className="text-white font-black text-lg mb-2">Prefer to Call Directly?</h4>
                  <p className="text-gray-400 text-sm mb-4">Talk to our team right now — no waiting, no bots.</p>
                  <a
                    href="tel:+919876543210"
                    className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-black text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 w-full justify-center"
                  >
                    <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    +91 98765 43210
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 backdrop-blur-sm hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/15"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <p className="text-white font-black text-sm">Chat on WhatsApp</p>
                <p className="text-gray-400 text-xs">Fastest response — usually instant</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-500 ml-auto group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
            </a>

            {/* Trust pill */}
            <div className="flex flex-wrap gap-2">
              {["NDA Protected", "Free Consultation", "No Hidden Costs", "Fast Delivery"].map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-semibold hover:border-blue-500/30 hover:text-gray-300 transition-all duration-300">
                  <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SOCIAL LINKS ── */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="relative rounded-2xl border border-white/8 bg-slate-900/40 backdrop-blur-sm p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/4 via-purple-600/4 to-pink-600/4" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-black text-white mb-1">Connect With Us</h3>
                <p className="text-gray-400 text-sm">Follow us for updates, tips and behind-the-scenes work</p>
              </div>
              <div className="flex items-center gap-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    onMouseEnter={() => setHoveredSocial(i)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`relative group w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1 shadow-lg`}
                    style={{ boxShadow: hoveredSocial === i ? `0 8px 24px ${s.glow}` : undefined }}
                  >
                    {s.icon}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-semibold">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RATING ROW ── */}
        <div className={`mt-8 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-white font-black text-sm">5.0 Rating</span>
            <div className="w-px h-4 bg-slate-700" />
            <span className="text-gray-400 text-sm">Trusted by <span className="text-white font-bold">50+ clients</span></span>
            <div className="w-px h-4 bg-slate-700" />
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span className="text-gray-400 text-sm">Made with love in India</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; background-size: 200% 200%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gridShift {
          0% { transform: translate(0,0); }
          100% { transform: translate(52px,52px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}