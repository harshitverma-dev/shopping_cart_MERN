import React, { createContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import { cartReducer } from './Reducers';
import { faker } from '@faker-js/faker';

export const Cart = createContext();

const Context = ({ children }) => {
    // const [Products, setProducts] = useState([])

    // const productsget = [...Array(20)].map(() => ({
    //     id: faker.datatype.uuid(),
    //     name: faker.commerce.productName(),
    //     price: faker.commerce.price(),
    //     image: faker.image.transport(),
    //     isStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    //     fastDelivery: faker.datatype.boolean(),
    //     ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    // }))
    // console.log(productsget)
    useEffect(() => {
        axios.get("http://localhost:1000/api/products").then((res) => {
            // console.log(res.data.productData);
            // setProducts(res.data.productData);
            dispatch({
                type: "Get_Products",
                payload: res.data.productData
            })
        }).catch(err => {
            console.log(err)
        })
    }, [])

    // console.log(products)
    const [state, dispatch] = useReducer(cartReducer, {
        products: [],
        cart: JSON.parse(localStorage.getItem("carts")) || []
    });

    // console.log(state)
    const [ProductFilter, ProductFilterDispatch] = useReducer(filterReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ""
    })

    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export default Context
