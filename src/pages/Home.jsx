import React from 'react'
import myImage from '../assets/images/me.jpeg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTypewriter } from 'react-simple-typewriter'


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
          <h1 className="headline">Hi, I'm <span className="home-name">Greg Jewell</span>. I'm a <span className="type-text">{text}</span></h1>
        </Col>
      </Row>
    </section>

  )
}

export default Home
