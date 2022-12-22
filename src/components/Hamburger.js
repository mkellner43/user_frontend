const Hamburger = ({navActive, setActive}) => {
  const animate = (e) => {
    setActive(prevState => !prevState)
  }
  const moveBars = (e) => {
    if(navActive) return
    e.target.children[0].classList.add('move')
    e.target.children[2].classList.add('move')
  }
  const unMoveBars = (e) => {
    e.target.children[0].classList.remove('move')
    e.target.children[2].classList.remove('move')
  }
  return (
    <section className='hamburger' onClick={animate} onMouseEnter={moveBars} onMouseLeave={unMoveBars}>
        <span className={navActive ? 'ham-1-active' : 'ham-1'}></span>
        <span className={navActive ? 'ham-2-active' : 'ham-2'}></span>
        <span className={navActive ? 'ham-3-active' : 'ham-3'}></span>
    </section>
  )
}

export default Hamburger;