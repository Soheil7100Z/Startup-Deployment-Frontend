import { useState } from 'react'
import styles from './product.module.css'
import { NavLink } from 'react-router-dom';


function Product({item}) {
    let description = item.description
    const [cutText, cuttingText] = useState(true)
    if (cutText) {
        description = description.substring(0,120) + '...'
    }


  return (

        <div className={styles.card}>
            <div>
                <div className={styles.img} style={{backgroundImage: `url(${item.img})`}}></div>
                <div className={styles.inhalt}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.description}> {description} </div>
                    <button className={styles.moreLessButton} onClick={() => cuttingText((preState) => !preState)}> {cutText ? 'Mehr' : 'Weniger'} </button>
                    <div className={styles.price}>Preis: {item.price}</div>
                </div>
            </div>
            <NavLink to={`${item.id}`} className={styles.button}>Kaufen</NavLink>
        </div>

  )
}

export default Product
