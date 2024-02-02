import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className = {navLinkText}><b>Home</b></Link></li>
          <li className={navLinkItem}><Link to="/about" className = {navLinkText}><b>About</b></Link></li>
          <li className={navLinkItem}><Link to="/services" className = {navLinkText}><b>Services</b></Link></li>
          <li className={navLinkItem}><Link to="/blogs" className = {navLinkText}><b>Blogs</b></Link></li>

        </ul>
      </nav>
      <main>
        <h1 className ={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout