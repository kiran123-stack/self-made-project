import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faI, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer-container">
       <div className='footer-section '>
          <h3>Contact Us</h3>
          <div className='content-item'>
          <FontAwesomeIcon icon={faEnvelope} size='2px' style={{marginRight: '4px'}} />
        <p>Email: info@example.com</p>
        </div>

        <div className='content-item'>
        <FontAwesomeIcon icon={faPhone} size='2px' style={{marginRight: '4px'}} />
        <p>Phone: (123) 456-7890</p>
        </div>
       </div>

      <div className='footer-section'>
         <h3>Our Location</h3>
         <FontAwesomeIcon icon={faLocation} size='2px' style={{marginRight: '4px'}} />
        <p>123 Main St</p>
        <p>City, State, Country, ZIP</p>
      </div>

      <div className='footer-section social-icon'>
         <h3>Follow Us</h3>
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} size='6px' />
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon icon={faInstagram} size='6px' />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} size='6px' />
          </a>

         </div>
    </footer>
  )
}

export default Footer
