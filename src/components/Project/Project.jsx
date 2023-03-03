import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export const Project =({projectName, imageFile, url, description, repo}) => {
  console.log(imageFile)
  return (
  <Col key={projectName}>
    <Card>
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <FontAwesomeIcon icon={faGithub} />

      </Card.Body>

    </Card>
  </Col>
  )
}