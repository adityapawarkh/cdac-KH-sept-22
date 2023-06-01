import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
      <header>
        <a href="/">Logo</a>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
                <li>
                <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
     </header>
     <section>
      <h1>This is about</h1>
     </section>
    </div>
  )
}

export default About
