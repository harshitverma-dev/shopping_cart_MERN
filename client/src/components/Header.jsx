import React, { useContext } from 'react'
import { NavDropdown, Navbar, Nav, Form, Container, Button, Badge, Image, Row, Col, NavLink } from 'react-bootstrap'
import { CiShoppingCart } from "react-icons/ci";
import { Cart } from '../context/Context';
import { AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom/dist';
import Rating from './Rating';

const Header = () => {
    const { state, dispatch } = useContext(Cart);
    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/home" style={{ textDecorationLine: "none" }}>
                    <Navbar.Brand>Shopping Cart</Navbar.Brand>
                </Link>
                <Form>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Nav
                    className="my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavDropdown title={<><CiShoppingCart size={26} /><Badge>{state.cart.length}</Badge></>} id="navbarScrollingDropdown" align={'end'} className='cart-popup'>
                        {
                            state.cart.length > 0 ?
                                state.cart.map((items) => {
                                    return (
                                        <div className='d-flex justify-content-between mb-3' style={{ width: "20rem" }}>
                                            <span className='d-flex'>
                                                <img width={80} height={60} src={items.image} className='me-2' />
                                                <div className='d-flex flex-column'>
                                                    <div>{items.name}</div>
                                                    {items.price} <span className='d-flex'><Rating rate={items.ratings} /></span>
                                                </div>
                                            </span>
                                            <span>
                                                <AiOutlineDelete size={20} style={{ cursor: "pointer" }} onClick={() => {
                                                    dispatch({
                                                        type: "Remove_From_Cart",
                                                        payload: items._id
                                                    })
                                                }} />
                                            </span>
                                        </div>
                                    )
                                }) :
                                <div>
                                    <p>No item is avaliable in the Cart</p>
                                </div>
                        }
                        <Button className="mt-1 w-100" variant='primary' onClick={() => navigate('/cart')}>Go to Cart</Button>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
