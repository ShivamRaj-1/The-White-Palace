import Navbar from "./components/navbar/Navbar"
import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Portfolio"
import Videos from "./components/videos/Videos"
import Services from "./components/services/Services"

function App() {

  return (
    <>
      <Topbar/>
      <Navbar/>
      <Services/>
      <Portfolio/>
      <Videos/>
    </>
  )
}

export default App
