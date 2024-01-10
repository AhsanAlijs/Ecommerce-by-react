import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className="navbar bg-[#002162e4] border-b-2 border-[#00000063] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  lg:hidden bg-transparent text-[#000] border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ffffff34] rounded-box w-52">
                            <li><Link to={'/'} className='text-lg text-[#000] font-bold'>Home</Link></li>
                            <li><Link to={'about'} className='text-lg text-[#000] font-bold'>About</Link></li>
                            <li><Link to={'contact'} className='text-lg text-[#000] font-bold'>Contacts</Link></li>
                            <li><Link to={'products'} className='text-lg text-[#000] font-bold'>Products</Link></li>
                        </ul>
                    </div>
                    <p className=" max-sm:text-lg text-2xl font-bold text-[#fff]">Quick Shop</p>
                </div>
                <div className="navbar-center hidden lg:flex text-[#fff]">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'} className='text-lg text-[#fff] font-bold'>Home</Link></li>
                        <li><Link to={'about'} className='text-lg text-[#fff] font-bold'>About</Link></li>
                        <li><Link to={'contact'} className='text-lg text-[#fff] font-bold'>Contacts</Link></li>
                        <li><Link to={'products'} className='text-lg text-[#fff] font-bold'>Products</Link></li>
                    </ul>
                </div>
            </div >
        </>
    )
}
export default Navbar