import React from 'react';
import './contact.css'

function Contact() {
   
      
    
  return (
    <div className='bg'>
    <div className='main'>
        <div className='l-div'>
            <div className='img-div1'>
                <p className='P'>We Love Naresh IT</p>
                <img className='imgg' src='imgg.jpg' alt=''/>
                <img className='imgg' src='imgb.jpg' alt=''/>
                <img className='imgg' src='imgg.jpg' alt=''/>
                <img className='imgg' src='imgb.jpg' alt=''/>
             <div className='img-div2'>
                <img className='imgg' src='imgg.jpg' alt=''/>
                <img className='imgg2' src='imgb.jpg' alt=''/>
             </div> 
            </div>
        </div>

        <div className='R-div'>
      <h1>Contact Us</h1>
      <form >
        <input
          className='fullname'
          type='text'
          name='fullName'
          placeholder='Full Name'
          required
        />
       
        
        <span>
          <input
            className='email'
            type='text'
            name='email'
            placeholder='Email'
            required
          />
        </span>
       
        
        <br />
        
        <input
          className='mobile'
          type='number'
          name='mobile'
          placeholder='Mobile Number'
          required
        />
 
        <br />
        
        <input
          className='company'
          type='text'
          name='company'
          placeholder='Company Name / College Name'
          required
        />
       
        <br />
        
        <textarea
          className='describe'
          name='message'
          placeholder='Describe message here'
          required
        />
        
        
        <button type='submit' className='submit'>Submit</button>
      </form>
      
     
    </div>
  
     </div>
     <div className='we'>
        <div className='help'>
        <h3 className='h3'>
         We Love to Help You
        </h3>
        <p>Explore new and trending free online courses.</p>
        <p className='p1'>Phone:<span className='p2'>
         040-2374 6666 / 2373 4842
        </span></p>
        <p className='p1'>Email:<span className='p2'>
        support@nareshit.com
        </span></p>
        <p className='p1'>Call/Whatsapp:<span className='p2'>
        +91 8179191999
         </span></p>
        <p className='p1'>International:<span className='p2'>
        +1 404-232-9879, +1 248-522-6925
        </span></p>
     </div>
        <div className='Head'>
        <p className='p1'>Head Office:<span className='p2'>
            2nd Floor, Durga Bhavani Plaza, Ameerpet, Hyderabad, 500016.
        </span></p>
        <p className='p1'>Ameerpet Branch:<span className='p2'>
            Ground Floor, Manjeera square,opp Prime Hospital, Ameerpet, Hyd.
        </span></p>
        <p className='p1'>KPHB Branch:<span className='p2'>
            2nd Floor, Sreeramoju Complex, K P H B Phase 1, Hyderabad, 500072.
        </span></p>
        <p className='p1'>USA :<span className='p2'>
            5007 Arbor View Pkwy NW Acworth, GA, 30101
        </span></p> 
     </div>
     </div>
     <div>
     <iframe
  title="Map of Maawaabro IT Solutions location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.353837591242!2d80.4410836741848!3d16.304854933088894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75f03b04a147%3A0xd6ca383a256c940c!2sMaawaabro%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1726824053773!5m2!1sen!2sin"
  className="map-iframe"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

     </div>
    </div>
  )
}

export default Contact