import {useState , useEffect} from 'react';
import styles from './products.module.css'
import Product from './Product'


function Products() {
  const [ProductList , settingProducts] = useState([])
  useEffect( () => {
    const productsFetch = async () => {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        settingProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    productsFetch()
  } ,[])
  return (
    <div id={styles.container}>

        {ProductList.map((item , id)=>(
            <Product key={id} item = {item} />
        ))}

    </div>
  )
}

export default Products
