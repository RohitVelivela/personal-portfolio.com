import { useState } from 'react'
import { motion } from 'framer-motion'
import SkillsEffect from './SkillsEffect'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = {
    "Data Analytics & SCADA": [
      { name: "SCADA Systems", level: 90 },
      { name: "PLC Programming", level: 85 },
      { name: "Industrial Networks", level: 80 },
      { name: "Data Visualization", level: 85 }
    ],
    "Control Systems": [
      { name: "Process Control", level: 88 },
      { name: "HMI Design", level: 85 },
      { name: "DCS Integration", level: 82 },
      { name: "Safety Systems", level: 90 }
    ],
    "Industrial IoT": [
      { name: "Sensor Integration", level: 85 },
      { name: "Real-time Monitoring", level: 80 },
      { name: "Edge Computing", level: 75 },
      { name: "Data Analytics", level: 78 }
    ]
  };

  return (
    <section id="skills" className="relative py-20">
      <SkillsEffect />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Specialized in industrial automation, SCADA systems, and data analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="relative"
            >
              <h3 className="text-xl font-semibold text-secondary mb-6 pb-2 border-b border-accent/20">
                {category}
              </h3>
              <div className="space-y-6">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-text-light group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-text-light/80">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background-light/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          hoveredSkill === skill.name
                            ? 'bg-gradient-to-r from-accent via-secondary to-accent animate-gradient bg-300%'
                            : 'bg-gradient-to-r from-accent to-secondary'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
