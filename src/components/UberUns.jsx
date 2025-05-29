import { NavLink } from 'react-router-dom'
import { FaWhatsappSquare, FaInstagramSquare ,FaFacebookSquare  } from 'react-icons/fa'
import { useEffect } from 'react'

function UberUns() {
     useEffect(()=>{
       window.scrollTo(0,0)
     },[])
  return (

      <div className='wrapper container textAlign-j sideBar'>
        <p style={{marginBottom: '2rem'}}>
        Dies ist ein Beispieltext, der als Platzhalter dient. Er soll demonstrieren, wie später Inhalte auf dieser Seite aussehen könnten. Texte wie dieser werden verwendet, um Layouts zu füllen und dem Betrachter einen Eindruck vom fertigen Design zu vermitteln.
Dabei ist es wichtig, dass der Text möglichst realistisch wirkt, ohne jedoch konkrete Informationen zu liefern. Auf diese Weise können Designer und Entwickler sich ganz auf das visuelle Erscheinungsbild konzentrieren.
In einem echten Projekt würden hier natürlich relevante Inhalte stehen, die speziell auf die Bedürfnisse der Zielgruppe abgestimmt sind. Bis dahin hilft dieser Blindtext dabei, die Struktur und Wirkung der Seite zu beurteilen. Vielen Dank für Ihr Verständnis.Dies ist ein Beispieltext, der als Platzhalter dient. Er soll demonstrieren, wie später Inhalte auf dieser Seite aussehen könnten. Texte wie dieser werden verwendet, um Layouts zu füllen und dem Betrachter einen Eindruck vom fertigen Design zu vermitteln.
Dabei ist es wichtig, dass der Text möglichst realistisch wirkt, ohne jedoch konkrete Informationen zu liefern. Auf diese Weise können Designer und Entwickler sich ganz auf das visuelle Erscheinungsbild konzentrieren.
In einem echten Projekt würden hier natürlich relevante Inhalte stehen, die speziell auf die Bedürfnisse der Zielgruppe abgestimmt sind. Bis dahin hilft dieser Blindtext dabei, die Struktur und Wirkung der Seite zu beurteilen. Vielen Dank für Ihr Verständnis.Dies ist ein Beispieltext, der als Platzhalter dient. Er soll demonstrieren, wie später Inhalte auf dieser Seite aussehen könnten. Texte wie dieser werden verwendet, um Layouts zu füllen und dem Betrachter einen Eindruck vom fertigen Design zu vermitteln.
        </p>
        <div className='d-flex flex-col gap-1 fontS-md'>
            <span>Adresse: Herne, 44444, Deutschland </span>
            <span>Telefonnummer: (0)987654321 </span>
            <span>E-Mail: Firma.Name@Email.de</span>
            <span>Fax: (0)123456789</span>
            <div className='mt-2 d-flex gap-1'>
                <NavLink className='fontC-b fontS-xl hover' to='https://wa.me/1234567890' target='_blank' ><FaWhatsappSquare /> </NavLink>
                <NavLink className='fontC-b fontS-xl hover' to='https://wa.me/https://www.instagram.com/fakeprofile' target='_blank' ><FaInstagramSquare /> </NavLink>
                <NavLink className='fontC-b fontS-xl hover' to='https://www.facebook.com/fakeprofile' target='_blank' ><FaFacebookSquare /> </NavLink>
            </div>
        </div>

    </div>

  )
}

export default UberUns
