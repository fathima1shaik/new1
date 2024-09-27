import React from 'react'
import './aboutf.css'
import IMG1 from '../project1/fimg.jpg';
import { FaArrowRight } from "react-icons/fa";


function Aboutf() {
  return (
    <div className='main'>
        <h1 className='h1'> ABOUT US</h1>

        <div className='div-1'>
          <img className='img1' src={IMG1}  alt=''/>
          <p className='div-p'>Maawaabro IT Solutions is a forward-thinking startup that provides innovative technology services tailored to modern business needs. With a mission to empower businesses through cutting-edge digital solutions, Maawaabro IT Solutions focuses on delivering customized software development, IT consulting, and digital transformation services.
          Maawaabro specializes in building tailored software solutions that streamline operations and improve efficiency. Whether it’s web, mobile, or desktop applications, the company delivers high-quality, scalable software.Maawaabro provides expert consulting services to help businesses identify technology gaps and implement strategic IT solutions that foster growth and innovation.
          They assist businesses in adopting digital technologies to enhance productivity, improve customer experiences, and gain a competitive edge in the market.
          </p>
        </div>


      <div className='div-2'>
         <h1 className='h1-D'>Difference between Product based and Service based company</h1>
          <div className='div-21'> 
          <div className='div-2A'>
            <h3 className='h3-P'>PRODUCT BASED</h3>
            <ul>
                <li className='li-P'>Product-based companies focus on developing, designing, and selling a tangible or digital product (e.g., software, hardware, or consumer goods).</li>
                <li className='li-P'>Their success relies heavily on the quality, innovation, and market demand for their product(s).</li>
                <li className='li-P'>The primary revenue stream comes from selling products directly to customers or through licensing (for software products).</li>
                <li className='li-P'>They often have additional revenue models, such as subscriptions, support services, or updates/upgrades.</li>
                <li className='li-P'>Significant upfront investment is required for research, development, and production.</li>
                
            </ul>
          </div> 
          <div className='div-2A'>
            <h3 className='h3-P'>SERVICE BASED</h3>
            <ul>
                <li className='li-P'>Product-based companies focus on developing, designing, and selling a tangible or digital product (e.g., software, hardware, or consumer goods).</li>
                <li className='li-P'>Their success relies heavily on the quality, innovation, and market demand for their product(s).</li>
                <li className='li-P'>The primary revenue stream comes from selling products directly to customers or through licensing (for software products).</li>
                <li className='li-P'>They often have additional revenue models, such as subscriptions, support services, or updates/upgrades.</li>
                <li className='li-P'>Significant upfront investment is required for research, development, and production.</li>
            </ul>
          </div> 
          </div>
        </div>


        <div className='div-2'>
         <h1 className='h1-D'>Difference between MNC and Start Up</h1>
          <div className='div-21'> 
          <div className='div-2A'>
            <h3 className='h3-P'>MNC</h3>
            <ul>
                <li className='li-P'>Product-based companies focus on developing, designing, and selling a tangible or digital product (e.g., software, hardware, or consumer goods).</li>
                <li className='li-P'>Their success relies heavily on the quality, innovation, and market demand for their product(s).</li>
                <li className='li-P'>The primary revenue stream comes from selling products directly to customers or through licensing (for software products).</li>
                <li className='li-P'>They often have additional revenue models, such as subscriptions, support services, or updates/upgrades.</li>
                <li className='li-P'>Significant upfront investment is required for research, development, and production.</li>
                
            </ul>
          </div> 
          <div className='div-2A'>
            <h3 className='h3-P'>START UP</h3>
            <ul>
                <li className='li-P'>Product-based companies focus on developing, designing, and selling a tangible or digital product (e.g., software, hardware, or consumer goods).</li>
                <li className='li-P'>Their success relies heavily on the quality, innovation, and market demand for their product(s).</li>
                <li className='li-P'>The primary revenue stream comes from selling products directly to customers or through licensing (for software products).</li>
                <li className='li-P'>They often have additional revenue models, such as subscriptions, support services, or updates/upgrades.</li>
                <li className='li-P'>Significant upfront investment is required for research, development, and production.</li>
            </ul>
          </div> 
          </div>
        </div>

       <div className="div-3">
        <h2 className='h2-A'>ADVANTAGES OF START UP COMPANIES</h2>
        <FaArrowRight /><span className='span-S'>Startups often operate in an environment that encourages innovation and out-of-the-box thinking. Without rigid structures, they can experiment with new ideas and disrupt traditional markets with creative solutions.</span><br/><br/>
        <FaArrowRight /><span className='span-S'>Startups are more agile than larger companies, allowing them to pivot quickly in response to market changes, customer feedback, or emerging trends. This flexibility helps them adapt faster and stay competitive.</span><br/><br/>
        <FaArrowRight /><span className='span-S'>Startups typically have lower operational costs due to smaller teams, minimal infrastructure, and lean processes, making it easier to manage resources efficiently in the early stages.</span><br/><br/>
        <FaArrowRight /><span className='span-S'>In a startup, there's often a direct relationship between effort and reward. Employees can quickly rise through the ranks, take on multiple roles, and directly contribute to the company’s growth, offering immense personal and professional growth.</span><br/><br/>
        <FaArrowRight /><span className='span-S'>Startups tend to foster a collaborative and open work culture, emphasizing creativity, communication, and team spirit. This inclusive culture attracts passionate and talented individuals who value flexibility and autonomy.</span><br/><br/>
        
        
       </div>
    </div>
  )
}

export default Aboutf