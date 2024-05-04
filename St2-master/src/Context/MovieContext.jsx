import React, { createContext, useState } from "react";
import { movieitems ,fooditems} from "../Data";
export const MovieContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {}
    for(let i=1;i<=movieitems.length+1;i++){
        cart[i] = 0;
    }
    return cart;
}
const getDefaultFoodCart = ()=>{
    let foodCart = {}
    for(let i=1;i<=fooditems.length+1;i++){
        foodCart[i]=0;
    }
    return foodCart;
}

export const MovieContextProvider = (props)=>{
    const[cartItems,setCartItems] = useState(getDefaultCart());
    // const[cartData,setCartData] = useState(cart)

    const getToCartDefault = ()=>{
        let totalAmount = 0;
        for(const i in cartItems){
            if(cartItems[i]>0){
                let itemInfo = movieitems.find((data)=>data.id === Number(i));
                totalAmount+=cartItems[i]*itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    const[cartItem,setCartItem] = useState(getDefaultFoodCart())
    const addToFoodCart = (item)=>{
        setCartItem((pre)=>({...pre,[item]:pre[item]+1}))
    }

    const removeFromFoodCart = (item)=>{
        setCartItem((pre)=>({...pre,[item]:pre[item]-1}))
    }
    const getToCartDefault1 = ()=>{
        let totalAmount1 = 0;
        for(const i in cartItem){
            if(cartItem[i]>0){
                let itemInfo1 = fooditems.find((data)=>data.id === Number(i));
                totalAmount1+=cartItem[i]*itemInfo1.price;
            }
        }
        return totalAmount1;
    };


    const contextValue = {addToCart, removeFromCart, cartItems,getToCartDefault,addToFoodCart,removeFromFoodCart,cartItem,getToCartDefault1,setCartItem,setCartItems}

    console.log("cartItem on click", cartItems)
    console.log("FoodItem on click", cartItem)
   
    return(
        <>
        <MovieContext.Provider value={contextValue}>
            {props.children}
            </MovieContext.Provider>
        </>
    )
}

