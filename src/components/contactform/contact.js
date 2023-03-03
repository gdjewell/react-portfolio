import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [send, prepareToSend] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailSend = (event) => {
    event.preventDefault();

    emailjs.sendForm;
  };
};
