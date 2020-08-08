import React from 'react'
import './Header.css';
import {Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
    <nav className='header'>
       <Link to='/'>
           <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"alt=""/>
       </Link>
       <div className="header_search">
         <input type="text" className="header_searchInput"/>
          <SearchIcon className="header_searchIcon"/>
       </div>
       <div className="header_nav">

           <Link to="/login" className="header_link">
                <div className='header_option'>
                  <span className='header_optionLineone'>hello sooraj</span>
                  <span className='header_optionLinetwo'>Sign In</span>
                </div>
           </Link>

           <Link to="/" className="header_link">
                <div className='header_option'>
                  <span className='header_optionLineone'>Returns</span>
                  <span className='header_optionLinetwo'>Order</span>
                </div>
           </Link>

           <Link to="/" className="header_link">
                <div className='header_option'>
                  <span className='header_optionLineone'>Your</span>
                  <span className='header_optionLinetwo'>Prime</span>
                </div>
           </Link>

           <Link to="/checkout" className="header_link">
               <div className="header_optionBasket">
               <ShoppingBasketIcon/>
               <span  className='header_optionLinetwo header_basketCount'>0</span>
               </div>

           </Link>s


       </div>
    </nav>
    );
}

export default Header