import React, { useContext } from 'react'
import { Cart } from '../context/Context';
import { Filter } from '../components/Filter';
import { Container, Row } from 'react-bootstrap';
import SingleProduct from '../components/SingleProduct';

const Home = () => {
    const { state, dispatch } = useContext(Cart);
    // console.log(state)
    console.log(state.products)
    return (
        <Container fluid>
            <Filter />
            <div className='all-products-list'>
                <Row xs={1} sm={2} md={3} lg={4} className="gx-4 gy-4">
                    {
                        state.products.map((items, index) => {
                            return (
                                <SingleProduct items={items} key={index} />
                            )
                        })
                    }
                </Row>
            </div>
        </Container>
    )
}

export default Home
