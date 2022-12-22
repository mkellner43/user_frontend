import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
const Nav = ({navActive, setActive}) => {
  const [search, setSearch] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault()
      fetch('http://localhost:3000/blog/:title',
        { mode: 'cors', headers: {'Content-Type': 'application/json'}
      })
      .then((res) => res.json())
      .then((json) => setSearch(json))
  }

  return (
    <nav className="nav">
      <section className="nav--right">
      <Hamburger navActive={navActive} setActive={setActive}/>
        <h1><Link to="/" className='logo' >Matt's Blog</Link></h1>
      </section>
      <section className="nav--right pr-2">
        <input 
          className="nav--search" 
          placeholder="Search...🔎" 
          value={search} onChange={handleChange}
        />
        <button className="btn btn--search" onClick={handleClick}>Search</button>
      </section>
    </nav>
  )
}

export default Nav;