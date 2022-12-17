import { useState, useEffect } from "react"
import CommentCard from "./CommentCard"
import { format, parseISO } from 'date-fns';

const Comment = (props) => {
  const {blog} = props
  const [comment, setComment] = useState('')
  const [author, setAuthor] = useState('')
  const [commentData, setComments] = useState([])

  const handleChange = (e) => {
    e.target.name === 'comment' ?
      setComment(e.target.value) 
      :
      setAuthor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {comment: e.target.form.comment.value, author: e.target.form.author.value}
    fetch(`http://localhost:3000/comment/${blog}`,
      { method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
      setComments(prevState => [
      <CommentCard 
        key={data.comment._id}
        author={data.comment.author}
        comment={data.comment.comment}
        date={format(parseISO(data.comment.date), "LLL dd, yyyy", "UTC")}
      />,...prevState])
      setComment('');
      setAuthor('');
    })
    .catch((error) => {
      console.error("Error:", error)
    })
  }

  useEffect(() => {
    fetch(`http://localhost:3000/comment/${blog}`,
      { mode: 'cors', headers: {'Content-Type': 'application/json'}
    })
    .then((res) => res.json())
    .then((json) => setComments(
      json.comments.map(comment => 
        <CommentCard 
          key={comment._id}
          author={comment.author}
          comment={comment.comment}
          date={format(parseISO(comment.date), "LLL dd, yyyy", "UTC")}
        />
      )
    ))
  }, [blog])

  return (
    <section className="comments">
      <div className="comment-cards">
        {commentData}
      </div>
      <form action={`http://localhost:3000/comment/${blog}`} method="post" className="form--comments mb-1">
        <h3>Post a comment</h3>
        <input name='author' value={author} onChange={handleChange} className="comment--input mt-1" placeholder="Name"/>
        <input name='comment' value={comment} onChange={handleChange} className="comment--input mt-1" placeholder="💬..."/>
        <button className="btn mt-1" type="submit" onClick={handleSubmit}>Comment</button>
      </form>
    </section>
  )
}
export default Comment;