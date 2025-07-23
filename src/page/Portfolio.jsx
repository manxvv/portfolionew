"use client"

import Head from 'next/head'
import { useState, useEffect } from 'react'
import { NavbarDemo } from './NavbarDemo'
import { SpotlightPreview } from './SpotlightPreview'
import About from './About'
import { HeroParallaxDemo } from './HeroParallexDemo'
import Contact from './Contact'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, Stripe integration, and modern UI components.",
      technologies: ["Next.js", "React", "Stripe", "Tailwind CSS", "MongoDB"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Express"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      technologies: ["Next.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop"
    }
  ]


  return (
    <>
    <NavbarDemo/>
      <section id="home" className=" flex items-center justify-center ">
<SpotlightPreview/>
</section>
   

    

      {/* About Section */}
      <section id="about" className="">
       <About/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
      
        <HeroParallaxDemo/>
      </section>

      {/* Contact Section */}
      <section id="contact" className="">
      <Contact/>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Manav Guleria. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
} 