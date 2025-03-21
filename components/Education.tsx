import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiBookOpen, FiAward } from 'react-icons/fi'
import { useState } from 'react'

const Education = () => {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null)
  const [expandedEdu, setExpandedEdu] = useState<number | null>(null)

  const education = [
    {
      degree: "Master of Engineering",
      field: "Electronics",
      institution: "University of Adelaide",
      location: "Adelaide",
      date: "December 2021",
      logo: "/images/adelaide-university-logo.png",
      courses: [
        "Telecommunications & Microelectronic System",
        "Principles of Signal",
        "Embedded Systems",
        "Control Systems"
      ]
    },
    {
      degree: "Bachelor of Technology",
      field: "Electronics & Communications Engineering",
      institution: "Stanley College of Engineering & Technology",
      location: "Hyderabad",
      date: "December 2019",
      logo: "/images/stanley-college-logo.png",
      courses: [
        "Electronic Circuits",
        "Digital Signal Processing",
        "Radio Communication",
        "Wireless Networks"
      ]
    }
  ]
  
  const certifications = [
    {
      name: "Certificate of Service by Street Cause",
      organization: "Street Cause",
      description: "A rendering eservices student run NGO, for voluntarily and working as Best Coordinator."
    }
  ]
  
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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl font-bold text-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Education & Certifications
          </motion.h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Academic background and professional certifications in electronics, engineering, and technical fields
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-b border-accent/20 pb-6 group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setExpandedEdu(expandedEdu === index ? null : index)}
            >
              <div className="p-6 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                    <motion.div 
                      className="w-16 h-16 rounded-full flex items-center justify-center bg-background-light/10 group-hover:bg-accent/10 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <FiBookOpen className="w-8 h-8 text-accent" />
                    </motion.div>
                  </div>
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-text"
                      whileHover={{ x: 5 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.h4 
                      className="text-lg font-medium text-secondary mb-1"
                      animate={{ color: expandedEdu === index ? "var(--color-accent)" : "var(--color-secondary)" }}
                    >
                      {edu.field}
                    </motion.h4>
                    <p className="text-text-light">
                      {edu.institution}, {edu.location}
                    </p>
                    <p className="text-text-light/80 text-sm">
                      Completed: {edu.date}
                    </p>
                  </div>
                </div>
                
                <AnimatePresence>
                  <motion.div 
                    className="border-t border-accent/20 pt-6"
                    initial={false}
                    animate={{ 
                      height: expandedEdu === index ? "auto" : "100%",
                      opacity: expandedEdu === index ? 1 : 0.7
                    }}
                  >
                    <h5 className="font-medium text-text mb-3">
                      Key Courses
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.courses.map((course, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-center text-text-light group/course"
                          onMouseEnter={() => setHoveredCourse(course)}
                          onMouseLeave={() => setHoveredCourse(null)}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span 
                            className="w-2 h-2 bg-accent rounded-full mr-2"
                            animate={{
                              scale: hoveredCourse === course ? 1.5 : 1
                            }}
                          />
                          <span className="group-hover/course:text-accent transition-colors">
                            {course}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16">
          <motion.h3 
            className="text-xl font-semibold text-text mb-8 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Certifications & Extracurricular Activities
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-b border-accent/20 p-6 mb-6 flex items-start group hover:bg-accent/5 rounded-lg transition-colors"
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="mr-4 mt-1"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <FiAward className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <motion.h4 
                    className="text-lg font-medium text-text mb-1"
                    whileHover={{ x: 5 }}
                  >
                    {cert.name}
                  </motion.h4>
                  <p className="text-text-light text-sm mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-text-light">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-semibold text-text mb-4">
            Languages
          </h3>
          <motion.div 
            className="inline-block border border-accent/20 rounded-lg px-6 py-3 hover:bg-accent/5 transition-colors"
            whileHover={{ y: -5 }}
          >
            <p className="text-text-light">
              <span className="font-medium text-text">English</span> - Professional Proficiency
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
