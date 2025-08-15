import { useEffect, useState } from "react";
import { useStore } from "../../store";
import { motion } from "motion/react";
import { Sun, Moon, CloudDownload,} from "lucide-react";

export default function CvAndThemeTogWrapper(){
 const {theme, setTheme, isNavbar} = useStore();
  const [isDark, setIsDark] = useState(false);
  //initially and by default, isDarkis false and theme is light

  /* when the page reloades, we are using the theme value in our zustand store from localstorage to set the isDark state and to add the dark class to the root(<html>) element
if the theme in the local storage is dark, we are adding the dark class to the root element and setting the isDark to true */

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  /* here, we are setting our theme value to local storage each time we update our setTheme with a newTheme */
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

    /* this is where all the magic happens. when the user clicks the toggle theme button */
  const toggleTheme = () => {
    /* we first start by setting our newTheme to be dark if isDark is false and light if isDark is true. This is because we are changing to another theme and if the theme is currently
    dark i.e isDark is true, we want our next theme to be the opposite when we click the button, we want newTheme to be light if currently isDark is true and viceversa */
    const newTheme = isDark ? "light" : "dark";

    /* then we toggle the dark class in our root element, if it was there before, we remove it and if it wasn't we add it */
    document.documentElement.classList.toggle("dark");

    /* we then update out theme with setTheme using our newTheme */
    setTheme(newTheme);

    /* finally, we set isDark to the opposite of its previous value so that it matches the current value of theme */
    setIsDark(!isDark);
  };

  /* for example: if our current isDark value is false neaning theme is light, when we click on toggleTheme, we are saying;
     first, let newTheme be dark
     then add dark class to root element
     then using setTheme update the theme value with the newTheme which is dark
     then set isDark to the opposite of its previous value which is true meaning that the theme is now dark

  
  */


return (
    <>
{/* CV button and theme toggler wrapper */}

{isNavbar &&  <motion.div 
        initial={{
          opacity: 0,
          x: 30
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
             type: "spring",
          stiffness: 100,
          
          }
        }}
        id="cv and themetog wrapper" className="absolute right-1">
          <div className="relative flex h-9">
            {/* Portfolio Button */}
            {/*  <button className="flex rounded-md bg-black px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-800">
              Download CV <CloudDownload size={17} className="ml-2" />
            </button>  */}

            {/* theme toggler */}
            <button
              onClick={toggleTheme}
              className="relative ml-1 flex w-20 scale-90 items-center justify-between overflow-hidden rounded-xl border-2 dark:border-[#1e2530] border-slate-100 transition-colors"
            >
              <motion.div
                initial={{
                  width: "60%",
                }}
                animate={{
                  width: isDark ? "40%" : "60%",

                  transition: {
                    duration: 0.4,
                    ease: "backInOut",
                  },
                }}
                className="flex h-full items-center justify-center bg-slate-100 px-1 dark:bg-transparent"
              >
                <Sun
                  size={20}
                  className={`text-blue-600 transition-opacity dark:text-white`}
                />
              </motion.div>

              <motion.div
                initial={{
                  width: "40%",
                }}
                animate={{
                  width: isDark ? "60%" : "40%",
                  transition: {
                    duration: 0.4,
                    ease: "backInOut",
                  },
                }}
                className="flex h-full items-center justify-center bg-transparent px-1 dark:bg-[#1e2530]"
              >
                <Moon
                  size={20}
                  className={`transition-opacity dark:text-blue-600`}
                />
              </motion.div>
            </button>
          </div>
        </motion.div>}
        </>
)
};

