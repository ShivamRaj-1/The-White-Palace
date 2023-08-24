import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Topbar from "./components/topbar/Topbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/home/Home";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import VideosPage from "./pages/videos/VideosPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";


function App() {

  return (
    <>
      <Topbar/>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/videos" element={<VideosPage/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/*" element={<h1>404: Page Not found</h1>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
