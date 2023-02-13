import React from 'react'
import "../App.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <small className='author'>{new Date().getFullYear()} David Thumbi</small>
        <div className="nav">
            <a href="">Archive</a>
            <a href="">Policy</a>
            <a href="">Terms</a>
        </div>
    </footer>
  )
}

export default Footer