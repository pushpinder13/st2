import React, { useContext, useEffect } from "react";
import './CartFooter.css';
import { MovieContext } from "../Context/MovieContext";
import { useNavigate } from "react-router-dom";

const CartFooter = ()=>{
    const {getToCartDefault,getToCartDefault1,setCartItems,setCartItem,cartItems,cartItem} = useContext(MovieContext);
    const t1 = getToCartDefault();
    const t2 = getToCartDefault1();
    console.log("price of food", t2);
    console.log("price of movie", t1);
    const navigate = useNavigate();
    const handleCont = ()=>{
        navigate('/movies')
    }

    const hanldeCheckout = ()=>{
       
        
        navigate('/')
        alert("Order Placed!! Thank you for visiting :)");
        window.location.reload();

    }

    return(
        <>
        <div  className="cFWrapper">
            <div className="cFContainer">
                <span style={{
                    marginLeft:" 10px",
                    fontSize:"18px",
                    marginTop:"20px"
                }}>YOUR TOTAL AMOUNT FOR MOVIE AND FOOD :-)</span>
                <span style={{
                    marginLeft:" 10px",
                    marginTop:"20px"
                }}>{t1+t2}</span>
                <button onClick={handleCont}>Continue</button>
                <button onClick={hanldeCheckout}>CheckOut</button>
            </div>
        </div>
        </>
    )
}

export default CartFooter;