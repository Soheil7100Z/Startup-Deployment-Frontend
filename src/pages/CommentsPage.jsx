import { useLoaderData } from "react-router-dom"
import Comments from "../components/Comments"
import { useEffect } from 'react'

const CommentsPage = ({addcomment}) => {

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    
    const comments = useLoaderData()

  return (

      <Comments comments={comments} addcomment={addcomment} />

  )
}

const CommentsLoader = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/comments`)
  const data = await res.json()
  return data
}

export {CommentsPage as default , CommentsLoader }
