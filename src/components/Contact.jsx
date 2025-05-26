import { useRef , useState } from 'react'
import {FaRegPaperPlane} from 'react-icons/fa'
import { ClipLoader } from 'react-spinners'

const Contact = () => {
    const [laoder , settingLaoder] = useState(true)

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
                settingLaoder(false)
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
                    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/send` , {
                        method: 'POST',
                        headers: {'content-type' : 'application/json'},
                        body:JSON.stringify(userDataObject),
                    })
                    const UserInfo = await response.json()

                      if(UserInfo) {settingLaoder(true)}

                    settingmessageSent('Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Unser Team wird sich zeitnah bei Ihnen melden.')

                    }
                    catch (error) {
                        settingLaoder(true)
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
    <form className='container sideBar' method="POST" action="send" onSubmit={submitData} >
        <p className='mb-2' >Sie haben eine Frage? Dann schreiben Sie uns! Wir bemühen uns Ihr Anliegen zu bearbeiten und setzen uns schnellstmöglich mit Ihnen in Verbindung.</p>
        <p className='mb-2 fontW-b fontS-xl'>Persönliche Angaben</p>
        <div className='d-grid gridTC-2-1fr gap-1-15'>
            <div className='d-flex alignItem-c justifyContent-sb '>
                <label>Anrede:</label>
                    <select className='d-flex w-10 w-15 p-1 borderR-05 outline-none border' value={(inputAnrede)} onChange={currentInputAnrede} >
                            <option>Herr</option>
                            <option>Frau</option>
                            <option>Dr.</option>
                            <option>Andere</option>
                    </select>
            </div>

            <div className='d-flex alignItem-c justifyContent-sb'>
                <label style={{color: errorVor ? '#EA2027' : ''}}>Vorname:</label>
                <input className='d-flex w-10 w-15 p-1 borderR-05 outline-none border'
                type="text" name="Vorname"  value={inputVor} onChange={currentInputVor}  style={{borderColor: errorVor ? '#EA2027' : ''}}/>
            </div>

            <div className='d-flex alignItem-c justifyContent-sb'>
                <label style={{color: errorNach ? '#EA2027' : ''}}>Nachname:</label>
                <input className='d-flex w-10 w-15 p-1 borderR-05 outline-none border'
                type="text" name="Nachname"   value={inputNach} onChange={currentInputNach}  style={{borderColor: errorNach ? '#EA2027' : ''}}/>
            </div>

            <div className='d-flex alignItem-c justifyContent-sb'>
                <label style={{color: (errorEmail || errorValidationEmail) ? '#EA2027' : ''}}>E-Mail:</label>
                <input className='d-flex w-10 w-15 p-1 borderR-05 outline-none border'
                type="Email" name="UserEmail"  ref={inputEmailRef}
                value={inputEmail} onChange={currentInputEmail}
                style={{borderColor: (errorEmail || errorValidationEmail) ? '#EA2027' : ''}}/>
            </div>

            <div className='d-flex alignItem-c justifyContent-sb'>
                <label>Telefonnummer:</label>
                <input className='d-flex w-10 w-15 p-1 borderR-05 outline-none border'
                type="number" name="Telefonnummer" value={inputTel} onChange={currentInputTel}/>
            </div>

            <div className='d-flex alignItem-c justifyContent-sb'>
                <label>Postleitzahl:</label>
                <input className='d-flex w-10 w-15 p-1 borderR-05 outline-none border'
                type="number" name="Postleitzahl" value={inputPost} onChange={currentInputPost} />
            </div>
        </div>

        <textarea name="message" rows="5" className='d-flex w-100p mt-2 mb-2 resize-none p-1 borderR-05 fontS-md border outline-none fontF-inherit'
        placeholder='Bitte schreiben Sie Ihre Anfrage'
        value={inputText} onChange={currentInputText}
        style={{borderColor: errorText ? '#EA2027' : ''}}
          ></textarea>

        <button type="submit" onClick={Beforesubmission} className='mb-05 p-1 fontW-b fontS-md fontC-w bg-blue border-none borderR-05 hover '>
            <FaRegPaperPlane className='mr-1' />
            SENDEN
        </button>
        {(errorVor||errorNach||errorEmail||errorText) && <div className='fontS-md fontW-b fontC-r mt-1'>Bitte füllen Sie Pflichtangaben aus!</div>}
        {errorValidationEmail && <div className='fontS-md fontW-b fontC-r mt-1'>Bitte geben Sie eine gültige E-Mail ein !</div>}
        {!laoder ?<div className='d-block mt-1'><ClipLoader /></div>  : ''}
        {messageSent &&  <div className='fontC-b fontS-md fontW-b mt-1'> {messageSent} </div>}
        { messageNotSent && <div className='fontC-r fontS-md fontW-b mt-1'> {messageNotSent} </div>}


    </form>
  )
}

export default Contact
