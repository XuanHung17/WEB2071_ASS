import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
    return (
     <div className="main-banner" id="home">
  {/* header */}
  <header className="header">
    <div className="container-fluid px-lg-5">
      {/* nav */}
      <nav className="py-4">
        <div id="logo">
          <h1> <a href="index.html"><span className="fa fa-bold" aria-hidden="true" />ootie</a></h1>
        </div>
        <label htmlFor="drop" className="toggle">Menu</label>
        <input type="checkbox" id="drop" />
        <ul className="menu mt-2">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to ='about'>About</Link> </li>
          <li><a href="blog.html">Blog</a></li>
          <li>
            {/* First Tier Drop Down */}
            <label htmlFor="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true" /> </label>
            <a href="#">Drop Down <span className="fa fa-angle-down" aria-hidden="true" /></a>
            <input type="checkbox" id="drop-2" />
            <ul>
              
              <li><Link to ='Shop'>Shop</Link> </li>
              <li><a href="shop-single.html">Single Page</a></li>
            </ul>
          </li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      {/* //nav */}
    </div>
  </header>
  {/* //header */}
  {/*/banner*/}
  <div className="banner-info">
    <p>Trending of the week</p>
    <h3 className="mb-4">Casual Shoes for Men</h3>
    <div className="ban-buttons">
      <a href="shop-single.html" className="btn">Shop Now</a>
      <a href="single.html" className="btn active">Read More</a>
    </div>
  </div>
  {/*// banner-inner */}
</div>

    )
}

Header.propTypes = {

}

export default Header
