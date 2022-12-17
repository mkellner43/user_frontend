const CommentCard = (props) => {
  const {author, comment, date} = props
  return (
    <div className='blog--card mt-1'>
        <h2 className='center'>{author}</h2>
        <p>{date}</p>
        <p>{comment}</p>
      </div>
  )
}

export default CommentCard;