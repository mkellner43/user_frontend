import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { format, parseISO } from 'date-fns';

const Home = () => {
  const [blogData, setBlogData] = useState([])

  const cards = () => {

    return blogData.map(blog => 
      <NavLink 
        key={blog._id}
        to={`/blog/${blog._id}`}
        state= {blog}
        className='logo m-1'
      >
        <BlogCard 
          key={blog._id}
          author={blog.author.username}
          title={blog.title}
          blog_post={blog.blog_post}
          date={format(parseISO(blog.date), "LLL dd, yyyy", "UTC")}
          id={blog._id}
          />
      </NavLink>
      )
  }
  useEffect(() => {
    fetch('http://localhost:3000/blog',
      { mode: 'cors', headers: {'Content-Type': 'application/json'}
    })
    .then((res) => res.json())
    .then((json) => setBlogData(json))
  }, [])
  return (
    <section className="blog--cards mt-3 mb-1">
      {cards()}
    </section>
  )
}

export default Home;