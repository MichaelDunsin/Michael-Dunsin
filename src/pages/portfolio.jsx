import { useNavigate } from "react-router-dom";
import { projects } from "../../public/data";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRightIcon, ExternalLink, Info } from "lucide-react";
import { useStore } from "../store";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";


export default function Portfolio() {
  const navigate = useNavigate();
  const [hoveredIdx, setHoveredIdx] = useState(null);
   const {theme} = useStore()
     const page = useLocation().pathname;

     
 
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (page === "/portfolio") {
       const html = document.documentElement;
    html.style.scrollBehavior = "auto";
       window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);
  

   const containerVariants = {
    hidden: {opacity: 0, y: 30 },
    visible: {
       opacity: 1, y: 0,
      transition: {
         when: "beforeChildren",
        staggerChildren: 0.3, // delay between each child
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: {type: "spring", stiffness: 200, damping: 10}},
  };



  return (
    <motion.div
       variants={containerVariants}
      initial="hidden"
      animate="visible" // triggers when scrolled into view
    >
     <section className="w-full py-20 px-4 flex flex-col gap-2 min-h-screen relative">
      <div className="max-w-6xl relative mx-auto">
           <button
        onClick={() => navigate(-1)}
        className="absolute flex gap-2 -top-12 sm:top-0 bg-slate-300 dark:bg-slate-800 hover:dark:bg-slate-900 hover:bg-slate-200 dark:text-white px-4 py-3 rounded-full sm:rounded-lg shadow-md transition-colors duration-200"
      >
        <ArrowLeft/> <span className="hidden sm:block">Back</span>
      </button>
        <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-2">
          My Portfolio
        </h2>
        
        <div className="h-1 w-16 mx-auto rounded-full bg-blue-700 dark:bg-blue-800 mb-10"></div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 gap-8 2md:gap-5 lg:gap-8">
          {projects.map((project, idx) => (
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
        </div>
      </div>
{/*       <footer className={`mt-10 dark:text-gray-300 px-4`}>
      <div className="max-w-6xl mx-auto border-blue-700 dark:border-blue-800 border-t-2 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold dark:text-white mb-2">More about me</h3>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
            To learn more about my experience and skills, click this button.
          </p>
        
           <button 
           onClick={()=>navigate("/about-me")}
           className="rounded-lg flex gap-2 px-4 py-3 font-semibold
           shadow-md transition-colors duration-200
            border-2 border-blue-800 bg-blue-800 hover:bg-blue-900 dark:hover:bg-blue-700 text-white hover:text-blue-900
             dark:hover:bg-transparent hover:bg-transparent">


                            <span>About Me</span> <ArrowRightIcon/>
                       </button>
          
        </div>
        <div className="text-sm text-gray-500 mt-6 md:mt-0">
          &copy; {new Date().getFullYear()} Michael Dunsin. 
        </div>
      </div>
    </footer> */}
     
    </section>
    </motion.div>
  );
}

