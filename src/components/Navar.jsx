import styles from './navar.module.css'
import { NavLink } from 'react-router-dom'
import {FaReact} from 'react-icons/fa'
import {IoMdContact } from 'react-icons/io'
import { useState } from 'react'

const Navar = () => {

    const [menu , menuActivating] = useState(true)

  return (
    <div id={styles.container}>
        <div className={styles.leftSide} >

            <div  onClick={() => menuActivating((preState) => !preState) }>
                {menu ?
                <div className={styles.menuSign}>
                    <span></span><span></span><span></span>
                </div>
                    :
                 <div>
                        <div className={styles.menuSign}>
                            <span></span><span></span><span></span>
                        </div>
                        <div className={styles.menu} onMouseLeave={() => menuActivating(true)}>
                            <NavLink to="/">Home</NavLink><hr />
                            <NavLink to="/Produkt">Usere Produkte</NavLink><hr />
                            <NavLink to="/uber">Über uns</NavLink><hr />
                            <NavLink to="/kontakt">Kontakt</NavLink>
                        </div>
                 </div>

                }
            </div>
        </div>

        <div className={styles.title}>
        <div className={styles.logo}><FaReact/></div>
            Start Up</div>
        <div className={styles.rightSide}>
            <NavLink to="/uber" className={styles.uberUns}>

            Über uns</NavLink>
            <div className={styles.contactBox}>
                <NavLink to="/kontakt" className={styles.uberUns}>
                <IoMdContact className={styles.contactIcon}/>
                Kontakt</NavLink>
            </div>

        </div>
    </div>
  )
}

export default Navar
