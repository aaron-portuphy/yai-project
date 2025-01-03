import './App.css'
import Layout from './components/layout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Shop from './pages/shop.jsx'
import Blog from './pages/blog.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Cart from './pages/cart.jsx';
import Login from './pages/login.jsx'
import Wishlist from './pages/wishlist.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='blog' element={<Blog />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<Login />} />
          <Route path='wishlist' element={<Wishlist />} />
        </Route>
      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
