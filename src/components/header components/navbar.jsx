import { useEffect, useState } from "react";
import { useStore } from "../../store";
import { motion, AnimatePresence } from "motion/react";

export default function NavBar(){
const { isNavbar, setIsNavbar} = useStore();
const [activeNav, setActiveNav] = useState("#about");

useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsNavbar(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavbar(true);
      } // ✅ Runs every time the screen is resized
    };

    window.addEventListener("resize", handleResize); // ✅ Listens continuously
    return () => window.removeEventListener("resize", handleResize); // ✅ Clean up
  }, []);
     

     const navitems = [
  {path: "#about", page: "About"},
  {path: "#services", page: "Services"},
  {path: "#portfolio", page: "Portfolio"},
  {path: "#contact", page: "Contact"}
]

  const NavVariant = window.innerWidth >= 768  ? 
        {initial: {opacity: 1},
        animate: {opacity: 1 },
        } : {
        initial: {opacity: 0,},
          animate: {opacity: 1, },
          exit: {opacity: 0, },
        }

  const NavItemVariant = {
    initial: {
      opacity: 0,
         y: 10
    },
    animate: {opacity: 1, y:0 },
    exit: {opacity: 0, y: 10},
  };

  const NavItemVariantForProgress = {
     initial: {
      scale: 1},
        hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
      },
    },
  }

  const NavItemProgressVariant = {
    initial: {
      width: "0px",
      height: "3px",
      borderColor: "#2563eb",
      backgroundColor: "#2563eb",
    },
    hover: {
      width: "24px",
      height: "3px",
      borderColor: "#2563eb",
      backgroundColor: "#2563eb",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };
return (
 /* Navigation */

<AnimatePresence>
        {isNavbar && (
          <motion.nav className={`absolute -top-1 flex h-screen w-full flex-col items-center justify-center space-y-4 
          text-2xl md:absolute md:left-1/2 md:top-5 md:h-fit md:w-fit md:-translate-x-1/2 md:transform md:flex-row md:justify-between 
          md:space-x-[11px] md:space-y-0 md:text-sm 2md:space-x-6 2md:text-base xl:space-x-8 ${isNavbar ? 'dark:bg-slate-800 bg-[#efeded]' : 'bg-transparent'}  transition-colors duration-75`}
          key={isNavbar ? "true" : "false"}
variants={NavVariant}
 initial=  "initial"
      animate= "animate"
      exit= "exit"
      transition={{
        duration: 0.2,
         when: "beforeChildren",
        staggerChildren: 0.1
      }}
          >
            {
              navitems.map((child) => {
                return(
<motion.div
            /* motion div that acts as the child to the navbar to make the stagger effect work */
              variants={NavItemVariant}
               transition={{duration: 0.1}}
              key={child.page}
              
            >
              <motion.div
              /* motion div that give the progress bar motion div its variants to make the progress work */
              variants={NavItemVariantForProgress}
              initial="initial"
              whileHover="hover"  
              onClick={() => {
                setActiveNav(child.path);
              }}
              >
              <a
                href={child.path}
                onClick={() => {
                if(window.innerWidth < 768){
                setIsNavbar(!isNavbar);
                }
          }}
                className={`font-medium text-gray-600 dark:text-gray-400 dark:hover:text-gray-100 transition-all hover:text-gray-900 ${activeNav === child.path ? "text-gray-900 dark:text-gray-100 text-[35px] md:text-[17px]" : ""}`}
              >
                {child.page}
              </a>
              <motion.div
                variants={NavItemProgressVariant}
                className={`m-auto -mt-[1px] rounded-md`}
              ></motion.div>
              </motion.div>
            </motion.div>
                )
              })
            }
          </motion.nav>
        )}
        </AnimatePresence>

)
};

