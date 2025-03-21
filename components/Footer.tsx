import Link from 'next/link'
import { FiLinkedin, FiMail, FiGithub, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-secondary">R</span>amyashree <span className="text-secondary">V</span>elivela
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Senior Performance Analyst specializing in SCADA systems, Power BI, and industrial analytics
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a 
                href="https://linkedin.com/in/ramyashree-velivela" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:velivela.ramyashree@gmail.com" 
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ramyashree-velivela" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-800 rounded-full text-secondary hover:bg-gray-700 transition-colors"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ramyashree Velivela. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap gap-4">
              <Link href="#about" className="hover:text-secondary transition-colors">
                About
              </Link>
              <Link href="#skills" className="hover:text-secondary transition-colors">
                Skills
              </Link>
              <Link href="#experience" className="hover:text-secondary transition-colors">
                Experience
              </Link>
              <Link href="#education" className="hover:text-secondary transition-colors">
                Education
              </Link>
              <Link href="#projects" className="hover:text-secondary transition-colors">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
