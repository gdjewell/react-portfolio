import React, { Component, useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import myResume from '../assets/resume/greg_jewell_resume.pdf'
import { Document, Page, View, pdfjs} from 'react-pdf'
import Button from 'react-bootstrap/Button'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const Resume = () => {

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  })
    return (
  <div className="overlay-fix">
    <h2 className="resumeheading">My Resume</h2>
    <Row className="text-align-center">
        
        
      <Col className="resume-column col-12 text-align-center">
      <hr/>
        <h3 className="d-flex justify-content-center">Feel free to download my resume here or view the resume below.</h3>
        <a href="/react-portfolio/assets/resume/greg_jewell_resume.pdf">
        <Button variant="outline-success " type="submit" className="contact-button d-flex justify-content-center" size="lg">
        Download
      </Button>
        </a>
        <Document
          file={myResume}
          onLoadError={console.error}
          className="resume-viewer d-flex justify-content-center"
          >
           
           {[1, 2].map(page => (
              <Page pageNumber={page} scale={width > 800 ? 1 : .5} height="600" />
            ))}
            

        </Document>
      </Col>
    </Row>
      
       
    </div> 
    )
    }
       export default Resume