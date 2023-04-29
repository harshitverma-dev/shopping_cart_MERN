import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../context/Context';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Rating from '../components/Rating';
import { AiOutlineDelete } from "react-icons/ai";
import ItemsSelect from '../components/ItemsSelect';

const CartPage = () => {
    const { state, dispatch } = useContext(Cart);
    const [total, setTotal] = useState()
    const onChange = (e, _id) => {
        dispatch({
            type: "Change_Cart_Qty",
            payload: {
                _id: _id,
                qty: e.target.value
            }
        })
    }

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < state.cart.length; index++) {
            sum += Number(state.cart[index].price.split('.')[0]) * state.cart[index].qty;
        }
        setTotal(sum)
    }, [state.cart])
    return (
        <Container>
            {
                state.cart.length > 0 ?
                    state.cart.map((cartItems, index) => {
                        const { image, name, price, ratings } = cartItems;
                        return (
                            <Row className='cart-items p-2 my-2' key={index}>
                                <Col lg={8} className='d-flex'>
                                    <img src={image} width={80} height={60} alt='cart-img'/>
                                    <span class="mx-3">{name}</span>
                                    <span class="mx-4">₹ {price.split('.')[0]}</span>
                                    <span className='d-flex mx-3'>
                                        <Rating rate={ratings} />
                                    </span>
                                </Col>
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={10}>
                                            <ItemsSelect
                                                value={cartItems.qty}
                                                items={cartItems.inStock}
                                                onChange={(e) => onChange(e, cartItems._id)}
                                            />
                                        </Col>
                                        <Col lg={2}>
                                            <AiOutlineDelete size={20} style={{ cursor: "pointer" }} onClick={() => {
                                                dispatch({
                                                    type: "Remove_From_Cart",
                                                    payload: cartItems._id
                                                })
                                            }} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )
                    }) :
                    <>
                        <Row className='empty-cart-items p-2 my-2'>
                            <Col xs={12}>
                                <h4>Cart Items are not avaliable !</h4>
                            </Col>
                        </Row>
                    </>
            }
            {
                state.cart.length !== 0 && <Row className='d-flex align-items-center total-container p-2 my-2'>
                    <Col lg={6}>
                        <h5>{`SubTotal ${state.cart.length} Items`}</h5>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-end align-items-center">
                        <span>Total: ₹ {total}</span>
                        <Button varient="primary" className='ms-4'>Checkout</Button>
                    </Col>
                </Row>
            }
        </Container>
    )
}

export default CartPage
