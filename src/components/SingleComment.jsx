function SingleComment({comment}) {

  const delComment = async () => {
    console.log(" delComment function called");
      try {
        const res = await fetch('/api/comments-delete' , {
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(comment),
      })

      }catch (error) {
        console.error('there is an error:', error)
      }
  }

  const relaoding  = () =>  {
    setTimeout(() => {
       window.location.reload();
    }, 50);
  }

  return (

      <div className="mt-2 ml-2">
        <div className="fontW-b">Name: {comment.name}</div>
        <div className="mt-1">{comment.title}</div>
        <button className="mt-1 p-05-1 bg-blue fontC-w fontW-b fontS-n bg-red borderR-05 border-none hover"
        onClick={() => {delComment(),relaoding()}}>Entfernen</button>
      </div>

  )
}

export default SingleComment
