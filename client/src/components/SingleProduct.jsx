import React, { useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import Rating from './Rating';
import { useContext } from 'react';
import { Cart, Loading } from '../context/Context';
import Skeleton from 'react-loading-skeleton'

const SingleProduct = ({ items }) => {
    const { state, dispatch } = useContext(Cart);
    const { isLoading } = useContext(Loading)
    
    useEffect(() => {
        localStorage.setItem('carts', JSON.stringify(state.cart));
    }, [state.cart])
    return (
        <Col>
            {
                !isLoading ? (
                    <Card>
                        <div className='product-img-container'>
                            <Card.Img variant="top" src={items.image} />
                        </div>
                        <Card.Body>
                            <Card.Title>{items.name}</Card.Title>
                            <Card.Text>
                                ₹ {(items.price).split('.')[0]}
                            </Card.Text>
                            <Card.Text className='d-flex'>
                                <Rating rate={items.ratings} />
                            </Card.Text>
                            {items.fastDelivery ? (
                                <Card.Text>
                                    Fast Delivery
                                </Card.Text>
                            ) : (
                                <Card.Text>
                                    4 days Delivery
                                </Card.Text>
                            )}
                            {
                                state.cart.some(c => c._id === items._id) ? (
                                    <Button onClick={() => {
                                        dispatch({
                                            type: 'Remove_From_Cart',
                                            payload: items._id
                                        })
                                    }} variant='danger'>Remove From Cart</Button>
                                ) : (
                                    <Button onClick={() => {
                                        dispatch({
                                            type: 'Add_To_Cart',
                                            payload: items
                                        })
                                    }} disabled={!items.inStock} variant={items.inStock ? "primary" : "secondary"}>
                                        {items.inStock ? "Add to Cart" : "Out of  Stock"}
                                    </Button>
                                )
                            }
                        </Card.Body>
                    </Card>
                ) : (
                    <Card>
                        <div className='product-img-container'>
                            <Skeleton width="100%" height={220} />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <Skeleton count={4} />
                            </Card.Title>
                            <Card.Text>
                                <Skeleton count={1} width={50} />
                            </Card.Text>
                            <Card.Text className='d-flex'>
                                {[1, 2, 3, 4, 5].map((index) => {
                                    return (
                                        <Skeleton key={index} height={20} width={20} className='me-2' />
                                    )
                                })
                                }
                            </Card.Text>
                            <Card.Text>
                                <Skeleton count={1} width={80} />
                            </Card.Text>
                            <Skeleton height={40} width={110} />
                        </Card.Body>
                    </Card>
                )
            }
        </Col>
    )
}

export default SingleProduct
