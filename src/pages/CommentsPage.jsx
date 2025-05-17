import { useLoaderData } from "react-router-dom"
import SingleComment from "../components/SingleComment"
import { useState } from "react"
// import styles from './commentsPage.module.css'

const CommentsPage = ({addcomment}) => {
  const comments = useLoaderData()
  const [name , settingName] = useState('')
  const [comment, settingComment] = useState('')

    let lastCommentID = parseInt(comments[comments.length-1].id)
    // console.log(lastCommentID)
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
    <div className="container">
      <form onSubmit={commentSubmit} >
        <div className="d-flex flex-col gap-1">
             <div className="d-flex gap-05 alignItem-c">
               <label className="d-flexSeld " htmlFor="name" >Name:</label>
               <input className="p-05-1  outline-none" type="text" name="name" value={name} onChange={(e) => settingName(e.target.value)} />
             </div>

             <div className="gap-05" >
                <label htmlFor="comment">Kommentar:</label>
                <textarea className="w-100p minH-5 borderR-05 resize-none outline-none p-1" type="text" name="comment" value={comment} onChange={(e) => settingComment(e.target.value)}  />
             </div>
        </div>

        <button type="submit" className="mt-1 p-05-1 mb-2 bg-blue fontC-w fontW-b fontS-md borderR-05">Senden</button>
      </form>
      {comments.map((comment,id) =>(
        <SingleComment key={id} comment={comment}/>
      ))}

    </div>

  )
}

const CommentsLoader = async () => {
  const res = await fetch('/api/comments')
  const data = await res.json()
  return data
}

export {CommentsPage as default , CommentsLoader }
