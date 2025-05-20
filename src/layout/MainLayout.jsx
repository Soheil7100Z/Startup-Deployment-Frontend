import { Outlet } from "react-router-dom"
import Navar from "../components/Navar"
import Footer from "../components/Footer"
function MainLayout() {
  return (
    <div className="d-flex flex-col minh-100vh layout ">

        <div>
          <Navar/>
          <Outlet/>
        </div>
          <Footer />


    </div>
  )
}

export default MainLayout
