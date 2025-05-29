import { NavLink } from 'react-router-dom'
import {FaReact} from 'react-icons/fa'
import {IoMdContact } from 'react-icons/io'
import { useState } from 'react'
import { VscMenu } from "react-icons/vsc";
const Navar = () => {

    const [menu , menuActivating] = useState(true)

  return (
    <div className='container d-flex justifyContent-sb alignItem-c bg-blue position-sticky-top0 zIndex-999'>

            <div  onClick={() => menuActivating((preState) => !preState) }>
                {menu ?
                        <VscMenu className='fontC-w fontS-2xl hover'/>
                      :
                 <div>
                        <VscMenu className='fontC-w fontS-2xl hover'/>
                        <div className='bg-w d-grid gap-1 position-ab p-05-0 borderR-03' onMouseLeave={() => menuActivating(true)}>
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/">Home</NavLink><hr />
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/products">Usere Produkte</NavLink><hr />
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/about">Über uns</NavLink><hr />
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/contact">Kontakt</NavLink> <hr />
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/comments">Kommentar</NavLink>
                        </div>
                 </div>

                }

            </div>

            <div className=' d-flex alignItem-c fontS-lg fontW-b fontC-w '>
              <NavLink><div className='fontS-xl fontC-w d-flex p-1 textDeco-none'><FaReact/></div></NavLink>
              <span className='d-none d-flex-after550'>Soheil Zaremehrjardi</span>
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
