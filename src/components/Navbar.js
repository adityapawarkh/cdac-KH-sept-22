import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
    <div>
      <section id="header">
        <Link to="/"><img src="/accet/img/logo.png" className="logo" alt="Logo"/></Link>
        <div>
            <ul id="navbar">
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li id="lg-bag"><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
                <Link to="/" id="close"><i className="fa-solid fa-xmark"></i></Link>
            </ul>
        </div>
        <div id="mobile">
            <Link to="/Cart"><i className="fas fa-shopping-cart"></i></Link>
            <i id="bar" className="fas fa-outdent"></i>
        </div>
    </section>
   
    </div>
  )
}
