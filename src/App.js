import './styles/App.css';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Blog from './components/Blog';
import TextWhenNavActive from './components/TextWhenNavActive';


function App() {
  const [navActive, setActive] = useState(false);

  return (
    <>
    <Nav navActive={navActive} setActive={setActive}/>
    <TextWhenNavActive display={navActive}/>
    <section className={navActive ? "navActive" : 'display-image'}>
      <h1>Welcome!</h1>
    </section>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='blog'>
        <Route path=':id' element={<Blog />}/>
      </Route>
    </Routes>
    </>
  );
}
export default App;