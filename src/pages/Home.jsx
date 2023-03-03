import React from 'react'
import myImage from '../assets/images/me.jpeg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTypewriter } from 'react-simple-typewriter'
import { faGoodreadsG } from '@fortawesome/free-brands-svg-icons'

const Home = () => {

  const [text] = useTypewriter({
    words: ['Web Developer', 'MERN Stack Developer', 'Tech Enthusiast'],
    loop: true,
  })
  return (
     <section>
      <Row className="align-items-center justify-content-center my-5 hero-section">
        <Col className="col-4 overlay-fix">
          <img src={myImage} alt="my image" className="profile-image" />
        </Col>
        <Col className="col-4 overlay-fix">
          <h1 className="headline">Hi, I'm Greg. I'm a {text}</h1>
        </Col>
      </Row>
    </section>

  )
}

export default Home
