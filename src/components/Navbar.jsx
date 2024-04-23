import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-transparet">
      <div>
        <img className='w-10 mx-2' src={logo} alt={logo} />
      </div>
      <div className='flex space-x-4 text-3xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaSquareXTwitter/>
        <FaInstagram/>
      </div>
    </nav>
  )
}

export default Navbar
