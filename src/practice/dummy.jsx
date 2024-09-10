import React, { useState, useEffect } from 'react';
import '../practice/dummy.css'; // Assuming you're using a separate CSS file
import IMG1 from '../practice/sky.jpg'

function Dummy() {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className='bg'>
      <img src='./practice/sky.jpg' alt='' />
      <p className={`para ${showParagraph ? 'show' : ''}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium est eius enim dolore! Ad nihil explicabo accusantium aliquam adipisci rerum. Temporibus sunt dolorem ex excepturi facere quisquam molestias? Amet, commodi?
      </p>
      <a href={IMG1} download={IMG1}> hello</a>
    </div>
  );
}

export default Dummy;
