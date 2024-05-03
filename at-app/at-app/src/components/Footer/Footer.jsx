import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="frame503">
          <div className="frame500">
            <img src='../images/White Logo.png' alt=''/><br/>
            <span className='des'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</span>
          </div>
          <div className="frame502">
            <div className='frame501'>
                <h3>Our Technologies</h3>
            </div>
            
            <ul className='frame501-2'>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div className="frame496">
            <h3>Our Services</h3>
            <ul className='frame501'>
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing solutions</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>
        <div className="frame505">
          <hr/>
          <div className='frame504'>
            <p>Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
      
    </>
  )
}

export default Footer
