// // "use client";

// // import { useEffect, useState } from "react";
// // import {
// //   FaInstagram,
// //   FaLinkedin,
// //   FaTwitter,
// //   FaWhatsapp,
// //   FaTelegram,
// //   FaPhoneAlt,
// // } from "react-icons/fa";

// // export default function AboutPage() {
// //   const fullText = "Codewinx IT Solutions";
// //   const [typedText, setTypedText] = useState("");

// //   useEffect(() => {
// //     let index = 0;
// //     const typingInterval = setInterval(() => {
// //       setTypedText(fullText.slice(0, index + 1));
// //       index++;
// //       if (index === fullText.length) clearInterval(typingInterval);
// //     }, 90);

// //     return () => clearInterval(typingInterval);
// //   }, []);

// //   return (
// //     <section className="min-h-screen bg-linear-to-b from-[#02030a] via-[#05060f] to-[#080b16] text-white py-24 px-6">

// //       {/* MAIN GRID */}
// //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

// //         {/* LEFT IMAGE */}
// //         <div className="flex flex-col items-center">
// //           <img
// //             src="https://selectedfirms.co/public/assets/images/blog_cover_image/659825942_1706523199.webp"
// //             alt="Codewinx Team"
// //             className="w-full max-w-sm rounded-2xl shadow-xl
// //               hover:scale-105 transition duration-500
// //               drop-shadow-[0_0_35px_rgba(0,194,255,0.45)]"
// //           />

// //           <div className="flex gap-6 text-4xl mt-6 pt-6">
// //             <FaInstagram className="text-[#E4405F]" />
// //             <FaLinkedin className="text-[#0A66C2]" />
// //             <FaWhatsapp className="text-[#25D366]" />
// //             <FaTelegram className="text-[#0088CC]" />
// //             <FaTwitter className="text-[#1DA1F2]" />
// //           </div>
// //         </div>

// //         {/* RIGHT CONTENT */}
// //         <div className="text-center">
// //           <h1 className="mb-6">
// //             <span className="block text-3xl font-semibold">About</span>

// //             <span className="block mt-2 text-4xl font-extrabold bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
// //               {typedText}
// //               <span className="animate-pulse">|</span>
// //             </span>
// //           </h1>

// //           <p className="text-lg text-gray-300 mb-4">
// //             we craft digital experiences that blend creativity with cutting-edge
// //             technology. We build high-performance websites and digital solutions
// //             using Next.js, React, Tailwind CSS, MongoDB & Express.
// //           </p>

// //           <p className="text-lg text-gray-300 mb-3">
// //             We believe every brand deserves premium quality development, scalable
// //             architecture, and eye-catching designs that stand out in the digital world.
// //           </p>

// //           {/* CALL ICON */}
// //           <div className="flex justify-center mt-6">
// //             <a
// //               href="tel:+919999999999"
// //               className="w-14 h-14 flex items-center justify-center
// //                 rounded-full bg-[#0c0e1a]
// //                 border border-[#1d2030]
// //                 shadow-lg hover:scale-110 transition"
// //             >
// //               <FaPhoneAlt className="text-white text-xl" />
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* STATS BOXES */}
// //       <div className="max-w-7xl mx-auto mt-20 grid gap-8 sm:grid-cols-3">
// //         {[
// //           { number: "3+", label: "Years of Experience" },
// //           { number: "12+", label: "Projects Delivered" },
// //           { number: "98%", label: "Client Satisfaction" },
// //         ].map((stat, index) => (
// //           <div
// //             key={index}
// //             className="h-32 flex flex-col justify-center items-center
// //               px-6 py-4 bg-[#0c0e1a]/90
// //               rounded-xl border border-[#1d2030]
// //               shadow-lg hover:scale-105 transition"
// //           >
// //             <h3 className="text-4xl font-bold bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
// //               {stat.number}
// //             </h3>
// //             <p className="text-gray-300 text-sm mt-2 text-center">
// //               {stat.label}
// //             </p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* WHY CHOOSE US – MATCHED BOX STYLE */}
// //       <div className="max-w-7xl mx-auto mt-24">
// //         <h2 className="text-4xl font-bold text-center mb-10">
// //           Why Choose{" "}
// //           <span className="bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
// //             Us?
// //           </span>
// //         </h2>

// //         <div className="grid md:grid-cols-3 gap-8">
// //           {[
// //             {
// //               title: "Creative Design",
// //               desc: "Premium UI/UX, neon gradients, and clean modern layouts.",
// //             },
// //             {
// //               title: "High Performance",
// //               desc: "Next.js optimized websites for speed & SEO ranking.",
// //             },
// //             {
// //               title: "Premium Support",
// //               desc: "Long-term support, maintenance & improvements.",
// //             },
// //           ].map((card, index) => (
// //             <div
// //               key={index}
// //               className="h-32 flex flex-col justify-center items-center
// //                 px-6 py-4 bg-[#0c0e1a]/90
// //                 rounded-xl border border-[#1d2030]
// //                 shadow-lg hover:scale-105 transition text-center"
// //             >
// //               <h3 className="text-lg font-semibold bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text mb-2">
// //                 {card.title}
// //               </h3>
// //               <p className="text-gray-300 text-sm">
// //                 {card.desc}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //     </section>
// //   );
// // }
// "use client";
// import React, { useEffect, useState } from 'react';
// import { Instagram, Linkedin, Twitter, MessageCircle, Send, Phone, Sparkles, Zap, Shield, TrendingUp, Code, Palette, Headphones } from 'lucide-react';

// export default function AboutPage() {
//   const fullText = "CodeWinx IT Solutions";
//   const [typedText, setTypedText] = useState("");
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCard, setActiveCard] = useState(null);

//   useEffect(() => {
//     setIsVisible(true);
//     let index = 0;
//     const typingInterval = setInterval(() => {
//       setTypedText(fullText.slice(0, index + 1));
//       index++;
//       if (index === fullText.length) clearInterval(typingInterval);
//     }, 90);

//     return () => clearInterval(typingInterval);
//   }, []);

//   const socialLinks = [
//     { Icon: Instagram, gradient: 'from-pink-500 via-purple-500 to-orange-500', href: '#' },
//     { Icon: Linkedin, gradient: 'from-blue-600 to-blue-400', href: '#' },
//     { Icon: MessageCircle, gradient: 'from-green-500 to-green-400', href: '#' },
//     { Icon: Send, gradient: 'from-blue-400 to-blue-300', href: '#' },
//     { Icon: Twitter, gradient: 'from-sky-500 to-blue-400', href: '#' }
//   ];

//   const stats = [
//     { number: "3+", label: "Years of Experience", icon: TrendingUp },
//     { number: "12+", label: "Projects Delivered", icon: Zap },
//     { number: "98%", label: "Client Satisfaction", icon: Sparkles },
//   ];

//   const features = [
//     {
//       title: "Creative Design",
//       desc: "Premium UI/UX, neon gradients, and clean modern layouts that captivate users.",
//       icon: Palette,
//       gradient: "from-pink-500 to-purple-500"
//     },
//     {
//       title: "High Performance",
//       desc: "Next.js optimized websites for lightning-fast speed & top SEO ranking.",
//       icon: Code,
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       title: "Premium Support",
//       desc: "Long-term support, maintenance & continuous improvements for your success.",
//       icon: Headphones,
//       gradient: "from-purple-500 to-pink-500"
//     },
//   ];

//   return (
//     <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 text-white py-24 px-6 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" 
//              style={{ animationDuration: '4s' }} />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" 
//              style={{ animationDuration: '6s', animationDelay: '1s' }} />
//       </div>

//       {/* MAIN GRID */}
//       <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-20">
//         {/* LEFT IMAGE */}
//         <div 
//           className={`flex flex-col items-center transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
//           }`}
//         >
//           <div className="relative group">
//             {/* Glow effect */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500" />
            
//             {/* Image container */}
//             <div className="relative">
//               <img
//                 src="https://selectedfirms.co/public/assets/images/blog_cover_image/659825942_1706523199.webp"
//                 alt="CodeWinx Team"
//                 className="relative w-full max-w-sm rounded-2xl shadow-2xl transform transition duration-500 group-hover:scale-105"
//               />
              
//               {/* Overlay gradient on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-8">
//             {socialLinks.map(({ Icon, gradient, href }, index) => (
//               <a
//                 key={index}
//                 href={href}
//                 className={`group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg cursor-pointer`}
//                 style={{
//                   animation: `float 3s ease-in-out infinite`,
//                   animationDelay: `${index * 0.2}s`
//                 }}
//               >
//                 <Icon className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
//                 <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
//               </a>
//             ))}
//           </div>

//           {/* Phone button */}
//           <a
//             href="tel:+919999999999"
//             className="group mt-6 w-14 h-14 flex items-center justify-center rounded-full bg-slate-900/80 backdrop-blur-sm border-2 border-blue-500/30 shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-400 hover:shadow-blue-500/50 hover:shadow-2xl"
//           >
//             <Phone className="w-5 h-5 text-blue-400 transition-transform duration-300 group-hover:rotate-12" />
//           </a>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div 
//           className={`transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
//           }`}
//         >
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm mb-4">
//             <Sparkles className="w-4 h-4 text-blue-400" />
//             <span className="text-blue-300 text-sm font-medium">About Us</span>
//           </div>

//           <h1 className="mb-6">
//             <span className="block text-5xl md:text-6xl font-extrabold mb-3">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//                     style={{ animation: 'shimmer 3s ease-in-out infinite' }}>
//                 {typedText}
//               </span>
//               <span className="animate-pulse text-blue-400">|</span>
//             </span>
//           </h1>

//           <div className="space-y-4">
//             <p className="text-lg text-gray-300 leading-relaxed">
//               We craft digital experiences that blend creativity with cutting-edge technology. We build high-performance websites and digital solutions using <span className="text-blue-400 font-semibold">Next.js</span>, <span className="text-cyan-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Tailwind CSS</span>, <span className="text-green-400 font-semibold">MongoDB</span> & <span className="text-orange-400 font-semibold">Express</span>.
//             </p>

//             <p className="text-lg text-gray-300 leading-relaxed">
//               We believe every brand deserves premium quality development, scalable architecture, and eye-catching designs that stand out in the digital world.
//             </p>
//           </div>

//           {/* Achievement badges */}
//           <div className="flex flex-wrap gap-3 mt-6">
//             {['Modern Stack', 'Fast Delivery', '24/7 Support'].map((badge, index) => (
//               <span 
//                 key={index}
//                 className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm text-gray-300 backdrop-blur-sm"
//                 style={{ animation: `fadeIn 0.5s ease-out ${0.5 + index * 0.1}s both` }}
//               >
//                 {badge}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* STATS BOXES */}
//       <div 
//         className={`relative z-10 max-w-7xl mx-auto grid gap-6 sm:grid-cols-3 mb-20 transition-all duration-1000 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//         }`}
//         style={{ transitionDelay: '0.3s' }}
//       >
//         {stats.map((stat, index) => {
//           const IconComponent = stat.icon;
//           return (
//             <div
//               key={index}
//               className="group relative h-40 flex flex-col justify-center items-center px-6 py-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
//             >
//               {/* Background gradient on hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
//               {/* Icon */}
//               <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                 <IconComponent className="w-12 h-12 text-blue-400" />
//               </div>
              
//               <h3 className="relative text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
//                 {stat.number}
//               </h3>
//               <p className="relative text-gray-300 text-sm text-center font-medium">
//                 {stat.label}
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       {/* WHY CHOOSE US */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div 
//           className={`text-center mb-12 transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//           }`}
//           style={{ transitionDelay: '0.4s' }}
//         >
//           <h2 className="text-5xl md:text-6xl font-bold mb-4">
//             Why Choose{" "}
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
//                   style={{ animation: 'shimmer 3s ease-in-out infinite' }}>
//               Us?
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             We combine innovation, expertise, and dedication to deliver exceptional results
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {features.map((card, index) => {
//             const IconComponent = card.icon;
//             return (
//               <div
//                 key={index}
//                 onMouseEnter={() => setActiveCard(index)}
//                 onMouseLeave={() => setActiveCard(null)}
//                 className={`group relative h-64 flex flex-col justify-center items-center px-6 py-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 shadow-xl transition-all duration-500 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl overflow-hidden cursor-default ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
//                 }`}
//                 style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
//               >
//                 {/* Animated background gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                
//                 {/* Glow effect */}
//                 <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
//                 {/* Icon with animation */}
//                 <div className={`relative mb-4 p-4 rounded-2xl bg-gradient-to-br ${card.gradient} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
//                   <IconComponent className="w-8 h-8 text-white" />
//                 </div>
                
//                 <h3 className={`relative text-xl font-bold mb-3 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent text-center transition-transform duration-300 group-hover:scale-105`}>
//                   {card.title}
//                 </h3>
                
//                 <p className="relative text-gray-400 text-sm text-center leading-relaxed">
//                   {card.desc}
//                 </p>

//                 {/* Decorative corner element */}
//                 <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes shimmer {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Instagram, Linkedin, Twitter, MessageCircle, Send, Phone, Sparkles, Zap, Shield, TrendingUp, Code, Palette, Headphones, Rocket, Users, Award, ArrowRight, Check } from 'lucide-react';

export default function AboutPage() {
  const fullText = "CodeWinx IT Solutions";
  const [typedText, setTypedText] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  useEffect(() => {
    // Typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 90);

    // Mouse move effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll observer
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === heroRef.current && entry.isIntersecting) {
          setHeroVisible(true);
        }
        if (entry.target === statsRef.current && entry.isIntersecting) {
          setStatsVisible(true);
        }
        if (entry.target === featuresRef.current && entry.isIntersecting) {
          setFeaturesVisible(true);
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      clearInterval(typingInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const socialLinks = [
    { Icon: Instagram, gradient: 'from-pink-500 via-purple-500 to-orange-500', href: '#', label: 'Instagram' },
    { Icon: Linkedin, gradient: 'from-blue-600 to-blue-400', href: '#', label: 'LinkedIn' },
    { Icon: MessageCircle, gradient: 'from-green-500 to-green-400', href: '#', label: 'WhatsApp' },
    { Icon: Send, gradient: 'from-blue-400 to-blue-300', href: '#', label: 'Telegram' },
    { Icon: Twitter, gradient: 'from-sky-500 to-blue-400', href: '#', label: 'Twitter' }
  ];

  const stats = [
    { number: "3+", label: "Years of Experience", icon: TrendingUp, gradient: "from-blue-500 to-cyan-500" },
    { number: "12+", label: "Projects Delivered", icon: Zap, gradient: "from-purple-500 to-pink-500" },
    { number: "98%", label: "Client Satisfaction", icon: Sparkles, gradient: "from-orange-500 to-red-500" },
  ];

  const features = [
    {
      title: "Creative Design",
      desc: "Premium UI/UX with neon gradients and clean modern layouts that captivate and engage users.",
      icon: Palette,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "High Performance",
      desc: "Next.js optimized websites delivering lightning-fast speed and top-tier SEO rankings.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Premium Support",
      desc: "Long-term support, maintenance and continuous improvements ensuring your success.",
      icon: Headphones,
      gradient: "from-purple-500 to-pink-500"
    },
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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '2s' }} />

      {/* Content Container */}
      <div className="relative z-10 px-6 py-24">
        {/* HERO SECTION */}
        <div ref={heroRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* LEFT - IMAGE & SOCIALS - Slides from LEFT */}
          <div 
            className={`flex flex-col items-center transition-all duration-1000 ease-out ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'
            }`}
            style={{
              transform: heroVisible 
                ? `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` 
                : 'translateX(-128px)',
              transition: 'all 1s ease-out'
            }}
          >
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse" 
                   style={{ animationDuration: '3s' }} />
              
              {/* Image container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl" />
                <img
                  src="https://selectedfirms.co/public/assets/images/blog_cover_image/659825942_1706523199.webp"
                  alt="CodeWinx Team"
                  className="relative w-full max-w-md rounded-2xl shadow-2xl transform transition duration-500 group-hover:scale-105"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-white" />
                    <span className="text-white font-bold">Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-12">
              {socialLinks.map(({ Icon, gradient, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg cursor-pointer`}
                  style={{
                    animation: heroVisible ? `float 3s ease-in-out infinite` : 'none',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <Icon className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+919999999999"
              className="group mt-8 flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <Phone className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-white font-semibold">Let's Talk</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* RIGHT - CONTENT - Slides from RIGHT */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">About Our Company</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6">
              <span className="block text-2xl md:text-3xl text-gray-400 font-medium mb-2">
                Welcome to
              </span>
              <span className="block text-4xl md:text-6xl font-extrabold mb-3">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                      style={{ animation: 'shimmer 3s ease-in-out infinite' }}>
                  {typedText}
                </span>
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-5">
              <p className="text-lg text-gray-300 leading-relaxed">
                We craft <span className="text-blue-400 font-semibold">digital experiences</span> that blend creativity with cutting-edge technology. We build high-performance websites and digital solutions using modern tech stack.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                We believe every brand deserves <span className="text-purple-400 font-semibold">premium quality development</span>, scalable architecture, and eye-catching designs that stand out in the digital world.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-4 py-2 rounded-full bg-white/5 border border-white/10 ${tech.color} text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10`}
                    style={{ 
                      animation: heroVisible ? `fadeIn 0.5s ease-out ${0.6 + index * 0.1}s both` : 'none'
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div 
                      key={index}
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105"
                      style={{ 
                        animation: heroVisible ? `fadeIn 0.5s ease-out ${0.9 + index * 0.1}s both` : 'none'
                      }}
                    >
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

        {/* STATS SECTION - Alternating animations */}
        <div ref={statsRef} className="max-w-7xl mx-auto mb-32">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ease-out ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-gray-400 mt-2">Numbers that speak for themselves</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const isLeft = index === 0;
              const isCenter = index === 1;
              const isRight = index === 2;
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-1000 ease-out ${
                    statsVisible 
                      ? 'opacity-100 translate-x-0 translate-y-0' 
                      : `opacity-0 ${isLeft ? '-translate-x-32' : isRight ? 'translate-x-32' : 'translate-y-20'}`
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  {/* Card */}
                  <div className="relative h-48 flex flex-col justify-center items-center px-6 py-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 shadow-xl transition-all duration-500 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Icon background */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <IconComponent className="w-16 h-16 text-blue-400" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="relative text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </h3>
                    <p className="relative text-gray-300 font-medium text-center">
                      {stat.label}
                    </p>

                    {/* Check mark on hover */}
                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div ref={featuresRef} className="max-w-7xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm mb-4">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Why Partner With Us</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
                    style={{ animation: 'shimmer 3s ease-in-out infinite' }}>
                CodeWinx?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {features.map((card, index) => {
              const IconComponent = card.icon;
              const isLeft = index === 0;
              const isRight = index === 2;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`group relative overflow-hidden cursor-default transition-all duration-1000 ease-out ${
                    featuresVisible 
                      ? 'opacity-100 translate-x-0 translate-y-0' 
                      : `opacity-0 ${isLeft ? '-translate-x-32' : isRight ? 'translate-x-32' : 'translate-y-20'}`
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                >
                  {/* Card */}
                  <div className="relative h-72 flex flex-col justify-center items-center px-8 py-10 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 shadow-xl transition-all duration-500 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl">
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className={`relative mb-6 p-5 rounded-2xl bg-gradient-to-br ${card.gradient} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className={`relative text-2xl font-bold mb-4 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent text-center transition-transform duration-300 group-hover:scale-105`}>
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="relative text-gray-400 text-center leading-relaxed">
                      {card.desc}
                    </p>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%, 100% { 
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
          50% { 
            background-position: 100% 50%;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}