import  React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/" className="white">Home</Link> | <Link style={linkStyle} to="/about" className="white">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '10px',
}

const linkStyle = {
  color: 'red',
  textDecoration: 'none'
}

export default Header;