import React from 'react'
import { FaFacebookMessenger } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import '../practice/footer.css'

function footer() {
  return (
    <div>
        <div className='Footer'>
          <div className='div1'>
            <div className='div-p'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, corporis! Exercitationem asperiores non neque odio illo ad, animi similique, repudiandae soluta ex odit laborum. Quas ex culpa rerum inventore ut.</p>
            </div>
              <div className='div-icon'>
                <SiLinkedin />
                <FaInstagramSquare />
                <FaFacebookMessenger />
                <IoLogoWhatsapp />
              </div>
          </div>

            <div className='div-2'>
                
                <h3 className='h3-A'>About Us</h3>
                  <ul1>
                    <li>Our Vision & Mission</li>
                    <li>Our Team</li>
                    <li>Services</li>
                    <li>Products</li>
                  </ul1>
                <h3 className='h3-R'>Resources</h3>
                  <ul1>
                    <li>Blog</li>
                    <li>News</li>
                    <li>Ebooks</li>
                    <li>Videos</li>
                  </ul1>
                <h3 className='h3-C'>Contact Us</h3>
                  <ul1>
                    <li>Subscribe</li>
                    <li>Get a Quote</li>
                  </ul1>
                  
            </div>
          
          
       </div>
       <hr className='hr' />

    </div>
  )
}

export default footer