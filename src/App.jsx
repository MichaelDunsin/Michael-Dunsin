import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import Home from "./pages/home"
import PageNotFound from "./pages/pagenotfound";
import Preview from "./pages/preview";
import Portfolio from "./pages/portfolio";
import AboutMe from "./pages/about-me";

export default function App() {

    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>} />
        <Route path="preview/:id" element={<Preview/>} />
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )

  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}


