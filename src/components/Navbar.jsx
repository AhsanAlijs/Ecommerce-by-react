import { Padding } from '@mui/icons-material'
import { colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', listStyleType: 'none', backgroundColor: 'blue'}}>
      <li><Link>Home</Link></li>
      <li><Link>Products</Link></li>
      <li><Link>Contact</Link></li>

    </ul >
    </>
  )
}

export default Navbar
