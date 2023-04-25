import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Rating from './Rating'
import { useState } from 'react';

export const Filter = () => {
    const [rate, setRate] = useState();
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
                    />
                </Col>
                <Col className='my-2'>
                    <Form.Check
                        required
                        label="Descending"
                        type='radio'
                        name='group1'
                        id={`inline-2`}
                    />
                </Col>
                <Col className='my-2'>
                    <Form.Check
                        required
                        label="Include out of Stock"
                        type='checkbox'
                        name='group1'
                        id={`inline-3`}
                    />
                </Col>
                <Col className='my-2'>
                    <Form.Check
                        required
                        label="Fast Delivery Only"
                        type='checkbox'
                        name='group1'
                        id={`inline-4`}
                    />
                </Col>
                <Col className='my-2'>
                    <span className='d-flex'>
                        <label>Ratings:</label>
                        <Rating rate={rate} setRate={setRate}/>
                    </span>
                </Col>
                <Button className='my-2'>Clear Filter</Button>
            </Row>
        </Container>
    )
}
