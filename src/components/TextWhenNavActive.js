const TextWhenNavActive = ({display}) => {
  return (
    <div className={display ? "nav-items": 'nav-items-hide'}>
      <ul className="nav-list">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </div>
  )
}

export default TextWhenNavActive;