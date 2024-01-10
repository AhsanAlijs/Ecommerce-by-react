
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/home/home'
import About from '../../screens/about/About'
import Contacts from '../../screens/contact/Contacts'
import Products from '../../screens/products/Products'
import Navbar from '../../components/navbar/Navbar'

function Routers() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contacts />} />
                    <Route path='products' element={<Products />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers