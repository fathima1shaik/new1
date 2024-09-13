import React from 'react'
import './contact.css'
function contact() {
  return (
    
    <div className='main'>
      <div className='div-1'>
        <h1 className='h1-At'>Atomic Lite - About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minima sit odit dolorem quidem.  </p>
      </div>

    <div className='section-2'>
      <div className='div-2A'>
          <h1>Atomic Content</h1>
          <p className='p-E'>Essent accumsan invidunt in pri. Pri enim tincidunt no, ubique doming expetenda te mei. Forensibus voluptaria efficiantur sed ut, mei unum volumus ad.</p>
          <p className='p-S'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, ligula sed commodo sagittis, lacus quam mattis nisl, ac efficitur nunc sapien et eros. Sed elit massa, pharetra ac semper eget, dapibus eu diam. Donec id nunc nec justo ultrices euismod sed vel leo. Praesent viverra convallis est at maximus. Nunc dolor nulla, pellentesque fermentum suscipit a, mattis ut dui. Aliquam erat massa, molestie in libero in, venenatis fringilla mi. Vestibulum faucibus ipsum et aliquet cursus. Etiam tempus ex non tempor luctus. Nullam sed faucibus tellus, id pretium nunc. Proin non placerat est, ut ullamcorper orci.</p>
          <p className='p-S'>Sint oratio at per, diam saepe dicam ei sea. At civibus appetere cum, quem habeo in. Eam modo apeirian te, ut altera iisque evertitur sit. Cu saperet inermis aliquando nam, per impetus qualisque interesset ex, vix at omittantur instructior disputationi.</p>
      </div>
    

    <div className='div-2A'>
      <h3>Atomic Form</h3>
      <label>First Name</label><br/>
      <input type='text' className='text' /><br/>
      <label>Last Name</label><br/>
      <input type='text' className='text' /><br/>
      <label>Email</label><br/>
      <input type='email' className='text' /><br/>
      <label>Message</label><br/>
      <textarea type='textarea' className='text' /><br/>
      <label>Select</label><br/>
      <select className='Select' placeholder='Please Select' ><br/>
        <option>option1</option>
        <option>option2</option>
        <option>option1</option>
        <option>option1</option>
        <option>option1</option>
        <option>option1</option>
      </select><br/> <br/>
      <label className='Radio'>Radio</label><br/><br/>
      <input type='radio' name='name'  placeholder='option1'/><span>option 01</span>
      <br>
      </br>
      <br/>
      <input type='radio' name='name' /><span>option 02</span>
      <br/>
      
      <br></br>
      <input type='radio'  name='name' /><span>option 02</span> 
    </div>

   
  </div>
  <br></br>
  <div>
    <iframe title='nsnsnh' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.33557895623596!2d80.44363516165046!3d16.304065876538996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75eb4beae4c5%3A0xcfa5187ae8404624!2sSM%20ENTERPRISES%20KITCHEN%20GALLERY%20ELICA%20FABER%20HAFELE%20GLEN%20CROMPTON%20KAFF%20HINDWARE%20Chimney%20near%20me%20GUNTUR%20hob%20cooktop%20oven!5e0!3m2!1sen!2sin!4v1726224575922!5m2!1sen!2sin" width="100%" height="650"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>
  )
}

export default contact