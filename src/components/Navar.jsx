import { NavLink } from 'react-router-dom'
import {FaReact} from 'react-icons/fa'
import {IoMdContact } from 'react-icons/io'
import { useState } from 'react'

const Navar = () => {

    const [menu , menuActivating] = useState(true)

  return (
    <div className='container d-flex justifyContent-sb alignItem-c bg-blue'>

            <div  onClick={() => menuActivating((preState) => !preState) }>
                {menu ?
                <div className='d-flex flex-col gap-5px mb-05 hover'>
                            <span className='w-35px h-3px bg-w'></span>
                            <span className='w-35px h-3px bg-w'></span>
                            <span className='w-35px h-3px bg-w'></span>
                </div>
                    :
                 <div>
                        <div className='d-flex flex-col gap-5px mb-05 hover'>
                            <span className='w-35px h-3px bg-w'></span>
                            <span className='w-35px h-3px bg-w'></span>
                            <span className='w-35px h-3px bg-w'></span>
                        </div>
                        <div className='bg-w d-grid gap-1 position-ab p-05-0' onMouseLeave={() => menuActivating(true)}>
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/">Home</NavLink><hr />
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/Produkt">Usere Produkte</NavLink><hr />
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/uber">Über uns</NavLink><hr />
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/kontakt">Kontakt</NavLink> <hr />
                            <NavLink className='textDeco-none fontW-b underLine fontC-b p-05-1' to="/Kommentar">Kommentar</NavLink>
                        </div>
                 </div>

                }

            </div>

            <div className=' d-flex alignItem-c fontS-lg fontW-b fontC-w '>
              <div className='fontS-xl d-flex p-1'><FaReact/></div>
              <span className='d-none d-flex-after550'>Soheil Zaremehrjardi</span>
            </div>
            <div className='d-flex gap-1 fontW-b'>
              <div>
                  <NavLink to="/kontakt" className='d-flex alignItem-c textDeco-none fontC-w fontS-lg underLine '>
                  <span className='d-none d-flex-after550'>Kontakt</span>
                  <IoMdContact className='fontS-xl ml-05'/>
                  </NavLink>
              </div>

            </div>
    </div>
  )
}

export default Navar
