import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiExternalLink, FiGithub, FiBarChart2, FiDatabase, FiCpu } from 'react-icons/fi'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'scada', name: 'SCADA & Industrial Automation', icon: <FiBarChart2 className="w-5 h-5" /> },
    { id: 'analytics', name: 'Data Analytics & Power BI', icon: <FiDatabase className="w-5 h-5" /> },
    { id: 'embedded', name: 'Embedded Systems & Verilog', icon: <FiCpu className="w-5 h-5" /> },
  ]
  
  const projects = [
    {
      id: 1,
      title: 'Power Plant Performance Dashboard',
      description: 'Developed comprehensive Power BI dashboard for monitoring key performance indicators of solar power plants, including energy production, efficiency metrics, and maintenance alerts.',
      image: '/images/Power Plant Performance Dashboard.webp',
      category: 'analytics',
      technologies: ['Power BI', 'SQL', 'Excel', 'DAX'],
      demoLink: '#',
      codeLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'SCADA System Implementation for Solar Farm',
      description: 'Designed and implemented SCADA monitoring system for a 50MW solar farm, enabling real-time monitoring of inverters, trackers, and weather stations with custom alarm configurations.',
      image: '/images/SCADA System Implementation for Solar Farm.webp',
      category: 'scada',
      technologies: ['Ignition SCADA', 'SQL Server', 'Python', 'OPC-UA'],
      demoLink: '#',
      codeLink: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Embedded System for Remote Monitoring',
      description: 'Developed an embedded system using Verilog for remote monitoring of field sensors with low-power consumption and reliable data transmission capabilities.',
      image: '/images/Embedded System for Remote Monitoring.jpg',
      category: 'embedded',
      technologies: ['Verilog', 'FPGA', 'Embedded C', 'PCB Design'],
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Predictive Maintenance Model',
      description: 'Created a machine learning model to predict equipment failures based on historical SCADA data, reducing unplanned downtime by 35% and maintenance costs by 25%.',
      image: '/images/Predictive Maintenance Model.jpg',
      category: 'analytics',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Power BI'],
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 5,
      title: 'SCADA HMI Design for Control Room',
      description: 'Designed intuitive HMI interfaces for power plant control room, focusing on operator efficiency and quick access to critical system information.',
      image: '/images/SCADA HMI Design for Control Room.jpg',
      category: 'scada',
      technologies: ['Ignition SCADA', 'SVG', 'JavaScript', 'UX Design'],
      demoLink: '#',
      codeLink: '#',
      featured: false
    },
    {
      id: 6,
      title: 'FPGA-Based Signal Processing System',
      description: 'Implemented digital signal processing algorithms on FPGA for real-time analysis of sensor data in industrial environments.',
      image: '/images/FPGA-Based Signal Processing System.jpg',
      category: 'embedded',
      technologies: ['VHDL', 'Xilinx', 'Signal Processing', 'MATLAB'],
      demoLink: '#',
      codeLink: '#',
      featured: false
    }
  ]
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">
            Projects & Case Studies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of industrial automation, data analytics, and embedded systems
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-secondary text-primary font-medium shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md'
              }`}
            >
              {category.icon && category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full hover:bg-secondary hover:text-white dark:hover:bg-secondary transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
                      >
                        <FiExternalLink className="transform hover:rotate-12 transition-transform duration-300" /> Live Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
                      >
                        <FiGithub className="transform hover:rotate-12 transition-transform duration-300" /> View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">
              Other Projects
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full hover:bg-secondary hover:text-white dark:hover:bg-secondary transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full hover:bg-secondary hover:text-white dark:hover:bg-secondary transition-colors duration-300">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 text-secondary hover:text-primary transition-colors duration-300"
                      >
                        <FiExternalLink className="w-4 h-4 transform hover:rotate-12 transition-transform duration-300" /> Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 text-secondary hover:text-primary transition-colors duration-300"
                      >
                        <FiGithub className="w-4 h-4 transform hover:rotate-12 transition-transform duration-300" /> Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category. Please check back later!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
