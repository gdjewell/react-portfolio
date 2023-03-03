import React, { Component } from 'react'
import { Project } from '../components/Project/Project'
import { projects } from '../utils/projects'
import Row from 'react-bootstrap/Row'

const Projects = () => {

  console.log("got here")
    return (
        <section className="row justify-content">
          <h1 className="projectheading mx-auto">My Projects</h1>
          <hr />
           <Row xs={1} md={3} className="g-4">
            {projects.map(item => <Project {...item} />)}
           </Row>
        </section>
    )
  }

  export default Projects