import React from 'react'
import "./Navbar.css"
import {useState} from "react";
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu,setMenu]=useState("Home");
  return (
    <div className='navbar'>
        <img src="https://4.imimg.com/data4/HY/FF/MY-7045368/restaurant-management-software-500x500.png" alt="" className="logo"/>
            <ul className="navbar-menu">
                <Link to="/"onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
                <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
                <a href="#app-downlaod" onClick={()=>setMenu("About us")} className={menu==="About us"?"active":""}>About</a>
                <a href="#footer" onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=""/>
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt=""/>
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
    </div>
  )
}
export default Navbar;
