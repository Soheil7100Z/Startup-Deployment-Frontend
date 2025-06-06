function SingleComment({comment}) {

  const delComment = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/comments-delete` , {
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(comment),
      })
         if(res.ok) {
            window.location.reload();
        }else {
          alert('Wer are experiencing server issues. Please try again later.')
          navigate('/')
        }
    }
      catch (error) {
        console.error('there is an error:', error)
      }
  }

  return (

      <div className="mt-2">
        <div className="fontW-b">Name: {comment.name}</div>
        <div className="mt-1">{comment.title}</div>
        <button className="mt-1 p-05-1 bg-blue fontC-w fontW-b fontS-n bg-red borderR-03 border-none hover"
        onClick={delComment}>Entfernen</button>
      </div>

  )
}

export default SingleComment
