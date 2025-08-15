import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="flex scroll-mt-24 min-h-screen w-full items-center justify-center rounded-xl bg-blue-950 dark:bg-[#212c4c] px-5 lg:px-12 py-16">
      <div className="flex w-full  max-w-6xl flex-col items-center gap-12 md:flex-row">
        {/* Left - Image */}
        <motion.div 
        initial={{ opacity: 0, x: -30 }}
        transition={{ type: "spring", stiffness: 200, damping: 10}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3,}}
        className=" flex h-80 w-72 border-4 border-gray-950 rounded-2xl sm:h-96 sm:w-80 flex-shrink-0 items-center justify-center  shadow-black shadow-2xl md:h-96 2md:w-[330px] md:w-80 lg:w-96 2md:h-[425px] ">
          <img
            src="/profile.jpg"
            alt="Profile Picture"
            className="h-full w-full rounded-xl filter grayscale transition hover:grayscale-0 duration-400 object-cover"/*  */
          />
        </motion.div>
        {/* Right - Content */}
        <motion.div 
         initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10}}
        viewport={{ once: true, amount: 0.3,}}
        className="flex-1  text-left text-white">
          <h2 className="mb-4 items-center gap-3 text-4xl font-semibold ">
            How I Help
            <span className="ml-2 mt-2 block h-1 w-16 rounded-full bg-blue-800"></span>
          </h2>
          <div className="sm:text-sm lg:text-base">
         <p className="text-gray-300 leading-relaxed mb-4">
          "In today’s world of tech, a website is your digital handshake — it’s often the first impression people get of your business
           and how you build trust and credibility with the people interested in  what you offer." 
           A strong website makes you easy to find and easy to work with. It speaks clearly, looks sharp, loads fast, and 
           welcomes visitors 24/7. 
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            But too many websites prioritise looks over performance. They may seem polished, 
            but they load slowly, confuse users, and fail to leave a lasting impression.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            That’s where I come in.<br/>
            I build websites{/*  and web apps */} that are not just visually appealing but are fast, functional, and designed to
            convert. Because good design isn’t just about looks — it’s about results.
          </p>
          </div>
          <motion.a 
           initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay:  0.5}}
        viewport={{ once: true, amount: 0.5,}}
          href="#portfolio"
          className="mt-6 ml-6">
            <button className="rounded-lg border-2 flex gap-1 border-blue-800 bg-blue-800 px-7 py-3 font-semibold text-white shadow-md transition-colors duration-200 dark:hover:bg-transparent hover:bg-transparent">
                 <span>View My Works</span> <ArrowRightIcon/>
            </button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
