// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeHash, setActiveHash] = useState("#home");

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Career", href: "#career" },
//     { name: "Contact", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
//   }, [mobileMenuOpen]);

//   useEffect(() => {
//     document.body.style.backgroundColor = "#ffffff";
//   }, [pathname]);

//   // ✅ HASH TRACKING (FIX)
//   useEffect(() => {
//     const updateHash = () => {
//       setActiveHash(window.location.hash || "#home");
//     };

//     updateHash();
//     window.addEventListener("hashchange", updateHash);
//     return () => window.removeEventListener("hashchange", updateHash);
//   }, []);

//   return (
//     <>
//       <header
//         className={`w-full fixed top-0 left-0 z-50 h-24 transition-all duration-500 ${
//           scrolled
//             ? "h-20 bg-[#0A0F1F] shadow-2xl shadow-purple-900/20"
//             : "bg-[#0A0F1F]"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
//           {/* LOGO */}
//           <Link href="/" className="flex items-center gap-3 group relative z-10">
//             <div className="relative">
//               <div className="absolute inset-0 bg-linear-to-r from-[#3AB4FF] to-[#A042F4] rounded-full blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
//               <Image
//                 src="/cwxlogo.png"
//                 width={110}
//                 height={110}
//                 alt="CodeWinX IT Logo"
//                 priority
//                 className="logo-spin relative drop-shadow-2xl w-auto h-auto"
//               />
//             </div>

//             <div className="flex flex-col">
//               <h1 className="font-bold tracking-wide whitespace-nowrap bg-linear-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4] bg-clip-text text-transparent text-3xl">
//                 CodeWinX
//               </h1>
//               <span className="text-xs text-white font-light tracking-widest self-end">
//                 We Code, You Win.
//               </span>
//             </div>
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden lg:flex gap-8 items-center">
//             {navItems.map((item) => {
//               const isActive = activeHash === item.href;

//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setActiveHash(item.href)}
//                   className="relative group text-sm font-medium"
//                 >
//                   <span
//                     className={`relative inline-block pb-2 transition-all duration-300 ${
//                       isActive
//                         ? "text-[#5F6FFF]"
//                         : "text-gray-300 group-hover:text-[#5F6FFF]"
//                     }`}
//                   >
//                     {item.name}
//                   </span>

//                   <span
//                     className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-[#3AB4FF] to-[#A042F4] transition-all duration-300 ${
//                       isActive ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                   />
//                 </Link>
//               );
//             })}

//             <Link
//               href="https://wa.me/919876543210"
//               target="_blank"
//               className="ml-6 flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-white text-sm bg-linear-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4] shadow-lg hover:shadow-2xl hover:scale-105 animate-float-smooth transition-all duration-300"
//             >
//               <Image
//                 src="/whatsapp.png"
//                 alt="WhatsApp"
//                 width={28}
//                 height={28}
//                 className="animate-spin-slow"
//               />
//               Chat on WhatsApp
//             </Link>
//           </nav>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="lg:hidden z-50 text-white p-2 rounded-lg hover:bg-white/10"
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
//           mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         <div
//           className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//           onClick={() => setMobileMenuOpen(false)}
//         />

//         <div
//           className={`absolute right-0 top-0 h-full w-80 bg-[#0A0F1F] shadow-2xl transition-transform duration-500 ${
//             mobileMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <nav className="flex flex-col gap-2 p-8 mt-24">
//             {navItems.map((item) => {
//               const isActive = activeHash === item.href;

//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className={`px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
//                     isActive
//                       ? "bg-linear-to-r from-[#3AB4FF]/20 via-[#5F6FFF]/20 to-[#A042F4]/20 text-white border-l-4 border-[#3AB4FF]"
//                       : "text-gray-300 hover:bg-white/5 hover:text-white hover:translate-x-2"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               );
//             })}

//             {/*WHATSAPP BUTTON (MOBILE) */}
//             <Link
//               href="https://wa.me/919876543210"
//               target="_blank"
//               className="
//                 mt-6 flex items-center gap-3 px-6 py-4 rounded-xl 
//                 text-white font-semibold text-lg w-[85%] mx-auto
//                 bg-linear-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4]
//                 shadow-lg hover:shadow-2xl hover:scale-105
//                 animate-float-smooth transition-all duration-300
//               "
//             >
//              <Image
//                 src="/whatsapp.png"
//                 alt="WhatsApp"
//                 width={30}
//                 height={30}
//                 className="animate-spin-slow"
//               />
//                 Chat on WhatsApp
//             </Link>
//           </nav>
//         </div>
//       </div>

//       {/* GLOBAL ANIMATIONS */}
//       <style jsx global>{`
//         @keyframes spin-360 {
//            from {
//            transform: rotate(0deg);
//          }
//            to {
//           transform: rotate(360deg);
//        }
//       }
//         .group:hover .logo-spin {
//             animation: spin-360 0.8s ease-in-out;
//         }

//         @keyframes floatSmooth {
//           0% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-6px);
//           }
//           100% {
//             transform: translateY(0px);
//           }
//         }

//         @keyframes spinSlow {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-float-smooth {
//           animation: floatSmooth 3s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spinSlow 6s linear infinite;
//         }

//         /* ADDED ANIMATION */
//         @keyframes pulse-slow {
//           0% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.75;
//           }
//           100% {
//             opacity: 1;
//           }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
//       `}</style>
//     </>
//   );
// }
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [showLogo, setShowLogo] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    setShowLogo(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#home");
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "h-20 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-blue-900/20 border-b border-blue-500/10"
            : "h-24 bg-slate-950/80 backdrop-blur-md"
        }`}
      >
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" 
             style={{ animation: 'shimmerBorder 3s ease-in-out infinite' }} />

        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center relative">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700" />
              
              {/* Logo circle with animation */}
              <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] transition-all duration-700 ${
                showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center group-hover:bg-slate-900 transition-all duration-300">
                  <span className="text-2xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    CW
                  </span>
                </div>
              </div>
              
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 group-hover:border-purple-500/50 transition-colors duration-500"
                   style={{ animation: 'spin 8s linear infinite' }} />
            </div>

            <div className={`flex flex-col transition-all duration-700 ${
              showLogo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`} style={{ transitionDelay: '0.1s' }}>
              <h1 className="font-bold tracking-wide whitespace-nowrap text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CodeWinX
              </h1>
              <span className="text-[10px] text-gray-400 font-light tracking-[0.2em] -mt-1">
                WE CODE, YOU WIN
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-1 items-center bg-slate-900/50 backdrop-blur-sm px-2 py-2 rounded-full border border-slate-800/50">
            {navItems.map((item, index) => {
              const isActive = activeHash === item.href;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveHash(item.href)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.05}s` }}
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                  }`}>
                    {item.name}
                  </span>
                  
                  {/* Active background */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                         style={{ animation: 'fadeIn 0.3s ease-out' }} />
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </a>
              );
            })}
          </nav>

          {/* CTA BUTTON */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white text-sm relative overflow-hidden group transition-all duration-700 ${
              showLogo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-500 group-hover:scale-105" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Icon with animation */}
            <MessageCircle className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
                          style={{ animation: 'float 3s ease-in-out infinite' }} />
            
            <span className="relative z-10">Chat on WhatsApp</span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-50 relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="relative">
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" style={{ animation: 'fadeIn 0.2s ease-out' }} />
              ) : (
                <Menu className="w-6 h-6 text-white" style={{ animation: 'fadeIn 0.2s ease-out' }} />
              )}
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            animation: mobileMenuOpen ? 'fadeIn 0.3s ease-out' : 'none'
          }}
        />

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl border-l border-blue-500/20 transition-transform duration-500 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

          <nav className="relative flex flex-col gap-2 p-6 mt-24">
            {/* Menu items */}
            {navItems.map((item, index) => {
              const isActive = activeHash === item.href;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveHash(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`group relative px-6 py-4 rounded-2xl text-base font-medium transition-all duration-300 overflow-hidden ${
                    mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
                >
                  {/* Active/Hover background */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
                      : 'bg-white/0 group-hover:bg-white/5'
                  }`} />
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"
                         style={{ animation: 'fadeIn 0.3s ease-out' }} />
                  )}
                  
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  
                  {/* Hover arrow */}
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-400">
                    →
                  </span>
                </a>
              );
            })}

            {/* WhatsApp button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative mt-6 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white font-semibold text-base overflow-hidden group transition-all duration-700 ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <MessageCircle className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
                            style={{ animation: 'float 3s ease-in-out infinite' }} />
              <span className="relative z-10">Chat on WhatsApp</span>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </a>

            {/* Decorative sparkle */}
            <div className="absolute top-10 right-10 opacity-30">
              <Sparkles className="w-8 h-8 text-blue-400" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            </div>
          </nav>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes shimmerBorder {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
    </>
  );
}