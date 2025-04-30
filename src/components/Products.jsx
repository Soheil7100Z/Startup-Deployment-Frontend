import styles from './products.module.css'
import ProductList from '../assets/Products.json'
import Product from './Product'


function Products() {
  return (
    <div id={styles.container}>

        {ProductList.map((item , id)=>(
            <Product key={id} item = {item} />
        ))}

    </div>
  )
}

export default Products
