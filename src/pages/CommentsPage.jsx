import { useLoaderData } from "react-router-dom"
import SingleComment from "../components/SingleComment"
import { useState , useEffect } from "react"
import { ClipLoader } from "react-spinners"

const CommentsPage = ({addcomment}) => {
  const comments = useLoaderData()
  const [laoder , settingLaoder] = useState(true)
  const [name , settingName] = useState('')
  const [comment, settingComment] = useState('')


  useEffect(()=>{
      if(comments) {settingLaoder(false)}
  },[comments])

  useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    let lastCommentID = parseInt(comments[comments.length-1].id)
      const commentSubmit = (e) => {
        e.preventDefault();
        const ID = String(lastCommentID +1)
        const newComment = {
          id: ID,
          name,
          title: comment
        }
        addcomment(newComment)
        window.location.reload()
      }


  return (
    <div>
      {laoder ? <div className='d-flex alignItem-c justifyContent-c minh-home'>
        <ClipLoader className='w-hSpinner'/>
        </div>
              :
         <div className="container sideBar">
         <p className="mb-2 fontW-b">Sie können hier Ihren Kommentar hinzufügen oder entfernen.</p>
         <form onSubmit={commentSubmit} >
           <div className="d-flex flex-col gap-1">
                <div>
                  <label className="d-block mb-05 fontW-b" htmlFor="name" >Name :</label>
                  <input className="p-05-1  outline-none"
                  type="text" name="name" required value={name} onChange={(e) => settingName(e.target.value)} />
                </div>

                <div >
                   <label className="d-inlineBlock mb-05 fontW-b" htmlFor="comment">Ihr Kommentar :</label>
                   <textarea className="w-100p minH-5 resize-none outline-none p-1 fontF-inherit"
                   type="text" name="comment" required value={comment} onChange={(e) => settingComment(e.target.value)}  />
                </div>
           </div>

           <button type="submit" className="mt-1 p-05-1 mb-2 bg-blue fontC-w fontW-b fontS-md borderR-05 border-none">Hinzufügen</button>
         </form>
         {comments.map((comment,id) =>(
           <SingleComment  key={id} comment={comment}/>
         ))}
       </div>}
    </div>

  )
}

const CommentsLoader = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/comments`)
  const data = await res.json()
  return data
}

export {CommentsPage as default , CommentsLoader }
