import { Menu, Group, Center, Burger, Container, Text, Button, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Header.module.css';


export function Header() {
  // Current implementation requires the outermost div inside a component to have an id to jump to that section 
  // (see Mission.jsx and look for the id tagfor an example)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 75;
      const elementPos = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPos = elementPos - offset;

      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      })
    }

    // let scrolledY = element.scrollIntoView({behavior: 'smooth' });
    // if (scrolledY) {
    //   window.scroll(0, scrolledY - offset)
    // }
    // window.scrollBy(0, offset);
  }
  return (
    // <div className="header">
    <header className={classes.header}>
      <Container size='md' className={classes.inner}>
      <div>
        <Text>Althia Prosthetics</Text>
      </div>

      <Group gap={5} visibleFrom="xs">
          <Button onClick={() => {scrollToSection('home')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Home</Button>
          <Button onClick={() => {scrollToSection('product')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Product</Button>
          <Button onClick={() => {scrollToSection('mission')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Mission</Button>
          <Button onClick={() => {scrollToSection('team')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Team</Button>
      </Group>
      </Container>
      <Divider size='xs'/>
    </header>
  )
}
