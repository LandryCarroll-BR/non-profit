import { TextField } from '@material-ui/core';
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact__form">
        <form noValidate autoComplete="off">
          <div><TextField id="name" label="Name" variant="outlined" /></div>
          <div><TextField id="email" label="Email" variant="outlined" required /></div>
          <div><TextField id="message" label="Message" variant="outlined" multiline /></div>
        </form>
      </div>
    </section>
  )
}

export default Contact;
