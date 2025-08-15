import { AlignCenter, X } from "lucide-react";
import { useStore } from "../../store";
import { motion } from "motion/react";

export default function NavTog(){
 const {  setIsNavbar, isNavbar} = useStore();
 const delays = [0, 0.5, 1];

return (
    /* nav toggler */
 <motion.button
         initial={{
        x: 0
      }}
      animate={{
        x: isNavbar ? 30 : 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        }
      }}
          onClick={() => {
            setIsNavbar(!isNavbar);
          }}
          className={`absolute flex justify-center md:hidden items-center  ${isNavbar ? "left-5" : "right-5" } `}
        >
           { !isNavbar && <svg viewBox="0 0 200 200" width="55" height="55"
            >
        {delays.map((delay, index) => (
          <motion.circle
            key={index}
            cx="100"
            cy="100"
            r="107"
            stroke="#2563eb"
            strokeWidth="6"
            initial={{ scale: 0.55, opacity: 1, fill: "#2563eb" }}
            animate={{ scale: 1, opacity: 0, fill: "none" }}
            transition={{
              delay,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeOut"
            }}
           
          />
        ))}
      </svg>}
      <div 
     
      className={`absolute border-2 rounded-full ${ isNavbar ? "bg-transparent border-blue-600" : "bg-[#173a87] border-transparent"} p-1 left-1/2 transform -translate-x-1/2`}>
        {
          isNavbar ? (<X
className="text-[#173a87]"
          size={30} />) : (
            <AlignCenter 
className="text-[#efeded]"
          size={27} />
          )
        }
      </div>
        </motion.button>

)
};

