import { CheckCircleIcon, CircleArrowUp, Mail, X } from "lucide-react";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { motion } from "motion/react";


export default function ContactSection() {
  const form = useRef();
  const [emailStatus, setStatus] = useState("Send Message"); // success or error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };   

  const sendEmail = (e) => {
    e.preventDefault();
  setStatus("Sending...");


 emailjs
      .sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, {
        publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
      })
      .then(
        (/* result */) => {
             setStatus("Message Sent");
             setTimeout(() => {
               setStatus("Send Message")
                setFormData({
      name: "",
      email: "",
      message: ""
    });}, 5000)
         /*  console.log('SUCCESS!', result.text); */
        },
        (/* error */) => {
           setTimeout(() => {
             setStatus("Please Try Again")}, 3000)
             
             
         /*  console.log('FAILED...', error.text); */
        },
      );
  };


  return (
    <section id="contact" className="w-full scroll-mt-20 py-20 px-4 bg-blue-950 dark:bg-[#212c4c]">
      <div className="max-w-6xl mx-auto">
      {/*   <h2 className="text-3xl font-bold text-white mb-2 text-left">
          Let's Connect
        </h2>
        <div className="h-1 w-16 rounded-full bg-orange-400 mb-8"></div> */}
         <h2 className="text-4xl font-semibold text-center text-white mb-2">
          Contact Me
        </h2>
        <div className="h-1 w-16 mx-auto rounded-full bg-blue-700 dark:bg-blue-800 mb-10"></div>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <motion.div 
          initial={{ opacity: 0, x: -30 }}
        transition={{ type: "spring", stiffness: 200, damping: 10}}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3,}}
          className="flex-1 flex flex-col gap-6 justify-center text-white">
            {/* email */}
            <div
            className="flex cursor-pointer items-center gap-4 mb-1">
                <div className="bg-[#18192b] p-2 rounded-full">
                    <Mail size={35} />
                </div>
              <a 
               href="mailto:michaeldunsin193@gmail.com?subject=Hello&body=I%20wanted%20to%20ask..."
              className="group">
                <span className="block font-semibold text-lg mb-1">Email</span>
              <span className="block group-hover:underline group-hover:text-blue-600 text-sm sm:text-base text-gray-300">michaeldunsin193@gmail.com</span>
              </a>
            </div>
            {/* linkedin */}
               <div
               className="flex cursor-pointer items-center gap-4 mb-1">
                <div className="bg-[#18192b] p-3 rounded-full">
                    <FaLinkedinIn size={27} />
                </div>
              <a
               onClick={() => window.open("https://www.linkedin.com/in/michael-dunsin-9bbb07337", "_blank")}
               className="group"
              >
                <span className="block font-semibold text-lg mb-1">LinkedIn</span>
              <span className="block group-hover:underline group-hover:text-blue-600 text-sm sm:text-base text-gray-300">Michael Dunsin</span>
              </a>
            </div>
            {/* twitter */}
              <div
              className="flex cursor-pointer items-center gap-4 mb-1">
                <div className="bg-[#18192b] p-3 rounded-full">
                    <FaXTwitter size={26} />
                </div>
              <a
                  onClick={() => window.open("https://x.com/DunsinMichael", "_blank")}
                className="group"
              >
                <span className="block font-semibold text-lg mb-1">X</span>
              <span className="block group-hover:underline group-hover:text-blue-600 text-sm sm:text-base text-gray-300">@DunsinMichael</span>
              </a>
            </div>
             {/* github */}
              <div
              className="flex cursor-pointer items-center gap-4 mb-6">
                <div className="bg-[#18192b] p-3 rounded-full">
                    <FaGithub size={26} />
                </div>
              <a
            onClick={() => window.open("https://github.com/MichaelDunsin", "_blank")}
                className="group"
              >
                <span className="block font-semibold text-lg mb-1">GitHub</span>
              <span className="block group-hover:underline group-hover:text-blue-600 text-sm sm:text-base text-gray-300">MichaelDunsin</span>
              </a>
            </div>
           
          </motion.div>
          {/* Contact Form */}
          <motion.form
              initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10}}
        viewport={{ once: true, amount: 0.3,}}
          /* 
          when implementing email.js for your react app, you need to make sure each input has a name attribute and that name attribute
          should be the name of the variables you want it to represent in your emailjs template.
          */
          ref={form} 
          onSubmit={sendEmail}
          className="flex-1 flex flex-col gap-6 bg-[#18192b] rounded-xl p-4 sm:p-6">
            <input
              type="text"
              id="name"
               value={formData.name}
        onChange={handleChange}
              name="user_name" // This is the name attribute for emailjs. it represents the user_name variable in emailjs. If it isnt there, am empty field will be sent to emailjs
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-gray-700 bg-[#212c4c] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
               id="email"
                 value={formData.email}
        onChange={handleChange}
              name="user_email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-gray-700 bg-[#212c4c] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              rows={4}
              id="message"
              name="message"
               value={formData.message}
        onChange={handleChange}
              placeholder="Your Message"
              className="px-4 py-3 rounded-lg border border-gray-700 bg-[#212c4c] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className={`w-full bg-blue-800 flex gap-2 justify-center hover:bg-blue-700 text-[#18192b] font-semibold py-3
                ${emailStatus === "Sending..." ? "cursor-not-allowed text-white" : emailStatus === "Message Sent" ? "text-green-400"  : emailStatus === "Please Try Again" ? "text-red-400" : "text-[#18192b]" } 
                rounded-lg shadow-md transition-colors duration-200`}
            > 

   <span>{emailStatus}</span> {emailStatus === "Send Message" ? (
  <Mail  />
) : emailStatus === "Sending..." ? (
  <CircleArrowUp />
) : emailStatus === "Message Sent" ? (
  <CheckCircleIcon />
) : (
  <X />
)}
             </button>
           
          </motion.form>
        </div>
      </div>
    </section>

  );
};

