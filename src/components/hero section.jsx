import { MessageCircleMore } from "lucide-react";

export default function HeroSection(){

return (
      <section id="hero" className="flex p-4 sm:p-12 w-full items-center">
        <div className="flex max-w-5xl px-4 py-4 flex-col items-center 2xl:mx-auto justify-between gap-12">
          {/* hero copy */}
          <div className="text-left">
            {/* my name is */}
            <div className="lg:text-lg flex items-center text-gray-700 dark:text-gray-400 font-medium mb-3">
              <div className=" w-5 sm:w-10 rounded-full h-[2px]  mr-2 md:mr-3 bg-gray-600 dark:bg-gray-400 "></div>
             <div> hello, my name is <span className="text-blue-900 dark:text-blue-800"><a href="#about">Michael</a></span>,</div>
            </div>
            {/* my headline */}
            <h1 className="text-4xl md:text-[45px] 2md:text-[50px] lg:text-[58px] font-semibold text-gray-800 dark:text-white mb-4 md:leading-[50px] 2md:leading-[55px] lg:leading-[60px]">
              I build clean, fast websites{/*  and webapps */} that looks good and gets the job done.
            </h1>
            {/* my sub-headline */}
            <p className=" text-gray-700 dark:text-gray-400 mb-8 max-w-[36rem] font-medium lg:text-lg  leading-relaxed">
              Your website should not only look beautiful — it should work beautifully as well. A blend of clean design and functionality 
              is what builds credibility and earns your audience's trust...
            </p>

            {/* action button */}
            <a 
            href="#contact"
            className="flex gap-2 -mt-4 md:mt-8 cursor-pointer border-2 border-blue-800 bg-blue-800 ml-5 hover:bg-blue-900 dark:hover:bg-blue-700 text-white hover:text-blue-900 py-3 max-w-fit px-5 rounded-md 
            lg:text-lg font-medium shadow-md transition-all duration-200 dark:hover:bg-transparent hover:bg-transparent hover:scale-105 hover:shadow-lg">
              <button 
              >
                let's chat
              </button>
              <MessageCircleMore/>
            </a>
          </div>
        </div>
      </section>
)
};

