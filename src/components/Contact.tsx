import React, { FormEvent, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(false);
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nContact: ${email}\n\n${message}`);
    window.location.href = `mailto:gokulsgokul143@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Phone: 7975137024 &nbsp; | &nbsp; Email: gokulsgokul143@gmail.com</p>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <Box component="form" className="contact-form" onSubmit={sendEmail} autoComplete="off">
            <div className="form-flex">
              <div className="native-field">
                <label htmlFor="contact-name">Your Name *</label>
                <input id="contact-name" name="name" type="text" placeholder="What's your name?" value={name} onChange={(e) => setName(e.currentTarget.value)} autoComplete="name" />
              </div>
              <div className="native-field">
                <label htmlFor="contact-email">Email / Phone *</label>
                <input id="contact-email" name="email" type="text" placeholder="How can I reach you?" value={email} onChange={(e) => setEmail(e.currentTarget.value)} autoComplete="email" />
              </div>
            </div>

            <div className="native-field message-field">
              <label htmlFor="contact-message">Message *</label>
              <textarea id="contact-message" name="message" placeholder="Send me any inquiries or questions" rows={10} value={message} onChange={(e) => setMessage(e.currentTarget.value)} />
            </div>

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
            {sent && <p className="contact-success">Your email app has been opened.</p>}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
