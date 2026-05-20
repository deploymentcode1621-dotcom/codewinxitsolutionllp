
'use client'
import Navbar from '../components/Navbar'
import Hero3D from '../components/Hero3D'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero" id="home">
        <div className="container">
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={180}
            height={180}
            style={{borderRadius:'50%', marginBottom:'20px'}}
          />

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
          >
            CODEWINX IT SOLUTIONS
          </motion.h1>

          <p>
            We Build Modern 3D Websites, Business Solutions & Digital Experiences
          </p>

          <a href="#services" className="btn">Explore Services</a>

          <Hero3D />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <br />
          <div className="grid">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                Deliver high-quality digital solutions with creativity and innovation.
              </p>
            </div>

            <div className="card">
              <h3>Why Choose Us</h3>
              <p>
                Professional development, modern UI/UX, fast delivery and scalable systems.
              </p>
            </div>

            <div className="card">
              <h3>Achievements</h3>
              <p>
                Trusted by startups and businesses for digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <h2>Our Services</h2>
          <br />

          <div className="grid">
            {[
              "Website Development",
              "Digital Presence Setup",
              "Mobile Friendly Websites",
              "WhatsApp & SMS Integration",
              "Billing & Management Software",
              "Appointment & Booking System",
              "Hospital Management",
              "School Management"
            ].map((item,index)=>(
              <div className="card" key={index}>
                <h3>{item}</h3>
                <p>
                  Professional and scalable solutions for your business growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          <br />

          <div className="grid">
            <div className="card">
              <h3>Business Website</h3>
              <p>Modern responsive business website with animations.</p>
            </div>

            <div className="card">
              <h3>E-Commerce Store</h3>
              <p>Online store with payment integration and dashboard.</p>
            </div>

            <div className="card">
              <h3>Hospital System</h3>
              <p>Advanced hospital management platform.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <br />

          <div className="grid">
            <div className="card">
              <h3>How long does a project take?</h3>
              <p>Usually between 1-4 weeks depending on complexity.</p>
            </div>

            <div className="card">
              <h3>Do you provide support?</h3>
              <p>Yes, we provide technical support and maintenance.</p>
            </div>

            <div className="card">
              <h3>Is the website mobile friendly?</h3>
              <p>Yes, all websites are fully responsive and optimized.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <br />

          <div className="card">
            <p>Email: codewinxitsolutions@gmail.com</p>
            <p>Phone: +91 0000000000</p>
            <p>WhatsApp Support Available</p>

            <a className="btn" href="https://wa.me/910000000000">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="footer">
        © 2025 CODEWINX IT SOLUTIONS. All Rights Reserved.
      </div>
    </>
  )
}
