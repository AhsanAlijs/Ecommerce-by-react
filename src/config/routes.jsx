
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../screen/home/home'
import Products from '../screen/products/products'
import DrawerAppBar from '../components/Navbar'
import Contact from '../screen/Contact/Contact'

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <DrawerAppBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers