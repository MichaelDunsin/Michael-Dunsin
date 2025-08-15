import Logo from "./header components/logo"
import NavBar from "./header components/navbar"
import NavTog from "./header components/navtog"
import CvAndThemeTogWrapper from "./header components/cvandthemetog"

export default function Header(){

return (
<header className={`sticky flex z-20 top-0 -pt-3 h-20 w-full justify-between`}>
     <div className="w-full relative "> 
 {/*  Light mode gradient */}
  <div className="absolute inset-0 bg-[linear-gradient(60deg,_#172554_-50%,_#efeded_50%)] bg-no-repeat bg-fixed transition-opacity dark:opacity-0"></div>

  {/*  Dark mode gradient */}
  <div className="absolute inset-0 bg-[linear-gradient(135deg,_#172554_-30%,_#1e293b_30%)] bg-no-repeat bg-fixed transition-opacity opacity-0 dark:opacity-100"></div>

 {/*  Content */}
      <div className="mx-auto relative z-10 flex items-center justify-between top-2 py-[15px]">
<Logo/>
<NavBar/>
<CvAndThemeTogWrapper/>
<NavTog/>
</div>
</div>
</header>
)
};

