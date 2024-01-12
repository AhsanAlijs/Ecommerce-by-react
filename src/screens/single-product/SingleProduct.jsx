import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Single from '../../components/single/Single';

const SingleProduct = () => {
    const params = useParams()
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => {
                setData(res.data)
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className='flex justify-center mt-[20px] mb-[20px]'>
                {data ? <Single title={data.title}
                    description={data.description}
                    category={data.category}
                    price={data.price}
                    src={data.image} /> : <span className="loading loading-bars loading-lg flex items-center justify-center text-[#fff] h-[90vh]"></span>}
            </div>
        </>
    )
}

export default SingleProduct