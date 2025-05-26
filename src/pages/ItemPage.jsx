import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import Item from '../components/Item'

function ItemPage() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const products = useLoaderData()
  
  return (
     <>

        <Item products={products}/>

     </>
)

};

const itemLoader = async ({params}) => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/${params.id}`)
  const data = await res.json()
  return data
}

export {ItemPage as default , itemLoader};
