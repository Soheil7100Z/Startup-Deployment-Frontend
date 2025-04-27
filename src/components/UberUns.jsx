import styles from './uberuns.module.css'
import { NavLink } from 'react-router-dom'
import { FaWhatsappSquare, FaInstagramSquare ,FaFacebookSquare  } from 'react-icons/fa'

function UberUns() {
  return (
    <div className={styles.container}>
        <p style={{marginBottom: '2rem'}}>
        Dies ist ein Beispieltext, der als Platzhalter dient. Er soll demonstrieren, wie später Inhalte auf dieser Seite aussehen könnten. Texte wie dieser werden verwendet, um Layouts zu füllen und dem Betrachter einen Eindruck vom fertigen Design zu vermitteln.
Dabei ist es wichtig, dass der Text möglichst realistisch wirkt, ohne jedoch konkrete Informationen zu liefern. Auf diese Weise können Designer und Entwickler sich ganz auf das visuelle Erscheinungsbild konzentrieren.
In einem echten Projekt würden hier natürlich relevante Inhalte stehen, die speziell auf die Bedürfnisse der Zielgruppe abgestimmt sind. Bis dahin hilft dieser Blindtext dabei, die Struktur und Wirkung der Seite zu beurteilen. Vielen Dank für Ihr Verständnis.Dies ist ein Beispieltext, der als Platzhalter dient. Er soll demonstrieren, wie später Inhalte auf dieser Seite aussehen könnten. Texte wie dieser werden verwendet, um Layouts zu füllen und dem Betrachter einen Eindruck vom fertigen Design zu vermitteln.
Dabei ist es wichtig, dass der Text möglichst realistisch wirkt, ohne jedoch konkrete Informationen zu liefern. Auf diese Weise können Designer und Entwickler sich ganz auf das visuelle Erscheinungsbild konzentrieren.
In einem echten Projekt würden hier natürlich relevante Inhalte stehen, die speziell auf die Bedürfnisse der Zielgruppe abgestimmt sind. Bis dahin hilft dieser Blindtext dabei, die Struktur und Wirkung der Seite zu beurteilen. Vielen Dank für Ihr Verständnis.Dies ist ein Beispieltext, der als Platzhalter dient. Er soll demonstrieren, wie später Inhalte auf dieser Seite aussehen könnten. Texte wie dieser werden verwendet, um Layouts zu füllen und dem Betrachter einen Eindruck vom fertigen Design zu vermitteln.        </p>
        <div className={styles.contactInfos}>
            <span>Adresse: Herne, 44444, Deutschland </span>
            <span>Telefonnummer: (0)987654321 </span>
            <span>E-Mail: Firma.Name@Email.de</span>
            <span>Fax: (0)123456789</span>
            <div className={styles.socialLinks}>
                <NavLink to='https://wa.me/1234567890' target='_blank' ><FaWhatsappSquare /> </NavLink>
                <NavLink to='https://wa.me/https://www.instagram.com/fakeprofile' target='_blank' ><FaInstagramSquare /> </NavLink>
                <NavLink to='https://www.facebook.com/fakeprofile' target='_blank' ><FaFacebookSquare /> </NavLink>
            </div>
        </div>

    </div>
  )
}

export default UberUns
