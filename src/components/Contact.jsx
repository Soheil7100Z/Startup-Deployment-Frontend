import styles from './contact.module.css'
import {AiOutlineCheck } from 'react-icons/ai'
const Contact = () => {
  return (
    <div id={styles.container}>
        <span style={{display: 'block', marginBottom: '2rem' }}>Sie haben eine Frage? Dann schreiben Sie uns! Wir bemühen uns Ihr Anliegen zu bearbeiten und setzen uns schnellstmöglich mit Ihnen in Verbindung.</span>
        <span  style={{display: 'block', marginBottom: '2rem', fontWeight: 'bold', fontSize:'var(--text-lg)' }}>Persönliche Angaben</span>
        <div className={styles.form}>
            <div className={styles.perosnInfo}>
                <label>Anrede</label>
                <select className={styles.selectionIcon}>
                        <option>Herr</option>
                        <option>Frau</option>
                        <option>Dr.</option>
                        <option>Andere</option>
                </select>
            </div>

            <div className={styles.perosnInfo}>
                <label>Vorname:</label>
                <input type="text"  />
            </div>

            <div className={styles.perosnInfo}>
                <label>Nachname:</label>
                <input type="text"  />
            </div>

            <div className={styles.perosnInfo}>
                <label>E-Mail Adresse:</label>
                <input type="Email"  />
            </div>

            <div className={styles.perosnInfo}>
                <label>Telefonnummer:</label>
                <input type="tel"  />
            </div>

            <div className={styles.perosnInfo}>
                <label>Postleitzahl:</label>
                <input type="post"  />
            </div>
        </div>
        <textarea className={styles.textArea} placeholder='Bitte schreiben Sie Ihre Anfrage' ></textarea>
        <button className={styles.button}>
            <AiOutlineCheck style={{ marginRight: '.5rem'}} />
            SENDEN</button>
    </div>
  )
}

export default Contact
