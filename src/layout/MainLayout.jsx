import { Outlet } from "react-router-dom"
import Navar from "../components/Navar"

function MainLayout() {
  return (
    <>

        <Navar/>
        <Outlet/>

    </>
  )
}

export default MainLayout
