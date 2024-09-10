import React from 'react'
import './about.css'
import Video from '../practice/video.mp4';
import Footer from '../practice/footer.jsx';
import { FaTrophy } from "react-icons/fa6";

function about() {
  return (
    <div className='main'>
      <div className='div-1'>
        <h1 className='h1-At'>Atomic Lite - About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minima sit odit dolorem quidem.  </p>
      </div>


    <div className="video">
      <video width='100%' height='400px' controls>
        < source  src={Video} />
      </video>
    </div>

    <div className='section-3'>
      <div className='div-A'>
          <h1>Atomic Content</h1>
          <p className='p-E'>Essent accumsan invidunt in pri. Pri enim tincidunt no, ubique doming expetenda te mei. Forensibus voluptaria efficiantur sed ut, mei unum volumus ad.</p>
          <p className='p-S'>Sint oratio at per, diam saepe dicam ei sea. At civibus appetere cum, quem habeo in. Eam modo apeirian te, ut altera iisque evertitur sit. Cu saperet inermis aliquando nam, per impetus qualisque interesset ex, vix at omittantur instructior disputationi.</p>
      </div>
       
       <div className='div-B'>
        <FaTrophy  className='Fa'/>
        <label className='Lab'>997</label>
         <label className='Cli'>Clients</label>
         <p className='Exc'> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>


      <div className='div-C'>
        <FaTrophy  className='Fa'/>
        <label className='Lab'>997</label>
        <label className='Cli'>Clients</label>
         <p className='Exc'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>


    <div className='section-4'>
      <h1 className='h1-T'>The Company</h1>
      <div className='section-411'>
        <div className='div-41'>
          <img className='img-sky' src='sky1.jpg' alt='' />
          <h2>Gallery Title</h2>
          <p>Facer paulo nostrud mea ut, vis eu graece fastidii scripserit. Veniam voluptaria vix at, ut nonumy ornatus dolorem pro, sea ei nominavi forensibus omittantur.</p>
          <button className='btn-CTA'>CTA Text</button>
        </div>
        <div className='div-42'>
          <img className='img-sky' src='sky1.jpg' alt='' />
          <h2>Gallery Title</h2>
          <p>Facer paulo nostrud mea ut, vis eu graece fastidii scripserit. Veniam voluptaria vix at, ut nonumy ornatus dolorem pro, sea ei nominavi forensibus omittantur.</p>
          <button className='btn-CTA'>CTA Text</button>
        </div>
        <div className='div-43'>
          <img className='img-sky' src='sky1.jpg' alt='' />
          <h2>Gallery Title</h2>
          <p>Facer paulo nostrud mea ut, vis eu graece fastidii scripserit. Veniam voluptaria vix at, ut nonumy ornatus dolorem pro, sea ei nominavi forensibus omittantur.</p>
          <button className='btn-CTA'>CTA Text</button>
        </div>
      </div>
    </div>



    <div className='section-4'>
      <div className='section-411'>
        <div className='div-41'>
          <img className='img-sky' src='sky1.jpg' alt='' />
          <h2>Gallery Title</h2>
          <p>Facer paulo nostrud mea ut, vis eu graece fastidii scripserit. Veniam voluptaria vix at, ut nonumy ornatus dolorem pro, sea ei nominavi forensibus omittantur.</p>
          <button className='btn-CTA'>CTA Text</button>
        </div>
        <div className='div-42'>
          <img className='img-sky' src='sky1.jpg' alt='' />
          <h2>Gallery Title</h2>
          <p>Facer paulo nostrud mea ut, vis eu graece fastidii scripserit. Veniam voluptaria vix at, ut nonumy ornatus dolorem pro, sea ei nominavi forensibus omittantur.</p>
          <button className='btn-CTA'>CTA Text</button>
        </div>
        <div className='div-43'>
          <img className='img-sky' src='sky1.jpg' alt='' />
          <h2>Gallery Title</h2>
          <p>Facer paulo nostrud mea ut, vis eu graece fastidii scripserit. Veniam voluptaria vix at, ut nonumy ornatus dolorem pro, sea ei nominavi forensibus omittantur.</p>
          <button className='btn-CTA'>CTA Text</button>
        </div>
      </div>
    </div>


  <div className="div-dir">
    <h1 className='div-O'>Our Directors</h1>
    <div className='div-img1'>
    <div className='div-img'>
      <img className='imgg' src='imgg.jpg' alt=''/>
      <p>Atomic Team</p>
      <p>Job Title</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit rem provident voluptates est autem, aut ducimus iusto officia neque inventore quam, debitis magni harum totam, quibusdam minus a cupiditate!</p>
    </div>
    <div className='div-img'>
      <img className='imgg' src='imgb.jpg' alt=''/>
      <p>Atomic Team</p>
      <p>Job Title</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit rem provident voluptates est autem, aut ducimus iusto officia neque inventore quam, debitis magni harum totam, quibusdam minus a cupiditate!</p>
    </div>
    <div className='div-img'>
      <img className='imgg' src='imgg.jpg' alt=''/>
      <p>Atomic Team</p>
      <p>Job Title</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit rem provident voluptates est autem, aut ducimus iusto officia neque inventore quam, debitis magni harum totam, quibusdam minus a cupiditate!</p>
    </div>
 </div>
  </div>





    <div>
      <Footer  />
    </div>
  </div>

  )
}

export default about