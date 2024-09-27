import React from 'react'
import './footer.css'
export default function footer() {
  return (
    <div className='footer'>
      {/*footer  left side*/}
      <div className='footerleft'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quibusdam eius incidunt, accusamus fugit esse temporibus animi at est ullam inventore maxime labore cupiditate et ex voluptatem ipsa nulla accusantium!</p>
        
      </div>
      {/*footer right*/}
      <div className='footerright'>
        <table>
          <tr className='heading'>
            <th><h2>About us</h2></th>
            <th><h2>Resources</h2></th>
            <th><h2>Contact</h2></th>
          </tr>

          <tr className='heading'>
            <th><p>Our vision & Mission</p></th>
            <th><p>Blog</p></th>
            <th><p>Subscribe</p></th>
           
          </tr>
          <tr className='heading'>
            <th><p>Our Team</p></th>
            <th><p>News</p></th>
            <th><p>Get a quote</p></th>
          </tr>
          <tr className='heading'>
            <th><p>Services</p></th>
            <th><p>Ebooks</p></th>
            
          </tr>
          <tr className='heading'>
            <th><p>Products</p></th>
            <th><p>Videos</p></th>
            
          </tr>
          
        </table>
      </div>
    </div>
  )
}
