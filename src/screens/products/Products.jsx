import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../../components/cards/Cards';

const Products = () => {
    const params = useParams();
    console.log(params);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <div className='flex justify-evenly flex-wrap mt-[20px] gap-[20px] mb-[10px]'>
                {data.length > 0 ? data.map((item) => {
                    return <Cards key={item.id} title={item.title}
                        description={item.description}
                        src={item.image} price={`${item.price}$`}
                        id={item.id} />
                }) : <span className="loading loading-bars loading-lg flex items-center justify-center text-[#fff] h-[90vh]"></span>}
            </div>
        </>
    )
}

export default Products