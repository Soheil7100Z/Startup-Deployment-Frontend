import { useRef , useState } from 'react'
import styles from './contact.module.css'
import {FaRegPaperPlane} from 'react-icons/fa'

const Contact = () => {

    const [inputVor , settingInputVor] = useState('')
    const [inputNach , settingInputNach] = useState('')
    const [inputEmail , settingInputEmail] = useState('')
    const [inputTel , settingInputTel] = useState('')
    const [inputPost , settingInputPost] = useState('')
    const [inputText , settingInputText] = useState('')
    const [inputAnrede , settingInputAnrede] = useState('Herr')

    const [messageSent , settingmessageSent] = useState('')
    const [messageNotSent , settingmessageNotSent] = useState('')

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


    const submitData = async(e) => {
        e.preventDefault()
        if (!inputVor){
            settingErrorVor('required')
        }else {
            settingErrorVor('')
        }
        if (!inputNach){
            settingErrorNach('required')
        }else {
            settingErrorNach('')
        }

        if (!inputEmail){
            settingErrorEmail('required')
        }else {
            settingErrorEmail('')
        }

        if (!inputText){
            settingErrorText('required')
        }else {
            settingErrorText('')
        }

        if (inputVor && inputNach && inputEmail && inputText){
                let userData = [];
                let keys = ["anrede","vorname" , "nachname" , "email" , "telefonnummer" , "postleitzahl", "message"]
                userData.push(inputAnrede,inputVor,inputNach,inputEmail,inputTel,inputPost,inputText)
                let userDataObject = Object.fromEntries(keys.map((key , i) => [key , userData[i]]))
                settingInputVor('')
                settingInputNach('')
                settingInputEmail('')
                settingInputTel('')
                settingInputPost('')
                settingInputText('')
                try {
                    const response = await fetch('http://localhost:3000/send' , {
                        method: 'POST',
                        headers: {'content-type' : 'application/json'},
                        body:JSON.stringify(userDataObject),
                    })
                    const UserInfo = await response.json()
                    settingmessageSent('Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Unser Team wird sich zeitnah bei Ihnen melden.')
                    console.log(UserInfo)
                }
                catch (error) {
                    settingmessageNotSent('Ein technischer Fehler ist aufgetreten. Bitte versuchen Sie es später erneut. Wir bitten um Entschuldigung und danken für Ihr Verständnis.')
                  }
        }
}

    const Beforesubmission = () => {
        if (!inputEmailRef.current.checkValidity()){
            settingValidationEmail('NotValid')
        }else{
            settingValidationEmail('')
        }
        if (!inputVor){
            settingErrorVor('required')
        }else {
            settingErrorVor('')
        }
        if (!inputNach){
            settingErrorNach('required')
        }else {
            settingErrorNach('')
        }

        if (!inputText){
            settingErrorText('required')
        }else {
            settingErrorText('')
        }
        settingmessageSent('')
        settingmessageNotSent('')
    }


  return (
    <form id={styles.container} method="POST" action="send" onSubmit={submitData} >
        <span style={{display: 'block', marginBottom: '2rem' }}>Sie haben eine Frage? Dann schreiben Sie uns! Wir bemühen uns Ihr Anliegen zu bearbeiten und setzen uns schnellstmöglich mit Ihnen in Verbindung.</span>
        <span  style={{display: 'block', marginBottom: '2rem', fontWeight: 'bold', fontSize:'var(--text-lg)' }}>Persönliche Angaben</span>
        <div className={styles.form}>
            <div className={styles.perosnInfo}>
                <label>Anrede:</label>
                <select className={styles.selectionIcon} value={(inputAnrede)} onChange={currentInputAnrede} >
                        <option>Herr</option>
                        <option>Frau</option>
                        <option>Dr.</option>
                        <option>Andere</option>
                </select>
            </div>

            <div className={styles.perosnInfo}>
                <label style={{color: errorVor ? '#EA2027' : ''}}>Vorname*:</label>
                <input type="text" name="Vorname"  value={inputVor} onChange={currentInputVor}  style={{borderColor: errorVor ? '#EA2027' : ''}}/>
            </div>

            <div className={styles.perosnInfo}>
                <label style={{color: errorNach ? '#EA2027' : ''}}>Nachname*:</label>
                <input type="text" name="Nachname"   value={inputNach} onChange={currentInputNach}  style={{borderColor: errorNach ? '#EA2027' : ''}}/>
            </div>

            <div className={styles.perosnInfo}>
                <label style={{color: (errorEmail || errorValidationEmail) ? '#EA2027' : ''}}>E-Mail*:</label>
                <input  type="Email" name="UserEmail"  ref={inputEmailRef}
                value={inputEmail} onChange={currentInputEmail}
                style={{borderColor: (errorEmail || errorValidationEmail) ? '#EA2027' : ''}}/>
            </div>

            <div className={styles.perosnInfo}>
                <label>Telefonnummer:</label>
                <input type="number" name="Telefonnummer" value={inputTel} onChange={currentInputTel}/>
            </div>

            <div className={styles.perosnInfo}>
                <label>Postleitzahl:</label>
                <input type="number" name="Postleitzahl" value={inputPost} onChange={currentInputPost} />
            </div>
        </div>
        {errorText && <div style={{marginBottom: '-3rem', marginTop: '2rem', color: '#EA2027', fontSize: '2rem' }}>*</div>}
        <textarea name="message" rows="5" className={styles.textArea} placeholder='Bitte schreiben Sie Ihre Anfrage'
        value={inputText} onChange={currentInputText}
        style={{borderColor: errorText ? '#EA2027' : ''}}
          ></textarea>

        {errorValidationEmail && <div style={{ color: '#EA2027', fontSize:'1.3rem'}}>Bitte geben Sie eine gültige E-Mail ein !</div>}
        {(errorVor||errorNach||errorEmail||errorText) && <div style={{color: '#EA2027', fontSize:'1.3rem', marginTop:'1rem'}}>Bitte füllen Sie die * aus, sie sind die Pflichtangaben !</div>}
        {messageSent && <div style={{ color: '#192a56', fontSize:'1.5rem', fontWeight: 'bold'}}> {messageSent} </div>}
        {messageNotSent && <div style={{ color: '#EA2027', fontSize:'1.5rem', fontWeight: 'bold'}}> {messageNotSent} </div>}
        <button type="submit" onClick={Beforesubmission} className={styles.button}>
            <FaRegPaperPlane  style={{ marginRight: '.8rem'}} />
            SENDEN</button>

    </form>
  )
}

export default Contact
