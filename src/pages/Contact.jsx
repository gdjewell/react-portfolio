import React, { useRef, useState } from 'react'
import Row from 'react-bootstrap/Row'
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import {validateEmail} from '../utils/validateemail'
const isValidEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

const Contact = () => {
  const form = useRef();
  const [sent, prepareToSend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (e) => {
   const emailValidate =  isValidEmail.test(e.target.value)
   console.log(emailValidate)
  }

  const handleInput = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value;
     
  

  switch (inputType) {
    case 'name': 
      setName(inputValue)
      break;
    case 'email':
      setEmail(inputValue)
      break;
    case 'subject':
      setSubject(inputValue)
      break;
    case 'message':
      setMessage(inputValue)
      break;
    default:
  }

}

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_id9erwe', 'template_movboef', form.current, 'c5J-0ad2SIpk89Ro-')
    .then((result) => {
        console.log(result.text);
        prepareToSend(true)

        setName('')
        setEmail('')
        setSubject('')
        setMessage('')

    }, (error) => {
        console.log(error.text);
    });
  };

  return (
  <>
    <Form ref={form} onSubmit={handleSubmit} className="overlay-fix form-layout">
      <h2>Reach out with any questions or comments.</h2>
      <Form.Group className="mx-3">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} name="name" type="text" placeholder="Enter your name" onChange={handleInput} required />
      </Form.Group>
      <Form.Group className="mx-3">
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} name="email" type="email" placeholder="Enter your email" onChange={handleInput} onBlur={validateEmail} required />
      </Form.Group>
      <Form.Group className="mx-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control value={subject} name="subject" type="text" placeholder="Enter your subject" onChange={handleInput} required />
      </Form.Group>
      <Form.Group className="mx-3">
        <Form.Label>Message</Form.Label>
        <Form.Control value={message} name="message" type="textarea" placeholder="Enter your message" onChange={handleInput} required/>
      </Form.Group>
      <Button variant="outline-success" type="submit" className="button-layout" size="lg">
        Submit
      </Button>

      {sent && <div className="alert alert-success" role="alert"> Email sent. You'll hear back soon!</div>}
    </Form>
  
  </>

  )
};



export default Contact