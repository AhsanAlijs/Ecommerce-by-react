
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/home/home'
import About from '../../screens/about/About'
import Contacts from '../../screens/contact/Contacts'
import Products from '../../screens/products/Products'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import SingleProduct from '../../screens/single-product/SingleProduct'

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
                    <Route path='singleproduct/:id' element={<SingleProduct />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Routers