import Navbar from "./components/navbar/Navbar"
import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Portfolio"
import Videos from "./components/videos/Videos"
import Services from "./components/services/Services"
import Welcome from "./components/welcome/Welcome"
import Footer from "./components/Footer/Footer"
import Feature from "./components/feature/Feature"
import Intro from "./components/intro/Intro"

function App() {

  return (
    <>
      <Topbar/>
      <Navbar/>
      <Feature/>
      <Intro/>
      <Welcome/>
      <Services/>
      <Portfolio/>
      <Videos/>
      <Footer/>
    </>
  )
}

export default App
