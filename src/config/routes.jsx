
import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../screen/home/home'
import Products from '../screen/products/products'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products' element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers