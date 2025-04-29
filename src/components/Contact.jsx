import { useRef , useState } from 'react'
import styles from './contact.module.css'
import {FaRegPaperPlane} from 'react-icons/fa'

const Contact = () => {

    let emailValidation = ''
    const inputElements = document.querySelectorAll('input')

    const [inputVor , settingInputVor] = useState('')
    const [inputNach , settingInputNach] = useState('')
    const [inputEmail , settingInputEmail] = useState('')
    const [inputTel , settingInputTel] = useState('')
    const [inputPost , settingInputPost] = useState('')
    const [inputText , settingInputText] = useState('')
    const [inputAnrede , settingInputAnrede] = useState('Herr')

    const [errorVor , settingErrorVor] = useState('')
    const [errorNach , settingErrorNach] = useState('')
    const [errorEmail , settingErrorEmail] = useState('')
    const [errorText , settingErrorText] = useState('')
    const [errorValidationEmail, settingValidationEmail] = useState('')

    const inputEmailRef = useRef(null)

    const currentInputAnrede = (event) =>{
        settingInputAnrede(event.target.value)
    }

    const currentInputVor = (event) => {
        settingInputVor(event.target.value)
        if(inputVor !== ''){
            settingErrorVor('')
        }
    }

    const currentInputNach = (event) => {
        settingInputNach(event.target.value)
        if(inputNach !== ''){
            settingErrorNach('')
        }
    }

    const currentInputEmail = (event) => {
        settingInputEmail(event.target.value)
        if(inputEmail !== ''){
            settingErrorEmail('')
        }
    }

    const currentInputTel = (event) => {
        settingInputTel(event.target.value)
    }

    const currentInputPost = (event) => {
        settingInputPost(event.target.value)
    }

    const currentInputText = (event) => {
        settingInputText(event.target.value)
        if(inputText !== ''){
            settingErrorText('')
        }
    }

    const validationChecker = () => {
        if (!inputEmailRef.current.checkValidity()){
            settingValidationEmail('NotValid')
            emailValidation = 'NotValid'
        }else{
            settingValidationEmail('')
            emailValidation = ''
        }
    }

    const submittingUser = () => {
        inputElements.forEach(el =>{
            if (inputVor===''){
                settingErrorVor('required')
            }else {
                settingErrorVor('')
            }

            if (inputNach===''){
                settingErrorNach('required')
            }else {
                settingErrorNach('')
            }

            if (inputEmail===''){
                settingErrorEmail('required')
            }else {
                settingErrorEmail('')
            }

            if (inputText===''){
                settingErrorText('required')
            }else {
                settingErrorText('')
            }

            if (inputVor!=='' && inputNach!=='' && inputEmail!=='' && inputText!=='' && emailValidation === ''){
                let userData = []
                let keys = ["Anrede","Vorname" , "Nachname" , "Email" , "Telefonnummer" , "Postleitzahl"]
                userData.push(inputAnrede,inputVor,inputNach,inputEmail,inputTel,inputPost)
                let userDataObject = Object.fromEntries(keys.map((key , i) => [key , userData[i]]))
                settingInputVor('')
                settingInputNach('')
                settingInputEmail('')
                settingInputTel('')
                settingInputPost('')
                settingInputText('')
                console.log(userDataObject)
            }

        })
    }


  return (
    <form id={styles.container} >
        <span style={{display: 'block', marginBottom: '2rem' }}>Sie haben eine Frage? Dann schreiben Sie uns! Wir bemühen uns Ihr Anliegen zu bearbeiten und setzen uns schnellstmöglich mit Ihnen in Verbindung.</span>
        <span  style={{display: 'block', marginBottom: '2rem', fontWeight: 'bold', fontSize:'var(--text-lg)' }}>Persönliche Angaben</span>
        <div className={styles.form}>
            <div className={styles.perosnInfo}>
                <label>Anrede:</label>
                <select className={styles.selectionIcon} value={(inputAnrede)} onChange={currentInputAnrede}>
                        <option>Herr</option>
                        <option>Frau</option>
                        <option>Dr.</option>
                        <option>Andere</option>
                </select>
            </div>

            <div className={styles.perosnInfo}>
                <label style={{color: errorVor ? '#EA2027' : ''}}>Vorname*:</label>
                <input type="text" value={inputVor} onChange={currentInputVor} style={{borderColor: errorVor ? '#EA2027' : ''}}/>
            </div>

            <div className={styles.perosnInfo}>
                <label style={{color: errorNach ? '#EA2027' : ''}}>Nachname*:</label>
                <input type="text" value={inputNach} onChange={currentInputNach} style={{borderColor: errorNach ? '#EA2027' : ''}}/>
            </div>

            <div className={styles.perosnInfo}>
                <label style={{color: (errorEmail || errorValidationEmail) ? '#EA2027' : ''}}>E-Mail*:</label>
                <input  type="Email" ref={inputEmailRef}
                value={inputEmail} onChange={currentInputEmail}
                style={{borderColor: (errorEmail || errorValidationEmail) ? '#EA2027' : ''}}/>
            </div>

            <div className={styles.perosnInfo}>
                <label>Telefonnummer:</label>
                <input type="number" value={inputTel} onChange={currentInputTel}/>
            </div>

            <div className={styles.perosnInfo}>
                <label>Postleitzahl:</label>
                <input type="number"  value={inputPost} onChange={currentInputPost} />
            </div>
        </div>
        {errorText && <div style={{marginBottom: '-3rem', marginTop: '2rem', color: '#EA2027', fontSize: '2rem' }}>*</div>}
        <textarea className={styles.textArea} placeholder='Bitte schreiben Sie Ihre Anfrage'
        value={inputText} onChange={currentInputText}
        style={{borderColor: errorText ? '#EA2027' : ''}}
          ></textarea>

        {errorValidationEmail && <div style={{ color: '#EA2027', fontSize:'1.3rem'}}>Bitte geben Sie eine gültige E-Mail ein !</div>}

        {(errorVor||errorNach||errorEmail||errorText) && <div style={{color: '#EA2027', fontSize:'1.3rem', marginTop:'1rem'}}>Bitte füllen Sie die * aus, sie sind die Pflichtangaben !</div>}
        <button type="button" onClick={() => {validationChecker(), submittingUser()}} className={styles.button}>
            <FaRegPaperPlane  style={{ marginRight: '.8rem'}} />
            SENDEN</button>

    </form>
  )
}

export default Contact
