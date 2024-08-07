import { Menu, Group, Center, Burger, Container, Text, Button, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './Header.module.css';
import { useState, useEffect } from 'react';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);
  
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
        console.log('scroll direction:', direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    }
  }, [scrollDirection]);

  return scrollDirection
}
export function Header() {
  const scrollDirection = useScrollDirection();
  const [opened, { toggle }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);
  // Current implementation requires the outermost div inside a component to have an id to jump to that section 
  // (see Mission.jsx and look for the id tagfor an example)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPos = element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPos,
        behavior: "smooth"
      })
    }
  }
  
  return (
    <header className={`${classes.header} ${scrollDirection === 'down' ? classes.hide : classes.show}`} >
      <Container size='sm' className={classes.inner}>
      <div>
        <Text fw={700} size='lg'>Embrace Medical Technology</Text>
      </div>
      <Menu hiddenFrom="xs">
        <Menu.Target>
          <Burger aria-label="Toggle menu" />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={() => {scrollToSection('home')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Home</Menu.Item>
          <Menu.Item onClick={() => {scrollToSection('product')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Product</Menu.Item>
          <Menu.Item onClick={() => {scrollToSection('mission')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Mission</Menu.Item>
          <Menu.Item onClick={() => {scrollToSection('team')}} className={classes.headerButton} variant='subtle' color='black' radius='lg'>Team</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      
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
