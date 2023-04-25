import React from 'react'
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const Rating = ({ rate, setRate }) => {
    return (
        [...Array(5)].map((_, index) => (
            <div className='mx-1'>
                <span key={index} onClick={() => setRate(index + 1)} style={{cursor:'pointer'}}>
                    {
                        rate > index ? <AiTwotoneStar /> : <AiOutlineStar />
                    }
                </span>
            </div>
        ))

    )
}

export default Rating
