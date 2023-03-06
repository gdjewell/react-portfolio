import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



export const Project =({projectName, imageFile, url, description, repo}) => {

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
      console.log(handleMouseEnter())
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };
   
   const style = {
     wrapper: { backgroundImage: `url(${imageFile})`, backgroundSize: "cover" },
     image: { maxWidth: "100%", height: "auto"}
   }
  return (
  <Col className="col-lg-4 col-md-5" key={projectName} >
    <Card className="project-card align-items-flex-end" onChange={isHover}>
      <Card.Body>
        <Card.Title className="cardtitle">{projectName}</Card.Title>
        <Row>
        <Card.Text style={{padding: "25px"}}>{description}</Card.Text>
        <img src={imageFile} className="project-image" style={{width: "300px", height: "150px", paddingBottom: "15px"}}/>
        </Row>
        
        <Card.Text><a href={url}>Deployed URL</a></Card.Text>
        <a href={repo}>
        <FontAwesomeIcon icon={faGithub} size="lg" style={{position: "absolute", bottom: "0"}}/>
       
        </a>
        
        
      </Card.Body>

    </Card>
  </Col>
  )
}