import { ExternalLink, ArrowRightIcon, Info} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { projects } from "../../public/data";
import { motion } from "framer-motion";


export default function PortfolioSection() {
const navigate = useNavigate();
const firstThree = projects.slice(0, 3);
 
  const [hoveredIdx, setHoveredIdx] = useState(null);

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
    <section id="portfolio" className="w-full scroll-mt-20 py-20 px-4 bg-[#e3e7ee] dark:bg-[#23243a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-2">
          My Portfolio
        </h2>
        <div className="h-1 w-16 mx-auto rounded-full bg-blue-700 dark:bg-blue-800 mb-10"></div>
        <motion.div 
           variants={containerVariants}
      initial="hidden"
      whileInView="visible" // triggers when scrolled into view
      viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 gap-8 2md:gap-5 lg:gap-8">
          {firstThree.map((project, idx) => (
            <motion.div
            variants={childVariants}
               whileHover={{ y: -30 }}
          transition={{ type: "spring", stiffness: 200, damping: 10}}
              key={idx}
               onClick={()=>navigate(`/preview/${project.id}`)}
              /* the group utility class in tailwind is a powerful way to style child components basec on what happens to the parent - if the 
              parent is focused or hovered upon, the child should do something.the parent has the group class while the children have 
              classes like group-hover, group-focus etc */
              className=" rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-[#212c4c] transition hover:shadow-2xl"
            >
              <div 
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative h-56 w-[96%] m-2 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {project.category}
                </span>
                {/* This is the info icon that appears when the user hovers over the project image */}
                    <span className="absolute z-10 inset-0 bg-blue-950 bg-opacity-0 hover:bg-opacity-25 transition duration-150 flex items-center justify-center">
                      <Info size={46} className={`${hoveredIdx === idx ? "scale-105" : 'scale-0'} transition-all duration-150 delay-150 text-white p-2 rounded-full bg-blue-900`} />
                    </span>
                  
              </div>
              <div className="p-5 flex justify-between gap-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <span className="text-sm mr-3 hover:scale-110 transition text-blue-600 dark:text-blue-500">
                   <ExternalLink/>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay:  0.5}}
        viewport={{ once: true, amount: 0.5,}}
        onClick={()=>navigate("/portfolio")}
        className="mt-10 text-right md:text-center cursor-pointer">
          <div
            className="inline-flex px-6 py-3 gap-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-colors duration-200 dark:hover:bg-blue-600"
          >
            <span>View All Projects</span> <ArrowRightIcon/>
          </div>
          </motion.div>
      </div>
    </section>
  );
};

