/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // to enable darkmode classes in tailwindcss. this tells tailwind “Only apply dark: styles when I manually add the dark class to <html> or <body>" unlike media .
  //That means Tailwind only activates dark: styles when it sees class="dark" on the root element of your document which can be the <html> or <body>.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
 screens: {
      // 👇 Custom screen with custom prefix using the extend key. This way, all the default breakpoints (sm, md, lg, etc.) are intact, and the tablet screen is added to them.
      // note that not putting the screens key inside the extend key will over ride all the existing screen breakpoints and you'll have to manually add the breakpoints for them to work again
      '2md': '900px',  // You can name it anything
    },
    },
     
  },
  plugins: [],
}