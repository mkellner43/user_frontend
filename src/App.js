import './styles/App.css';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Blog from './components/Blog';

function App() {
  return (
    <>
    <Nav />
    <section className="display-image">
      {/* some impressive visual content */}
      <h1>Impressive Display Image</h1>
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