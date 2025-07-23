import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly.');
      return;
    }
    
    setStatus('Sending...');
    toast.loading('Sending your message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      toast.dismiss();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setStatus('');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to send message.');
        setStatus('Failed to send message.');
      }
    } catch (error) {
      toast.dismiss();
      console.error('Error submitting form:', error);
      toast.error('An error occurred. Please try again.');
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden min-h-screen">
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
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-900/50 to-gray-900/80"></div>
      
      {/* Floating accent elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-10 blur-2xl"></div>
      
      <div className="relative max-w-7xl py-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                <a href="mailto:manavguleria19@gmail.com" className="group flex items-center p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white font-medium">manavguleria19@gmail.com</div>
                  </div>
                </a>
                
                <a href="https://github.com/manxvv" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">GitHub</div>
                    <div className="text-white font-medium">github.com/manxvv</div>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/manav-guleria" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer">
                  <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">LinkedIn</div>
                    <div className="text-white font-medium">linkedin.com/in/manav-guleria</div>
                  </div>
                </a>
              </div>
              
              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gradient-to-br from-gray-800/30 to-gray-700/30 rounded-2xl border border-gray-600/20">
                <h4 className="text-xl font-semibold text-white mb-4">Quick Response</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I typically respond to emails within 24 hours. For urgent inquiries, 
                  feel free to connect with me on LinkedIn for faster communication.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-gray-800/40 to-gray-700/40 p-8 rounded-2xl border border-gray-600/20 backdrop-blur-sm">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-xl text-white placeholder-gray-400 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300
                             hover:border-gray-500/70 focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-600/50'}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-xl text-white placeholder-gray-400 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300
                             hover:border-gray-500/70 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-600/50'}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-900/50 border rounded-xl text-white placeholder-gray-400 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300
                             hover:border-gray-500/70 resize-none focus:outline-none ${errors.message ? 'border-red-500' : 'border-gray-600/50'}`}
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'Sending...'}
                  className="group w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl 
                           hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 
                           hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{status === 'Sending...' ? 'Sending...' : 'Send Message'}</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-24 pt-16 border-t border-gray-700/50 text-center">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-4">Ready to Start Something Amazing?</h4>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Let's collaborate and bring your ideas to life. I'm excited to hear about your next project!
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/manxvv" target="_blank" rel="noopener noreferrer" className="group p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 cursor-pointer">
                <Github className="text-blue-400" size={24} />
              </a>
              <a href="https://linkedin.com/in/manav-guleria" target="_blank" rel="noopener noreferrer" className="group p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 cursor-pointer">
                <Linkedin className="text-purple-400" size={24} />
              </a>
              <a href="mailto:manavguleria19@gmail.com" className="group p-3 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-full border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-110 cursor-pointer">
                <Mail className="text-pink-400" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;