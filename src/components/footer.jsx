import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer({bgColorLight = "bg-blue-950", bgColorDark = "dark:bg-[#212c4c]"}) {
    const navigate = useNavigate();
  return (
    <footer className={` ${bgColorDark} ${bgColorLight} text-gray-300 px-4`}>
      <div className="max-w-6xl mx-auto border-blue-700 dark:border-blue-800 border-t-2 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-white mb-2">More about me</h3>
          <p className="mb-3 text-gray-400">
            To learn more about my experience and skills, click this button.
          </p>
        
           <button 
           onClick={()=>navigate("/about-me")}
           className="rounded-lg border-2 flex gap-2 border-blue-800 bg-blue-800 px-4 py-3 font-semibold text-white shadow-md transition-colors duration-200 dark:hover:bg-transparent hover:bg-transparent">
                            <span>About Me</span> <ArrowRightIcon/>
                       </button>
          
        </div>
        <div className="text-sm text-gray-500 mt-6 md:mt-0">
          &copy; {new Date().getFullYear()} Michael Dunsin. 
        </div>
      </div>
    </footer>
  );
}

