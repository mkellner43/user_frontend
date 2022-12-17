import {useLocation} from 'react-router-dom'
import Comment from './Comment';
import { format, parseISO } from 'date-fns';

const Blog = () => {
  let {state} = useLocation();
  return (
    // <section className='center mt-1'>
    //   <div className='blog-info'>
    //     <p>{state.author.username}</p>
    //     <p>{format(parseISO(state.date), "LLL dd, yyyy", "UTC")}</p>
    //     <h2>{state.title}</h2>
    //     <p>{state.blog_post}</p>
    //   </div>
    //     <Comment blog={state._id}/>
    // </section>
    <section className='container mt-1'>
      <h1 className='mt-1'>Admin Blog Access</h1>
      <div className='blog_post mt-1'>
        <div className='author-container'>
          <p>{state.author.username}</p>
          <p>{format(parseISO(state.date), "LLL dd, yyyy", "UTC")}</p>
        </div>
        <h2 className='mt-1'>{state.title}</h2>
        <p className='mt-2'>{state.blog_post}</p>
      </div>
      <div className='mt-1'>
        <h2 className='center'>Comments</h2>
        <Comment blog={state._id}/>
      </div>
    </section>
  )
}

export default Blog;