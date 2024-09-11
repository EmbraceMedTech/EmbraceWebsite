// ContactModal.js
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Textarea, Group } from '@mantine/core';
import { useState } from 'react';
export default function Contact() {
  const [opened, { open, close }] = useDisclosure(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      text: `New contact form submission:\nEmail: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nMessage: ${message}`
    };
    const response = await fetch('/api/send-to-slack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      // Hide the form
      document.getElementById('formContainer').style.display = 'none';
  
      // Show the thank you message
      document.getElementById('thankYouMessage').style.display = 'block';
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <>
  <Modal opened={opened} onClose={close} title="Contact Us" centered>
    <div id="formContainer">
      <TextInput
        label="Email"
        placeholder="Your email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
        required
      />
      <TextInput
        label="First Name"
        placeholder="Your first name"
        value={firstName}
        onChange={(event) => setFirstName(event.currentTarget.value)}
        required
      />
      <TextInput
        label="Last Name"
        placeholder="Your last name"
        value={lastName}
        onChange={(event) => setLastName(event.currentTarget.value)}
        required
      />
      <Textarea
        label="Message"
        placeholder="Your message"
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
        required
      />
      <Group position="right" mt="md">
        <Button onClick={handleSubmit}>Submit</Button>
      </Group>
    </div>
    <div id="thankYouMessage" style={{ display: 'none' }}>
      Thank you for contacting us, a team member will reach out to you shortly!
    </div>
  </Modal>

  <Button onClick={open} variant='subtle' color='black' radius='lg'>Contact Us</Button>
</>
  );
}
