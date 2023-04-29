import React, { useContext } from 'react'
import { Cart } from '../context/Context';
import { Filter } from '../components/Filter';
import { Container, Row } from 'react-bootstrap';
import SingleProduct from '../components/SingleProduct';

const Home = () => {
    const { state, ProductFilter } = useContext(Cart);

    const NewProducts = () => {
        let sortedProducts = state.products
        if (ProductFilter.sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                ProductFilter.sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
            )
        }

        if (ProductFilter.byStock) {
            sortedProducts = sortedProducts.filter((items) => items.inStock)
        }

        if (ProductFilter.byFastDelivery) {
            sortedProducts = sortedProducts.filter((items) => items.fastDelivery)
        }

        if (ProductFilter.byRating) {
            sortedProducts = sortedProducts.filter((items) => items.ratings === ProductFilter.byRating)
        }

        if (ProductFilter.searchQuery) {
            sortedProducts = sortedProducts.filter((items) => items.name.toLowerCase().includes(ProductFilter.searchQuery))
        }
        return sortedProducts;
    }

    return (
        <Container fluid>
            <Filter />
            <div className='all-products-list'>
                <Row xs={1} sm={2} md={3} lg={4} className="gx-4 gy-4">
                    {
                        NewProducts().map((items, index) => {
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
