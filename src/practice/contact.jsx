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
</div>
  )
}

export default contact