import {useLoaderData } from 'react-router-dom'

function ItemPage() {

  const ProductList = useLoaderData()
  return (
     <>
      <section className='d-flex flex-col flex-row-after950 mlr-10 bg-blue'>
        <article className='d-flex flex-col justifyContent-c alignItem-c w-40p-until950 fontC-w p-1'>
          <h1 className='fontS-3xl mb-2'>{ProductList.title}</h1>
          <h2>Preis: {ProductList.price}</h2>
        </article>

        <img className='w-100p w-60p-until950' src={ProductList.img} alt={ProductList.title} />

      </section>
      <p className='bg-blue fontS-md fontC-w p-2 lineH-108 textAlign-j'>
            {ProductList.description}
      </p>
     </>
)

};

const itemLoader = async ({params}) => {
  const res = await fetch(`/api/products/${params.id}`)
  const data = await res.json()
  return data
}

export {ItemPage as default , itemLoader};
