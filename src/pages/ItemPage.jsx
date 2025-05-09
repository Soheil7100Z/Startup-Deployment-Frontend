import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
function ItemPage() {

  const {id} = useParams()
  const [ProductList, settingProducts] = useState([])
   useEffect( () => {
      const productsFetch = async () => {
        try {
          const res = await fetch(`/api/products/${id}`)
          const data = await res.json()
          settingProducts(data)
        } catch (error) {

        }
      }
      productsFetch()
    } ,[])

  return (
     <>
      {ProductList.description}
     </>
)

};

export default ItemPage;
