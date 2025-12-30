import React, { useState } from 'react'
import './CV.css'
import CVDocument from '../../assets/Jack_Resume_FullStack.pdf'
import EYReference from '../../assets/EYref.pdf'
import SALBCNReference from '../../assets/SALBCNref.pdf'
import CVImg from '../../assets/Jack_Resume_FullStack.webp'
import EYReferenceImg from '../../assets/eyref.png'
import SALBCNReferenceImg from '../../assets/salbcnref.png'

export default function CV() {
    const [active, setActive] = useState('cv')
    return (
        <div className='cv-container' id='cv'>
            <div className='cv-header-section'>
                <h1>CV</h1>
            </div>
            <div className='cv-content-section'>
                <div className='cv-content'>
                    <h2 className={`cv-content-header ${active === 'cv' ? 'active' : ''}`} onClick={() => setActive('cv')}>CV</h2>
                    <h2 className={`cv-content-header ${active === 'ey' ? 'active' : ''}`} onClick={() => setActive('ey')}>EY Reference</h2>
                    <h2 className={`cv-content-header ${active === 'salbcn' ? 'active' : ''}`} onClick={() => setActive('salbcn')}>SALBCN Reference</h2>
                </div>
                <div className='cv-document'>
                    <a href={CVDocument} target="_blank" rel="noopener noreferrer" className={active === 'cv' ? 'active' : ''}>
                        <img src={CVImg} alt="CV" />
                    </a>
                    <a href={EYReference} target="_blank" rel="noopener noreferrer" className={active === 'ey' ? 'active' : ''}>
                        <img src={EYReferenceImg} alt="EY Reference" />
                    </a>
                    <a href={SALBCNReference} target="_blank" rel="noopener noreferrer" className={active === 'salbcn' ? 'active' : ''}>
                        <img src={SALBCNReferenceImg} alt="SALBCN Reference" />
                    </a>
                </div>
            </div>
        </div>
    )
}
