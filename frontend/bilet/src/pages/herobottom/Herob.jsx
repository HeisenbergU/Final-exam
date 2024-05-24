import React from 'react'
import './herob.scss'
import { FaCarSide } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdContactSupport } from "react-icons/md";

function Herob() {
  return (
    <>
<div className='textsidemiddle' >
<div className='firstdiv' ><FaCarSide className='carfont' />FREE SHIPPING <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p></div>
<div className='firstdiv' ><GiReturnArrow className='returnfont' />FREE RETURNS <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p></div>
<div className='firstdiv' ><MdContactSupport className='returnfont' />CUSTOMER SUPPORT <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p></div>
</div>
    </>
  )
}

export default Herob