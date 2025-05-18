import { useState } from 'react'
import { NavLink } from 'react-router-dom';


function Product({item}) {
    let description = item.descriptionShort
    const [cutText, cuttingText] = useState(true)
    if (cutText) {
        description = description.substring(0,120) + '...'
    }

  return (

        <div className='d-flex flex-col justifyContent-sb gap-3 p-2 bg-w borderR-1 boxShadow'>
            <div>
                <div className='w-100p minH-25 minH-10 bgS-cover bgR-no bgP-center mb-2' style={{backgroundImage: `url(${item.img})`}}></div>
                <div className='fontS-md'>
                    <div className='fontS-2xl fontW-b mb-1'>{item.title}</div>
                    <div className='mb-05 fontS-n'> {description} </div>
                    <button className='fontC-lb border-none fontW-b fontS-n mb-2 underLine'
                    onClick={() => cuttingText((preState) => !preState)}> {cutText ? 'Mehr' : 'Weniger'} </button>
                    <div className='fontW-b fontS-lg'>Preis: {item.price}</div>
                </div>
            </div>
            <div className='mt-2'>
              <NavLink to={`${item.id}`} className='textDeco-none bg-blue fontC-w fontW-b fontS-md borderR-05 p-1 hover'>Mehr Details</NavLink>
            </div>
        </div>

  )
}

export default Product
