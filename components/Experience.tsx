import { motion } from 'framer-motion'
import { useState } from 'react'

const Experience = () => {
  const [activeJob, setActiveJob] = useState(0)

  const jobs = [
    {
      title: "Performance Analyst",
      company: "NovaSource Power Services",
      location: "Sydney, Australia",
      period: "March 2024 – Present",
      responsibilities: [
        "Monitor and analyze performance data of multiple solar farms using SCADA systems, Power BI, and Excel to identify trends, anomalies, and performance bottlenecks.",
        "Conduct fault analysis and log inverter downtime events, optimizing maintenance schedules to improve plant efficiency and reduce operational costs.",
        "Lead client-facing responsibilities by generating comprehensive monthly performance reports, addressing technical queries, and ensuring stakeholder satisfaction.",
        "Innovate and implement new data analysis methodologies to enhance energy output and equipment health monitoring across the PV plant fleet."
      ]
    },
    {
      title: "Operations Analyst",
      company: "NovaSource Power Services",
      location: "Sydney, Australia",
      period: "January 2022 – February 2024",
      responsibilities: [
        "Conducted real-time monitoring of solar plant operations through SCADA platforms (e.g., GPM Horizon, Ignition) to ensure optimal system performance and fast issue resolution.",
        "Coordinated with field maintenance teams and third-party monitoring providers to address system degradation, sensor health issues, and data recovery tasks.",
        "Supported performance modeling and assessments of operational power plants, including evaluation of soiling losses, degradation, and DC health.",
        "Played a key role in outage planning, contributing to system security and reliability through data-driven operational recommendations."
      ]
    },
    {
      title: "Service Team Manager",
      company: "Peregrine Corporation",
      location: "Adelaide, Australia",
      period: "September 2019 – November 2019",
      responsibilities: [
        "Managed service team activities, ensuring operational targets and customer satisfaction metrics were met efficiently.",
        "Coordinated team schedules, handled escalations, and supported process improvements to streamline service delivery."
      ]
    },
    {
      title: "Sales Floor Team Member",
      company: "Your Energy Saving Solutions",
      location: "Adelaide, Australia",
      period: "August 2018 – May 2019",
      responsibilities: [
        "Promoted energy-efficient solutions to customers, achieving sales targets while educating clients on cost-saving and sustainability benefits.",
        "Developed strong interpersonal and customer service skills, contributing to a positive customer experience."
      ]
    },
    {
      title: "Graduate Services Assistant",
      company: "Mars Telecom",
      location: "Hyderabad, India",
      period: "April 2018 – June 2018",
      responsibilities: [
        "Gained practical experience in hardware design and embedded systems, working with Verilog and System Verilog in FPGA simulation.",
        "Supported router configuration projects, optimizing network traffic flow and protocol management.",
        "Performed hardware and software configuration for networking components, contributing to risk management and performance testing."
      ]
    }
  ]

  return (
    <section className="relative py-20 bg-navy" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-cal text-4xl bg-gradient-to-r from-neon via-cyan to-neon bg-clip-text text-transparent font-bold mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon to-cyan mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Job Navigation */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24 space-y-1">
              {jobs.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setActiveJob(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeJob === index
                      ? 'bg-neon/10 text-neon font-semibold border border-neon/20'
                      : 'hover:bg-navy-light text-slate hover:text-slate-light'
                  }`}
                >
                  <span className="block text-sm font-space">{job.company}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job Details */}
          <motion.div 
            className="lg:col-span-9"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              key={activeJob}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-navy-light/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neon/10 hover:border-neon/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="font-cal text-2xl font-bold bg-gradient-to-r from-neon to-cyan bg-clip-text text-transparent mb-1">
                    {jobs[activeJob].title}
                  </h3>
                  <p className="font-space text-neon font-medium mb-1">
                    {jobs[activeJob].company}
                  </p>
                  <p className="font-space text-slate-light text-sm">
                    {jobs[activeJob].location}
                  </p>
                </div>
                <p className="font-space text-slate text-sm mt-2 md:mt-0">
                  {jobs[activeJob].period}
                </p>
              </div>

              <ul className="space-y-4 mt-6">
                {jobs[activeJob].responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-neon to-cyan mt-2 mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-slate-light font-space group-hover:text-neon-light transition-colors duration-300">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Experience Indicator */}
              <div className="mt-8 pt-6 border-t border-navy">
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="h-2 bg-navy/50 rounded-full">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon to-cyan rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${100 - (activeJob * 20)}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-slate font-space">
                    {5 - activeJob} of 5
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
