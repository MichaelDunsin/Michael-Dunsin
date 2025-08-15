import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { projects } from "../../public/data";
import { motion } from "motion/react";

export default function ProjectPreview() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const { theme } = useStore();
 const { id } = useParams();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const proj = projects.find(s => s.id === id);
  const shortDesc =
    proj.description.slice(0, 180) +
    (proj.description.length > 180 ? "..." : "");

  return (
    <motion.section 
      initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        animate={{ opacity: 1, y: 0 }}
    className="w-full min-h-screen py-10 px-2 md:px-0 flex items-center justify-center relative">
    
      <div className="relative w-full max-w-6xl py-4 px-2 sm:px-4 md:py-10 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-0">
                     <button
        onClick={() => navigate(-1)}
        className="absolute flex gap-2 -top-5 sm:-top-6 md:left-10 bg-slate-300 dark:bg-slate-800 hover:dark:bg-slate-900 hover:bg-slate-200 dark:text-white px-4 py-3 rounded-full sm:rounded-lg shadow-md transition-colors duration-200"
      >
        <ArrowLeft/> <span className="hidden sm:block">Back</span>
      </button>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-12">
                    {/* Left: Project Image */}
        <motion.div
        initial={{ opacity: 0, x: -30 }}
        transition={{ type: "spring", stiffness: 200, damping: 10,delay: 0.3}}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-[48%] flex flex-col items-center">
          <div className="relative w-full rounded-2xl border-4 dark:border-slate-900 border-slate-100 overflow-hidden">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-72 md:h-96 object-cover object-top rounded-xl dark:bg-[#18192b]"
            />
            <span className="absolute top-3 right-3 bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
              {proj.category}
            </span>
          </div>
        </motion.div>
        {/* Right: Project Info */}
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
        className="w-full md:w-[45%] flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            {proj.title}
          </h1>
          <p className=" text-gray-600 dark:text-gray-300 mb-2">
            {proj.mainFeatures}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {proj.tech.map((t, i) => (
              <span
                key={i}
                className="bg-blue-100 dark:bg-[#18192b] text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 mb-2">
            <a
              href={proj.hostedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200 shadow"
            >
              <ExternalLink />
              View Live Project
            </a>
            <a
              href={proj.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-100 dark:bg-[#18192b] hover:dark:bg-[#171838] text-blue-700 dark:text-blue-100 px-5 py-2 rounded-lg font-semibold transition-colors duration-200 shadow border border-blue-200 dark:border-blue-700"
            >
              <FaGithub size={23} />
              View Source Code
            </a>
          </div>
          <div className="mb-2">
            <p className="text-gray-700 dark:text-gray-300">
              {showMore ? proj.description : shortDesc}
            </p>
            {proj.description.length > 180 && (
              <button
                onClick={() => setShowMore((v) => !v)}
                className="mt-2 text-blue-700 dark:text-blue-600 hover:underline focus:outline-none"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </motion.div>
            </div>
    
      </div>
    </motion.section>
  );
}
