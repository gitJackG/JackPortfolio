import React from 'react'
import './Education.css'
import OakHouseLogo from '../../assets/ohs.jpg'
import UPCLogo from '../../assets/upc.jpg'

export default function Education() {
  return (
    <div className='education-container' id='education'>
      <div className='education-header-section'>
        <h1>EDUCATION</h1>
      </div>
      <div className='education-content-section'>
        <div className='education-item'>
          <div className='education-item-logo'>
            <img src={UPCLogo} alt="Universitat Politècnica de Catalunya" />
          </div>
          <div className='education-item-left'>
            <h3>BACHELOR OF COMPUTER SCIENCE</h3>
            <p>Universitat Politècnica de Catalunya</p>
          </div>
          <div className='education-item-right'>
            <p>Barcelona, Spain</p>
            <p>Sep. 2020 - Jun. 2024</p>
          </div>
        </div>
        <div className='education-item'>
          <div className='education-item-logo'>
            <img src={OakHouseLogo} alt="Oak House School" />
          </div>
          <div className='education-item-left'>
            <h3>SIXTH FORM & SECONDARY SCHOOL</h3>
            <p>Oak House School</p>
          </div>
          <div className='education-item-right'>
            <p>Barcelona, Spain</p>
            <p>Sep. 2014 - Jun. 2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}
