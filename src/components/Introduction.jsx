import { NavLink } from 'react-router-dom'
const Introduction = () => {
  return (
    <div className=' minh-home d-flex flex-col justifyContent-c textAlign-c alignItem-c linGradient fontS-n p-0-3 '>
        <p className='mt-1'>
        Dies ist ein Beispieltext, der als Platzhalter dient. Er wird häufig verwendet, um Layouts und Designs zu testen,
        bevor der endgültige Inhalt erstellt wird. Ziel ist es, eine visuelle Darstellung des Endprodukts zu ermöglichen,
        ohne vom Inhalt abzulenken.
        </p>
        <NavLink to='./products' className='textDeco-none fontW-b fontC-w bg-blue p-05 borderR-03 mt-1 mb-1 hover'>
            Produkte
        </NavLink>
    </div>
  )
}

export default Introduction
