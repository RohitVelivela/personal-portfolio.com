import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'
import MagicMouse from './MagicMouse'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' }
  ]

  const socialLinks = [
    { 
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: FiGithub 
    },
    { 
      name: 'Email',
      href: 'mailto:your.email@example.com',
      icon: FiMail 
    },
    { 
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: FiLinkedin 
    }
  ]

  return (
    <>
      <MagicMouse />
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-navy/90 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-neon to-cyan bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  RS
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8 ml-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="nav-link font-space text-sm relative group text-slate-light hover:text-neon transition-colors duration-300"
                    >
                      <span className="relative z-10">
                        {item.name}
                      </span>
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon transform origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-neon transition-colors duration-300 hover:scale-110 transform"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  title={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate hover:text-neon transition-colors duration-300" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-light hover:text-neon font-space text-sm px-4 py-2 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center justify-center space-x-8 px-4 pt-4 border-t border-slate/20">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-neon transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Navbar
