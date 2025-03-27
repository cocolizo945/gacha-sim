import React, { useState } from 'react'
import './../styles/boosteropen.css'
import Button from '../components/button'
import ReactCardFlip from 'react-card-flip'

function Boosters() {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonText, setButtonText] = useState('Abrir sobre') 
  const [currentSlide, setCurrentSlide] = useState(0);
  const Data = [
    {
      title: 'app1'
    },
    {
      title: 'app2'
    },
    {
      title: 'app3'
    },
    {
      title: 'app4'
    },
    {
      title: 'app5'
    },
    {
      title: 'app6'
    },
    {
      title: 'app7'
    },
    {
      title: 'app8'
    }
  ]
  

  const openEnvelope = () => {
    setIsOpen(true)
    setButtonText('Abrir otro sobre')
  }
  const resetEnvelope = () => {
    setCurrentSlide(0)
    setIsOpen(false)
    setButtonText("Abrir sobre")
  }

  const Card = ({ project }) => {
    const [isFlipped, setIsFlipped] = React.useState(false)
    // console.log(project);
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={() => setIsFlipped((prev) => !prev)} className="card">
          <div>
            <h3>{project.title}</h3>
          </div>
        </div>
        <div onClick={() => setIsFlipped((prev) => !prev)} className="card card-back">
          This is the back of the card.
        </div>
      </ReactCardFlip>
    )
  }

  const nextSlide = () => {
    
    setCurrentSlide((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
    console.log(currentSlide)
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
  };

  return (
    <div>
      <div className={`app ${isOpen ? 'open' : ''}`}>
        {!isOpen ? (
          <div className="envelope">
            <div className="flap"></div>
            <div className="flap"></div>
            <div className="bottom"></div>
          </div>
        ) : (
          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 210}px)` }}>
              {/* Aquí es donde pondrías las cartas del carrusel */}
              {Data.map((item, index) => (
                <Card project={item} key={`card-${index}`} className="carousel-item" />
              ))}
            </div>
        <div>
        
        </div>
          </div>
          
        )}
        <Button className="prev" onClick={prevSlide} text="prev" color="primary" size="large"/>
        <Button className="next" onClick={nextSlide} text="next" color="primary" size="large"/>
        <Button onClick={isOpen === false ? openEnvelope : resetEnvelope} text={buttonText} color="primary" size="large" />
      </div>
    </div>
  )
}

export default Boosters
