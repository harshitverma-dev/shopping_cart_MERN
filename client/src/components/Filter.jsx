import React, { useContext } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Rating from './Rating'
import { Cart } from '../context/Context';

export const Filter = () => {
    const { ProductFilter, ProductFilterDispatch } = useContext(Cart)
    return (
        <Container fluid className='my-2'>
            <Row xs={1} sm={2} md={3} lg={4} >
                <Col className='my-2'>
                    <Form.Check
                        inline
                        label="Ascending"
                        type='radio'
                        name='group1'
                        id={`inline-1`}
                        onChange={() => {
                            ProductFilterDispatch({
                                type: "Sort_By_Price",
                                payload: "lowToHigh"
                            })
                        }}
                        checked={ProductFilter.sort === "lowToHigh" ? true : false}
                    />
                </Col>
                <Col className='my-2'>
                    <Form.Check
                        required
                        label="Descending"
                        type='radio'
                        name='group1'
                        id={`inline-2`}
                        onChange={() => {
                            ProductFilterDispatch({
                                type: "Sort_By_Price",
                                payload: "highToLow"
                            })
                        }}
                        checked={ProductFilter.sort === "highToLow" ? true : false}
                    />
                </Col>
                <Col className='my-2'>
                    <Form.Check
                        required
                        label="Include out of Stock"
                        type='checkbox'
                        name='group1'
                        id={`inline-3`}
                        onChange={() => {
                            ProductFilterDispatch({
                                type: "Filter_By_Stock",
                            })
                        }}
                        checked={ProductFilter.byStock}
                    />
                </Col>
                <Col className='my-2'>
                    <Form.Check
                        required
                        label="Fast Delivery Only"
                        type='checkbox'
                        name='group1'
                        id={`inline-4`}
                        onChange={() => {
                            ProductFilterDispatch({
                                type: "Filter_By_Delivery"
                            })
                        }}
                        checked={ProductFilter.byFastDelivery}
                    />
                </Col>
                <Col className='my-2'>
                    <span className='d-flex'>
                        <label>Ratings:</label>
                        <Rating
                            rate={ProductFilter.byRating}
                            ProductFilter={ProductFilter}
                            ProductFilterDispatch={ProductFilterDispatch} />
                    </span>
                </Col>
                <Button className='my-2' onClick={() => {
                    ProductFilterDispatch({
                        type: "Clear_Filters"
                    })
                }}>Clear Filter</Button>
            </Row>
        </Container>
    )
}
