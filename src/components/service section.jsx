import { Code2Icon, Gauge, HelpingHand } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceSection() {
  const services = [
    {
      title: "Website Creation",
      desc: "I design and develop fast, responsive websites that not only look great but also work seamlessly across all devices.",
      icon: (
       <Code2Icon size={35}/>
      ),
    },
    {
      title: "Performance Optimization",
      desc: "I help optimise your site’s speed, improve SEO visibility, and refresh outdated designs so your website stands out.",
      icon: (
        <Gauge size={35}/>
      ),
    },
    {
      title: "Support & Maintenance",
      desc: "I offer ongoing maintenance, content updates, bug fixes, and technical support to keep your site running smoothly.",
      icon: (
     <HelpingHand size={35}/>
      ),
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between each child
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: {type: "spring", stiffness: 200, damping: 10}},
  };


  return (
    <section 
    id="services" className="flex scroll-mt-16 min-h-[60vh] w-full items-center bg-[#f6f8fa] dark:bg-[#18192b] justify-center px-6 py-20 ">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <h2 className="mb-2 text-4xl font-semibold text-gray-900 dark:text-white">
          What I Do.
        </h2>
        <div className="mb-10 h-1 w-16 rounded-full bg-blue-700 dark:bg-blue-800"></div>
        <motion.div 
          variants={containerVariants}
      initial="hidden"
      whileInView="visible" // triggers when scrolled into view
      viewport={{ once: true, amount: 0.2 }} // animate only once, when 20% visible
        className="grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 gap-8 2md:gap-5 lg:gap-8">
          {/* Map through the services array to display each service */}
          {services.map((service, i) => (
            <motion.div
             variants={childVariants}
               whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400 }}
              key={i}
              className="hover:scale-125 flex flex-col items-center rounded-2xl border border-gray-200 bg-blue-950 p-8 text-center shadow-lg transition-colors duration-200 hover:border-blue-950 dark:border-[#23243a] dark:hover:border-blue-950"
            >
              <div className="mb-4 text-blue-600 dark:text-blue-500">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-white transition-colors">
                {service.title}
              </h3>
              <p className="mb-2 text-white dark:text-gray-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
