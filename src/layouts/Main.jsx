import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar/Navbar"
import Footer from "../components/shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-28 pb-20">
          <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Main
