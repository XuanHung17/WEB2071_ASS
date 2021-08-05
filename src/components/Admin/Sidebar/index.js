import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PropTypes from 'prop-types'

const Sidebar = props => {
    return (
    <div>
  <div className="sidebar-menu">
    <div className="logo"> <a href="#" className="sidebar-icon"> <span className="fa fa-bars" /> </a> <a href="#"> <span id="logo" /> 
        {/*<img id="logo" src="" alt="Logo"/>*/} 
      </a> </div>		  
    <div className="menu">
      <ul id="menu">
        <li id="menu-home"><Link to="/admin"><i className="fa fa-tachometer" /><span>Dashboard</span></Link></li>
       
        <li id="menu-comunicacao"><a href="#"><i className="fa fa-book nav_icon" /><span>Element</span><span className="fa fa-angle-right" style={{float: 'right'}} /></a>
          <ul id="menu-comunicacao-sub">
            
            <li id="menu-arquivos"><a href="typography.html">Typography</a></li>
            <li id="menu-arquivos"><a href="icons.html">Icons</a></li>
          </ul>
        </li>
        <li><a href="maps.html"><i className="fa fa-map-marker" /><span>Maps</span></a></li>
        <li id="menu-academico"><a href="#"><i className="fa fa-file-text" /><span>Pages</span><span className="fa fa-angle-right" style={{float: 'right'}} /></a>
          <ul id="menu-academico-sub">
            <li id="menu-academico-boletim"><a href="login.html">Login</a></li>
            <li id="menu-academico-avaliacoes"><a href="signup.html">Sign Up</a></li>		           
          </ul>
        </li>
     
        
        <li><a href="#"><i className="fa fa-cog" /><span>System</span><span className="fa fa-angle-right" style={{float: 'right'}} /></a>
          <ul id="menu-academico-sub">
            <li id="menu-academico-avaliacoes"><a href="404.html">404</a></li>
            <li id="menu-academico-boletim"><a href="blank.html">Blank</a></li>
          </ul>
        </li>
        <li><a href="#"><i className="fa fa-shopping-cart" /><span>E-Commerce</span><span className="fa fa-angle-right" style={{float: 'right'}} /></a>
          <ul id="menu-academico-sub">
            <li id="menu-academico-avaliacoes"><Link to="/admin/products">Sản Phẩm</Link></li>
            <li id="menu-academico-avaliacoes"><Link to="/admin/add">Thêm Sản Phẩm</Link></li>
            <li id="menu-academico-boletim"><a href="price.html">Price</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div className="clearfix"> </div>
</div>

    )
}

Sidebar.propTypes = {

}

export default Sidebar
