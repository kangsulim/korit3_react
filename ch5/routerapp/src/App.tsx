import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import ContactBusan from './components/ContactBusan'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='contact' element={<Contact />}>
            <Route path='busan' element={<ContactBusan />}></Route>
          </Route>

          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
