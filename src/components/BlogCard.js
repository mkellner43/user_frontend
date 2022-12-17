const BlogCard = (props) => {
  const {author, title, blog_post, date} = props
  return (
      <div className='blog--card'>
        <div className="flex-r">
          <p>{author}</p>
          <p>{date}</p>
        </div>
        <h2 className='center'>{title}</h2>
        <p className='mt-1'>{blog_post}</p>
      </div>
  )
}

export default BlogCard;