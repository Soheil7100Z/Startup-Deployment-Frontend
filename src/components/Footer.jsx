import { FaGithub } from "react-icons/fa"
import { NavLink } from "react-router-dom"
function Footer() {
  return (
    <div >
       <div className='container textAlign-c fontC-w bg-blue fontS-md'>
          <p>Erstellt von soheil Zaremehrjardi mit React und Node.js</p>
          <p>Sie finden mehr Projekte unter meinem Github</p>
          <NavLink to="https://github.com/Soheil7100Z?tab=repositories" target='_blank'>
            <FaGithub className="mt-1 fontS-2xl fontC-w hover" />
          </NavLink>

       </div>
    </div>
  )
}

export default Footer
