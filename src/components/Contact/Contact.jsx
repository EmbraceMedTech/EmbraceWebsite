// ContactModal.js
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

export default function Contact() {
    const [opened, { open, close }] = useDisclosure(false);
  
    return (
      <>
        <Modal opened={opened} onClose={close} title="Authentication" centered>
          {/* Modal content */}
        </Modal>
  
        <Button onClick={open} variant='subtle' color='black' radius='lg'>Contact Us</Button>
      </>
    );
  }

// const Contact = ({ closeModal }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send the formData to your Slack channel (you'll need to implement this part)
//     console.log('Form data submitted:', formData);
//     closeModal(); // Close the modal
//   };

//   return (
//     <Modal title="Contact Us" onClose={closeModal}>
//       <form onSubmit={handleSubmit}>
//         <Input
//           label="First Name"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         {/* Other input fields (last name, email, message) go here */}
//         <Textarea
//           label="Message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Modal>
//   );
// };

// export default ContactModal;