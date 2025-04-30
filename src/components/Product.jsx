import styles from './product.module.css'


function Product({item}) {
  return (

        <div className={styles.card}>
            <div>
                <div className={styles.img} style={{backgroundImage: `url(${item.img})`}}></div>
                <div className={styles.inhalt}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.description}> {item.description} </div>
                    <div className={styles.price}>Preis: {item.price}</div>
                </div>
            </div>
            <button className={styles.button}> {item.title} Kaufen</button>
        </div>

  )
}

export default Product
