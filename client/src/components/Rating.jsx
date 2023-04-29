import React from 'react'
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const Rating = ({ rate, ProductFilter, ProductFilterDispatch }) => {
    return (
        [...Array(5)].map((_, index) => (
            <div className='mx-1'>
                <span key={index} onClick={() => {
                    ProductFilterDispatch({
                        type: "Filter_By_Rating",
                        payload: index + 1
                    })
                }} style={{ cursor: 'pointer' }}>
                    {
                        rate > index ? <AiTwotoneStar /> : <AiOutlineStar />
                    }
                </span>
            </div>
        ))

    )
}

export default Rating
