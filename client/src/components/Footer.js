import React from 'react'
import FooterContact from './FooterContact'

const Footer = () => {
  function ScrollToTop() {
    window.scrollTo(0, 0)
  }

  return (
    <section className='footer'>
      <div className='footer-content'>
        <div>
          <a className='top' onClick={() => ScrollToTop()}>
            Return to Top
          </a>
          <FooterContact />
        </div>
        <div className='bottom-row'>
          <div>
            <i className='far fa-envelope'></i>
            <p>
              <a href='mailto:adminteam@mystory.com'>Suggest a Story</a>
            </p>
          </div>
          <p className='rights'>&copy; 2021 All rights reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
