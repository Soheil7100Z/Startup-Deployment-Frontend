import styles from './itemPage.module.css'
import { useParams ,useLoaderData } from 'react-router-dom'
// import { useState , useEffect } from 'react'

function ItemPage() {

  const ProductList = useLoaderData()
  return (
     <>
      <section >
        <article>
          <h1>{ProductList.title}</h1>
          <h2>Preis: {ProductList.price}</h2>
        </article>

        <img src={ProductList.img} alt={ProductList.title} />

      </section>
      <div className={styles.des}>

            {ProductList.description}

      </div>
     </>
)

};

const itemLoader = async ({params}) => {
  const res = await fetch(`/api/products/${params.id}`)
  const data = await res.json()
  return data
}

export {ItemPage as default , itemLoader};

 // const {id} = useParams()
  // const [ProductList, settingProducts] = useState([])
  //  useEffect( () => {
  //     const productsFetch = async () => {
  //       try {
  //         const res = await fetch(`/api/products/${id}`)
  //         const data = await res.json()
  //         settingProducts(data)
  //       } catch (error) {

  //       }
  //     }
  //     productsFetch()
  //   } ,[])
