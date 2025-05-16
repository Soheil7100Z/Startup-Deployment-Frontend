import { useLoaderData } from "react-router-dom"
import SingleComment from "../components/SingleComment"
import { useState } from "react"

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
    <div>
      <form onSubmit={commentSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={(e) => settingName(e.target.value)} />

        <label htmlFor="comment">Kommentar</label>
        <textarea type="text" name="comment" value={comment} onChange={(e) => settingComment(e.target.value)}  />

        <button type="submit">Senden</button>
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
