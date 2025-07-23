"use client"
import React from 'react'

function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", 
    "FastApi", "MongoDB", "AWS", "Docker", "Git", "Tailwind CSS"
  ]

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Subtle grid pattern background - matching hero */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-neutral-900/50 to-neutral-900/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies.
            I love building scalable applications and solving complex problems through code.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-full shadow-2xl ">
              <img
                src="/manav.jpeg"
                alt="Profile"
                className="w-full h-auto rounded-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-white/20 rounded-2xl"></div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-10 blur-2xl"></div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                My Journey
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Software Engineer with 2+ years of experience, specializing in modern frontend and scalable 
                  development. Successfully transitioned from a non-CS background through self-driven learning and 
                  real-world project experience.
                </p>
                <p>
                  Proficient in building responsive UIs and scalable web apps using 
                  JavaScript, Python, FastApi, Next.js, React, and modern frameworks. Known for quickly adapting to 
                  new technologies. Eager to contribute to impactful products and deepen full-stack development skills.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-200">
                Technologies I work with:
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="group relative px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 rounded-xl text-sm font-medium 
                             border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer
                             hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:to-purple-600/10 rounded-xl transition-all duration-300"></div>
                    <span className="relative z-10">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
            
            {/* Call to action */}
            <div className="pt-8">
              <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl 
                               hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                <span className="relative  z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/10 rounded-xl transition-all duration-300"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom section with stats or highlights */}
        <div className="mt-24 pt-16 border-t border-gray-700/50">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">12+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
              <div className="text-gray-400">Learning Journey</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About