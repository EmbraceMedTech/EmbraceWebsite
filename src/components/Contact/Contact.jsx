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

  const handleSubmit = async () => {
    const payload = {
      text: `New contact form submission:\nEmail: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nMessage: ${message}`
    };
    await fetch('YOUR_SLACK_WEBHOOK_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
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
      </Modal>

      <Button onClick={open} variant='subtle' color='black' radius='lg'>Contact Us</Button>
    </>
  );
}
