import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";
import { MdOutlineCopyright } from "react-icons/md";



const Footer = () => {
  return (
    <>
    <div className='bg-green-400 flex justify-evenly '>

      <div className="contact-us flex flex-col gap-2 mt-2 ">
        <h4 className='font-bold'>CONTACT US</h4>
        <p >Mumbai, Maharashtra, India </p>
        <Link to="mailto:farmerbuddy@gmail.com"
          className='no-underline text-black'>farmerbuddy@gmail.com</Link>
        <h5>+91 2345678910</h5>
      </div>

      <div className="products mt-2">
        <h4 className='font-bold text-center'>Products</h4>
        <ul className='flex gap-2 flex-col'>
          <Link to='/' className='no-underline text-black'><li>Price-drop</li></Link>
          <Link to='/' className='no-underline text-black'><li>New Products</li></Link>
          <Link to='/' className='no-underline text-black'> <li>Contacts us</li></Link>
          <Link to='/' className='no-underline text-black'> <li>Stores</li></Link>
          <Link to='/' className='no-underline text-black'><li>Complaints</li></Link>
          <Link to='/' className='no-underline text-black'> <li>Career</li></Link>
        </ul>
      </div>

      <div className="our-compony mt-2">
        <h4 className='font-bold'>Our Compony</h4>
        <ul className='flex gap-2 flex-col'>
          <Link to='/' className='no-underline text-black'><li>Delivery</li></Link>
          <Link to='/' className='no-underline text-black'><li>Legal Notice</li></Link>
          <Link to='/' className='no-underline text-black'> <li>Terms and Conditions of use</li></Link>
          <Link to='/' className='no-underline text-black'> <li>About us</li></Link>
          <Link to='/' className='no-underline text-black'><li>Secure payment</li></Link>
          <Link to='/' className='no-underline text-black'> <li>Career</li></Link>
        </ul>
      </div>
    </div>

    <div className="follow flex justify-around  gap-5 bg-green-500">
      <div className="social">
      <ul className='flex gap-5 mt-2 '>
        <li><Link className='no-underline text-black'><AiOutlineYoutube style={{ fontSize: '30px' }}/></Link></li>
        <li><Link className='no-underline text-black'><FaInstagram style={{ fontSize: '30px' }}/></Link></li>
        <li><Link className='no-underline text-black'><AiOutlinePinterest style={{ fontSize: '30px' }}/>
        </Link></li>
      </ul>
      </div>
      <div className="copyright flex mt-3">
        <div>
        <MdOutlineCopyright style={{ fontSize: '20px' }} />
        </div>
        <div>
        <p>2025- FarmerBuddy</p> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
