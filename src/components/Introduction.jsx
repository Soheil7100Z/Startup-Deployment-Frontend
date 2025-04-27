import styles from './introduction.module.css'
import { NavLink } from 'react-router-dom'
const Introduction = () => {
  return (
    <div id={styles.container}>
        <p>
        Dies ist ein Beispieltext, der als Platzhalter dient. Er wird häufig verwendet, um Layouts und Designs zu testen, bevor der endgültige Inhalt erstellt wird. Ziel ist es, eine visuelle Darstellung des Endprodukts zu ermöglichen, ohne vom Inhalt abzulenken. Solche Blindtexte helfen dabei, Struktur und Gestaltung einer Website oder eines Dokuments besser beurteilen zu können.
        </p>
        <NavLink to='./products' className={styles.learnClick}>
            Produkte
        </NavLink>
    </div>
  )
}

export default Introduction
