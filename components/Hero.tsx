import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiDownload, FiLinkedin, FiMail, FiGithub } from 'react-icons/fi';

const Hero = () => {
  const phrases = [
    "Analyzing Systems",
    "Visualizing Data",
    "Powering Performance"
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary font-medium text-lg mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ramyashree Velivela</h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-light mb-6">
              Senior Performance Analyst | SCADA & Power BI Expert
            </h3>
            <p className="text-secondary text-lg mb-8 max-w-2xl">
              A results-driven Performance Analyst with over two years of hands-on experience 
              optimizing energy systems and managing complex SCADA deployments. Expert at 
              transforming operational data into actionable insights through Power BI, SQL, 
              and real-time analytics. Proven record in fault analysis, audits, and delivering 
              high-impact reports to stakeholders.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#projects" className="btn-primary flex items-center gap-2">
                View My Work
              </Link>
              <a 
                href="/resume.pdf" 
                download 
                className="btn-primary flex items-center gap-2"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-6">
              <a 
                href="https://linkedin.com/in/ramyashree-velivela" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
                <span className="social-tooltip">Connect on LinkedIn</span>
              </a>
              <a 
                href="mailto:velivela.ramyashree@gmail.com" 
                className="social-icon"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
                <span className="social-tooltip">Send an Email</span>
              </a>
              <a 
                href="https://github.com/ramyashree-velivela" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
                <span className="social-tooltip">View GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
