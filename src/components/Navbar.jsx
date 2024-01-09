import { Padding } from '@mui/icons-material'
import { colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', listStyleType: 'none', backgroundColor: 'gray', padding: '10px', }}>

        <li style={{ fontSize: '20px' }}><Link style={{ color: 'white' }} to={'/'}>Home</Link></li>
        <li style={{ fontSize: '20px' }}><Link style={{ color: 'white' }} to={'products'}>Products</Link></li>
        <li style={{ fontSize: '20px' }}><Link style={{ color: 'white' }} to={'contact'}>Contact</Link></li>
        

      </ul >
    </>
  )
}

export default Navbar
