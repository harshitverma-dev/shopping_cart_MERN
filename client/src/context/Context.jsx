import React, { createContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { cartReducer, filterReducer } from './Reducers';

export const Cart = createContext();
export const Loading = createContext();

const Context = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:1000/api/products").then((res) => {
        
            dispatch({
                type: "Get_Products",
                payload: res.data.productData
            })
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)

        }).catch(err => {
            console.log(err)
        })
    }, [])

  
    const [state, dispatch] = useReducer(cartReducer, {
        products: [],
        cart: JSON.parse(localStorage.getItem("carts")) || []
    });

  
    const [ProductFilter, ProductFilterDispatch] = useReducer(filterReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ""
    })

    return (
        <Cart.Provider value={{ state, dispatch, ProductFilter, ProductFilterDispatch }}>
            <Loading.Provider value={{ isLoading, setIsLoading }}>
                {children}
            </Loading.Provider>
        </Cart.Provider>
    )
}

export default Context
