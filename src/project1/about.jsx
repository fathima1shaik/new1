import React from 'react'
import '../project1/about.css'
import IMG1 from '../project1/photo.jpg'

const about = () => {
  return (
    <div className='bgp'>
      <h1 className='Ab'>
        ABOUT<br/>
        ALAN PARKS
      </h1>


    <div className='photo'>
        <img  className='photo' src={IMG1} alt='' />
    </div>


    <div className='part2'>
       <div className='section2'>
      <div className='p'>
        <p className='para'>
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.<br/> <br/>
        ​   This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
        </p>
        <div className='Book1'>
      <button className='Book'>Book Now</button>
    </div>
    </div>

 
    <div className='section3'>
      <div className='Contact'>
        <p className='cont'> Contact Me</p>
        <p className='cont'>Tel: 123-456-7890</p>
        <p className='cont'>Email: info@mysite.com</p>
      
      
        <p className='cont'>Studio</p>
        <p className='cont'>500 Terry Francine St.</p>
        <p className='cont'>San Francisco, CA 94158</p>

    <form id="contactForm">
      <div className='details'>
        <input type="text" className="name"  placeholder='Name'/>
     </div>

    <div className='details'>
      <input type="email" className="name" placeholder='Email'/>
    </div>

    <div className='details'>
          <input type="text" className="name" placeholder='subject'/>
    </div>

    <div className='details'>
       <textarea className="name" placeholder='message'></textarea>
    </div>
      <button className='submit' type="submit">Submit</button>
  </form>

      </div>
   </div>
  </div>

</div>
</div>
  )
}

export default about
