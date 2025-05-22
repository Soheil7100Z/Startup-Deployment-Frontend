import {useState , useEffect} from 'react';
import Product from './Product'
import { ClipLoader } from 'react-spinners';


function Products() {
  const [ProductList , settingProducts] = useState([])
  const [laoder , settingLaoder] = useState(true)
  useEffect( () => {
    const productsFetch = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)
        const data = await res.json()
        settingProducts(data)
        if(data) {
          settingLaoder(false)
        }
      }  catch (error) {
        console.log(error)
      }
    }
    productsFetch()
  } ,[])
  return (
    <div>
      {laoder ? <div className='d-flex alignItem-c justifyContent-c minh-home'>
        <ClipLoader className='w-hSpinner'/></div>
      :
      <div className='d-grid gridTC-2-1fr gap-2 mlr-105 mt-2 sideBar'>
        {ProductList.map((item , id)=>(
            <Product key={id} item = {item} />
        ))}
      </div>}
    </div>
  )
}

export default Products
