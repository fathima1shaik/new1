import React from 'react'
import '../project1/java.css'
import IMG1 from '../project1/java1.jpg';
import IMG2 from '../project1/cjava.jpg';

function java() {
  return (
    <div className='main'>
      <h1 className='h1-j'> Java Full Stack</h1>
        <div>
          <img className='java1' src= {IMG1} alt='' />
        </div>
          <div className='p-img'>
            <div className='div-p'>
                <p>Java Training by Sathya Technologies lets you build the applications for data analytics and gain skills in programming by expressing concepts in fewer lines of code. Python supports a number of coding methodologies, including object-oriented programming and structured programming, it can be used to develop for a variety of uses including the Web and other applications that need a programmable interface.</p>
            </div>
            <div>
                <img className='cjava' src={IMG2} alt=''/>
           </div>
        </div>
        <div className='div-p1'>
            <h2 className='h2-h'>How the program will be conducted</h2>
            <p>Sathya Technologies with its start-of- art class rooms and Lab infrastructure at Ameerpet Hyderabad offer the best and most conducive learning environment, with a team of highly skilled trainers having years of industry experience. Classroom trainings will be conducted on a daily basis. Practical exercises are provided for the topics conducted on daily basis to be worked upon during the lab session. Online session conducted through the virtual classroom also have the same program flow with theory and practical sessions.<br/><br/>
                Our Labs can be accessed online from across the world allowing our online training student to make the best use of the infrastructure from the comfort of their home. Online session conducted through the virtual classroom also have the same program flow with theory and practical sessions. Our Labs can be accessed online from across the world allowing our online training student to make the best use of the infrastructure from the comfort of their home.</p>
      </div>
        <h1 className='h2-h'>Java Course Syllabus</h1>

  <div className='div-c'>
    <ul className='ul1'>
    <h4 className='h4-j'>CORE JAVA – EE 6.0</h4>
      <li className='li'>History of Java</li>
      <li  className='li'>Features of Java</li>
      <li  className='li'>JVM Architecture</li>
      <li  className='li'>Data Types</li>
      <li  className='li'>Operators</li>
    </ul>
    
    <ul className='ul1'>
    <h4 className='h4-j'>ADVANCED JAVA</h4>
      <li  className='li'>Reflection API</li>
      <li  className='li'>Java Beans</li>
      <li  className='li'>JDBC</li>
      <li  className='li'>HTML, Java Script & XML</li>
      <li  className='li'>Introduction to Internet, Web Application,Architectures, HTTP, Web Server,Application Server</li>
    </ul>
    
    <ul className='ul1'>
    <h4 className='h4-j'>J2EE-MODULE I</h4>
      <li  className='li'>Inroduction to Distributed Computing, Enterprise Applications J2EE</li>
      <li  className='li'>RMI</li>
      <li  className='li'>JNDI</li>
      <li className='li'>EJB 3.X</li>
      <li className='li'>IOC/Dependency Injection</li>
    </ul>
</div>  

  <div className='div-c'>
    <ul className='ul1'>
    <h4 className='h4-j'>J2EE-MODULE II</h4>
      <li className='li'>XML</li>
      <li className='li'>DTD, Schema</li>
      <li className='li'>SAX, DOM, JDOM</li>
      <li className='li'>JAXP, JAXB, JAXR</li>
      <li className='li'>Web Services (SOAP, UDDI, WSDL)</li>
    </ul>
   
    <ul className='ul1'>
    <h4 className='h4-j'>J2EE-MODULE III</h4>
      <li className='li'>Internationalisation</li>
      <li className='li'>Struts 1.x / 2.x</li>
      <li className='li'>Hibernate & Spring</li>
      <li className='li'>Struts with EJB</li>
      <li className='li'>Ajax</li>
    </ul>
   
    <ul className='ul1'>
    <h4 className='h4-j'>J2EE-MODULE IV</h4>
      <li className='li'>SDLC in Real-Time</li>
      <li className='li'>Resume Building & Interview Tips</li>
      <li className='li'>Build Process in Real-Time</li>
      <li className='li'>Release Process in Real-Time</li>
      <li className='li'>Debugging of Java Applications</li>
    </ul>
 </div>
 </div>
  )
}

export default java