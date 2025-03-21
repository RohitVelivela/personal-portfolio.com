import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-cyan mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              I'm a Performance Analyst passionate about optimizing energy systems and uncovering insights through data-driven analysis. My favorite work lives at the crossroads of operations and engineering where real time system monitoring meets strategic decision-making to boost efficiency, reduce downtime, and maximize energy output.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Currently, I'm part of the team at NovaSource Power Services, where I specialize in solar farm performance analysis and operational efficiency. I work hands on with SCADA systems, CMMS tools, and data visualization platforms to ensure our solar assets perform at their peak.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed">
              Over the years, I've contributed to energy projects in dynamic environments—from analyzing sensor health across power plants to coordinating preventive maintenance across fleets. I thrive on bringing structure to complex systems and take pride in developing innovative analysis techniques that support both operational teams and client stakeholders.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether it's identifying performance trends, troubleshooting inverter faults, or leading client-facing reporting meetings, I'm deeply invested in ensuring high-quality outcomes and sustainable energy generation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outside of work, you'll often find me exploring new tech tools, upskilling through data platforms, or spending time in nature recharging for the next challenge.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan mb-2">100+</div>
            <div className="text-gray-600">Projects Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan mb-2">50+</div>
            <div className="text-gray-600">Solar Farms Optimized</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 