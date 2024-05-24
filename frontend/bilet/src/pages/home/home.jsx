import React from "react";
import "./home.scss";
import { RxAvatar } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Hero from '../hero/Hero'
import Herob from "../herobottom/Herob";
import Card from '../cardside/Card'
import Products from "../Products/Products";
import Sale from '../bigSale/Sale'

function Home() {
  return (
    <>
      <div className="navbar">
        <div className="navtopside">
          <div className="searchside">
            <CiSearch className="srchicon" />
            <input className="srch" placeholder="search" type="text" />
          </div>
          <div>
            <button className="middlebtn" >SHOPPERS</button>
          </div>
          <div className="rightsideicons">
            <RxAvatar className="iconavatar" />
            <CiHeart className="iconavatar" />
            <SlBasket className="iconavatar" />
          </div>
        </div>
        <div className="navbottomside">
          <h3 className="infolane" >ALL INFO</h3>
        <Link className="colorhome" to='/'>HOME</Link>
        <Link className="colorside" to='/'>ABOUT</Link>
        <Link className="colorside" to='/'>SHOP</Link>
        <Link className="colorside" to='/'>CATALOGUE</Link>
        <Link className="colorside" to='/'>NEW ARRIVALS</Link>
        <Link className="colorside" to='/'>CONTACT</Link>
        <Link className="colorside" to='/'>BASKET</Link>
        <Link className="colorside" to='/'>WISHLIST</Link>

        </div>
      </div>
      <Outlet />
      <Hero/>
      <Herob/>
      <Card/>
      <Products/>
      <Sale/>
    </>
  );
}

export default Home;
