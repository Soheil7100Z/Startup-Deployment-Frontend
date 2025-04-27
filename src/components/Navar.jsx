import styles from './navar.module.css'
import { NavLink } from 'react-router-dom'
import {FaReact} from 'react-icons/fa'

const Navar = () => {
  return (
    <div id={styles.container}>
        <NavLink to="/" className={styles.logo}><FaReact/></NavLink>
        <div className={styles.title}>Start Up</div>
        <div className={styles.rightSide}>
            <NavLink to="/uber" className={styles.uberUns}>Über Uns</NavLink>
            <NavLink to="/kontakt" className={styles.uberUns}>Kontakt</NavLink>
        </div>
    </div>
  )
}

export default Navar
