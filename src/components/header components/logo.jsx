import { motion } from "motion/react";
export default function Logo() {
  
  return (
        /* Logo */
        <motion.div 
          initial={{
          opacity: 0,
          x: -30
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
             type: "spring",
          stiffness: 100,
          
          }
        }}
        className="flex items-center">
          <div className="dark:text-[#efeded] pl-6 text-xl sm:text-2xl font-semibold">
            Michael Dunsin<span className="text-blue-800 dark:text-blue-900">.</span>
          </div>
        </motion.div>       
  );
}
