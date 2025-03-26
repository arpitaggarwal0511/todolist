import React from 'react'
import linkedinImage from '../assets/linkedin.png';
import githubImage from '../assets/github.png';
import webImage from '../assets/web.png';

const Footer = () => {
  return (
    <div className='footermain'>
        <div style={{ 
          height: '1px', 
          backgroundColor: 'white', 
          margin: '10px 0' 
        }} />
        made by arpit aggarwal
        <a className='links' href="https://www.linkedin.com/in/arpit-aggarwal-5b6040257/" target="_blank" rel="noopener noreferrer">
  <img src={linkedinImage} height="30px" alt="LinkedIn" />
</a>
<a className='links' href="https://github.com/arpitaggarwal0511" target="_blank" rel="noopener noreferrer">
  <img src={githubImage} height="30px" alt="GitHub" />
</a>
<a className='links' href="https://arpitaggarwal.netlify.app/" target="_blank" rel="noopener noreferrer">
  <img src={webImage} height="30px" alt="Website" />
</a>

    </div>
  )
}

export default Footer
