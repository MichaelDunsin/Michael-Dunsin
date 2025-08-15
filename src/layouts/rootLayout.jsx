import { Outlet } from "react-router-dom"

export default function RootLayout(){

return (
<div className=" relative w-full min-h-screen">
  {/*  Light mode gradient */}
  <div className="absolute inset-0 bg-[linear-gradient(60deg,_#172554_-50%,_#efeded_50%)] bg-no-repeat bg-fixed transition-opacity dark:opacity-0"></div>

  {/*  Dark mode gradient */}
  <div className="absolute inset-0 bg-[linear-gradient(135deg,_#172554_-30%,_#1e293b_30%)] bg-no-repeat bg-fixed transition-opacity opacity-0 dark:opacity-100"></div>

 {/*  Content */}
  <div className="relative z-10 ">
<Outlet/>
  </div>
</div>
)
};

