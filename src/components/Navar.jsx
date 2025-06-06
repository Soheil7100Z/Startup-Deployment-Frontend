import { NavLink } from 'react-router-dom'
import {FaReact} from 'react-icons/fa'
import {IoMdContact } from 'react-icons/io'
import { useState } from 'react'
import { VscMenu } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
const Navar = () => {

    const [menu , menuActivating] = useState(true)

  return (
    <div className='container d-flex justifyContent-sb alignItem-c bg-blue position-sticky-top0 zIndex-999'>

                <div className='d-none-contact' onClick={() => menuActivating((preState) => !preState) }>
                {menu ?
                        <VscMenu className='fontC-w fontS-2xl hover'/>
                      :
                         <RxCross2 className='fontC-w fontS-2xl hover'/> }
                <div>

                        <div className={`minh-100vh left bg-blue fontS-n d-flex flex-col position-ab w-100p-contact p-05-0 zIndex-999 ${menu ? 'menuClosed' : 'menuOpen'}`}
                        onMouseLeave={() => menuActivating(true)}>
                            {/* <div className='d-flex jc-center ai-center'><NavLink className='textDeco-none underLine fontC-w p-05-1' to="/">Home</NavLink></div> */}
                            <NavLink className='textDeco-none underLine fontC-w p-HaMenu borderB' to="/">Home</NavLink>
                            <NavLink className='textDeco-none underLine fontC-w p-HaMenu borderB' to="/products">Usere Produkte</NavLink>
                            <NavLink className='textDeco-none underLine fontC-w p-HaMenu borderB' to="/about">Über uns</NavLink>
                            <NavLink className='textDeco-none underLine fontC-w p-HaMenu borderB' to="/contact">Kontakt</NavLink>
                            <NavLink className='textDeco-none underLine fontC-w p-HaMenu borderB' to="/comments">Kommentar</NavLink>
                        </div>
                 </div>



            </div>

            <div className='d-none-nav d-flex alignItem-c fontS-md fontC-w '>
              <NavLink><div className='fontS-2xl fontC-w d-flex textDeco-none'><FaReact/></div></NavLink>
              <NavLink className='textDeco-none underLine fontC-w p-05-1' to="/products">Usere Produkte</NavLink>
              <NavLink className='textDeco-none underLine fontC-w p-05-1' to="/about">Über uns</NavLink>
              <NavLink className='textDeco-none underLine fontC-w p-05-1' to="/contact">Kontakt</NavLink>
              <NavLink className='textDeco-none underLine fontC-w p-05-1' to="/comments">Kommentar</NavLink>
            </div>
            <div className='d-flex gap-1 fontW-b'>
              <div>
                  <NavLink to="/contact" className='d-flex alignItem-c textDeco-none fontC-w fontS-lg underLine'>
                  <IoMdContact className='fontS-2xl'/>
                  </NavLink>
              </div>

            </div>
    </div>
  )
}

export default Navar
