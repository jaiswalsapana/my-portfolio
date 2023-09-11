import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Form from '../All common/Form';
import Footer from "../Components/Footer";
const Contact = (props) => {

  return (
      <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Sapna .</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='menu_active' aria-current="page" to='/home'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='menu_active' to='/about'>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='menu_active' to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Form/>
    <Footer/>
      </>
  )
}

export default Contact