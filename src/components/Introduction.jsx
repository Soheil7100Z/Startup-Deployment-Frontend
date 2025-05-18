import { NavLink } from 'react-router-dom'
const Introduction = () => {
  return (
    <div className='d-flex flex-col justifyContent-c textAlign-c alignItem-c linGradient fontS-md  h-100vh p-0-3'>
        <p>
        Dies ist ein Beispieltext, der als Platzhalter dient. Er wird häufig verwendet, um Layouts und Designs zu testen,
        bevor der endgültige Inhalt erstellt wird. Ziel ist es, eine visuelle Darstellung des Endprodukts zu ermöglichen,
        ohne vom Inhalt abzulenken. Solche Blindtexte helfen dabei, Struktur und Gestaltung einer Website oder eines Dokuments
        besser beurteilen zu können.
        </p>
        <NavLink to='./Produkt' className='textDeco-none fontW-b fontC-w bg-blue p-05-1 borderR-05 mt-2 hover'>
            Produkte
        </NavLink>
    </div>
  )
}

export default Introduction
