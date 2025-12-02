import React, { useState } from 'react'
import './Work.css'
import EYLogo from '../../assets/ey.jpg'
import SALBCNLogo from '../../assets/salbcn.jpg'
import OakHouseLogo from '../../assets/ohs.jpg'

export default function Work() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleItem = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item)
  }

  return (
    <div className='work-container' id='work'>
      <div className='work-header-section'>
        <h1>WORK EXPERIENCE</h1>
      </div>
      <div className='work-content-section'>
        <div className='work-item' onClick={() => toggleItem('ey')}>
          <div className='work-item-logo'>
            <img src={EYLogo} alt="Ernst & Young" />
          </div>
          <div className='work-item-content'>
            <div className='work-item-header'>
              <div className='work-item-left'>
                <h3>SAP BASIS CONSULTANT INTERN</h3>
                <p>Ernst & Young</p>
              </div>
              <div className='work-item-right'>
                <p>Barcelona, Spain</p>
                <p>Nov. 2023 - Jun. 2024</p>
              </div>
            </div>
            {expandedItem === 'ey' && (
              <div className='work-item-details'>
                <ul>
                  <li>Managed SAP system administration tasks including user management, system monitoring, and performance optimization</li>
                  <li>Collaborated with cross-functional teams to implement SAP solutions for enterprise clients</li>
                  <li>Performed system upgrades, patches, and troubleshooting to ensure high availability</li>
                  <li>Documented technical procedures and created knowledge base articles for the team</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='work-item' onClick={() => toggleItem('salbcn')}>
          <div className='work-item-logo'>
            <img src={SALBCNLogo} alt="Sports & Leisure Barcelona" />
          </div>
          <div className='work-item-content'>
            <div className='work-item-header'>
              <div className='work-item-left'>
                <h3>INT. FOOTBALL TOURNAMENT COORDINATOR</h3>
                <p>Sports & Leisure Barcelona</p>
              </div>
              <div className='work-item-right'>
                <p>Barcelona, Spain</p>
                <p>Oct. 2022 - Jun. 2025</p>
              </div>
            </div>
            {expandedItem === 'salbcn' && (
              <div className='work-item-details'>
                <ul>
                  <li>Coordinated international football tournaments with teams from multiple countries</li>
                  <li>Managed logistics, scheduling, and communication with participants and venues</li>
                  <li>Handled event planning, registration, and on-site operations for large-scale tournaments</li>
                  <li>Provided excellent customer service and resolved issues efficiently</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='work-item' onClick={() => toggleItem('oak')}>
          <div className='work-item-logo'>
            <img src={OakHouseLogo} alt="Oak House School" />
          </div>
          <div className='work-item-content'>
            <div className='work-item-header'>
              <div className='work-item-left'>
                <h3>SUMMER SCHOOL MONITOR</h3>
                <p>Oak House School</p>
              </div>
              <div className='work-item-right'>
                <p>Barcelona, Spain</p>
                <p>Jun. 2021 - Aug. 2021</p>
              </div>
            </div>
            {expandedItem === 'oak' && (
              <div className='work-item-details'>
                <ul>
                  <li>Supervised and engaged children in educational and recreational activities</li>
                  <li>Ensured safety and well-being of students during summer programs</li>
                  <li>Assisted in organizing daily schedules and coordinating group activities</li>
                  <li>Communicated effectively with parents and staff members</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
