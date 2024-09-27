import React from 'react'
import './practice.css'
import { IoDiamondOutline } from "react-icons/io5";
import Footer from '../practice/footer.jsx';
import {Link} from 'react-router-dom'



const practice = () => {
  
  return (
    <div className='Main'>


            <div className='section-1'>
                <img src='./practice/sky.jpg' alt='' />
                   <div className='h1-A'>
                     <h1 className='h1-A' >Atomic-Lite Home</h1>
                   </div>
                    <div className='p1'>
                      <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Natus repellat illum veniam, maiores odio amet reiciendis ad. <br/>Libero rem, ullam quae officiis, doloribus incidunt nesciunt dicta deleniti dolorum, totam deserunt.</p>
                    </div>                
                <button className='bt-cal' > <Link style={{textDecoration:'none',color:'white'}} to='/Team'>Call To Action </Link></button> 
            </div>


      <div className='section-2'>
        <div className='glance'>
          <h1> At a Glance</h1>
        </div>
        <div className='client'>
          <div className='Active'> 
            <p className='num'> 3250 </p>
            <p  className='Aw'>Active Clients</p>
          </div>
          <div className='Active'>
            <p className='num'> 25 </p>
            <p className='Aw '>Years of Experience</p>
          </div>
          <div className='Active'>
            <p className='num'>70 </p>
            <p className='Aw'>Awards Won</p>
          </div>
       </div>
      </div>

     
    <div className='section-3A'>
        <h1 className='h1-3A'>
            Atomic Headline
          </h1>
        <div className='h1-A'>
         
        <div className='section-31'>  
          <div className='p-1'>
            <IoDiamondOutline />
            <p>Atomic Feature</p>
            <p>
            An atomic feature refers to a single, indivisible characteristic or property in a dataset, which cannot be broken down into simpler components. </p>
          </div>
          <div className='p-1'>
            <IoDiamondOutline />
            <p>Atomic Feature</p>
            <p>
            An atomic feature refers to a single, indivisible characteristic or property in a dataset, which cannot be broken down into simpler components. </p>
          </div>
          <div className='p-1'>
            <IoDiamondOutline />
            <p>Atomic Feature</p>
            <p>
            An atomic feature refers to a single, indivisible characteristic or property in a dataset, which cannot be broken down into simpler components. </p>
          </div>
        </div>
      </div>
    </div>

      
      <div className='section-3B'>
        <div className='section-31'>  
          <div className='p-1'>
            <IoDiamondOutline />
            <p>Atomic Feature</p>
            <p>
            An atomic feature refers to a single, indivisible characteristic or property in a dataset, which cannot be broken down into simpler components. </p>
          </div>
          <div className='p-1'>
            <IoDiamondOutline />
            <p>Atomic Feature</p>
            <p>
            An atomic feature refers to a single, indivisible characteristic or property in a dataset, which cannot be broken down into simpler components. </p>
          </div>
          <div className='p-1'>
            <IoDiamondOutline />
            <p>Atomic Feature</p>
            <p>
            An atomic feature refers to a single, indivisible characteristic or property in a dataset, which cannot be broken down into simpler components. </p>
          </div>
        </div>
      </div>


      <div className='section-4A'>
        <div className='section-41'>
          <h1 className='h1-A'>Atomic Content</h1>
          <p>Essent accumsan invidunt in pri. Pri enim tincidunt no, ubique doming expetenda te mei. Forensibus voluptaria efficiantur sed ut, mei unum volumus ad.</p>
          <p>Sint oratio at per, diam saepe dicam ei sea. At civibus appetere cum, quem habeo in. Eam modo apeirian te, ut altera iisque evertitur sit. Cu saperet inermis aliquando nam, per impetus qualisque interesset ex, vix at omittantur instructior disputationi.</p>
        </div>
        <div className='section-42'>
          <img className='sky1' src='sky1.jpg' alt='' />
        </div>
      </div>



      <div className='section-4B'>
        <div className='section-41B'> 
          <img className='sky1' src='./sky1.jpg' alt='' />
        </div>
          <div className='section-42B'>
            <h1 className='h1-A'>Atomic Content</h1>
            <p>Essent accumsan invidunt in pri. Pri enim tincidunt no, ubique doming expetenda te mei. Forensibus voluptaria efficiantur sed ut, mei unum volumus ad.</p>
            <p>Sint oratio at per, diam saepe dicam ei sea. At civibus appetere cum, quem habeo in. Eam modo apeirian te, ut altera iisque evertitur sit. Cu saperet inermis aliquando nam, per impetus qualisque interesset ex, vix at omittantur instructior disputationi.</p>
          </div>
       </div>



       <div className='section-5'>
          <h1>Atomic Offer</h1>
          <p>Nullam pretium sapien commodo ipsum pulvinar, ut cursus nulla pellentesque.</p>
           <div className='btn-div'>
            <button className='btn-cal'>Call To Action</button>
           </div>
       </div>

    <div>
      <Footer  />
    </div>
       

       
</div>
  )
}

export default practice