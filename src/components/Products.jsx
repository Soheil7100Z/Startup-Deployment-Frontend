import {useState , useEffect} from 'react';
import Product from './Product'


function Products() {
  const [ProductList , settingProducts] = useState([])
  useEffect( () => {
    const productsFetch = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)
        const data = await res.json()
        settingProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    productsFetch()
  } ,[])
  return (
    <div className='d-grid gridTC-2-1fr gap-2 mlr-105 mt-2 sideBar'>
        {ProductList.map((item , id)=>(
            <Product key={id} item = {item} />
        ))}
    </div>
  )
}

export default Products
