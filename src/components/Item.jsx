function Item ({products}) {

  const ProductList = products

  return (
     <>
      <section className='d-flex flex-col flex-row-after950 mlr-13 bg-blue'>
        <article className='d-flex flex-col justifyContent-c alignItem-c w-40p-until950 fontC-w p-1'>
          <h1 className='fontS-3xl mb-2'>{ProductList.title}</h1>
          <h2>Preis: {ProductList.price}</h2>
        </article>

        <img className='w-100p w-60p-until950' src={ProductList.img} alt={ProductList.title} />

      </section>
      <p className=' fontS-md p-2 p-1-0  lineH-108 textAlign-j mlr-13'>
            {ProductList.description}
      </p>
     </>
)

};

export default Item
