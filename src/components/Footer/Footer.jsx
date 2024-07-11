import { Container, Group, Anchor, ActionIcon, rem, Divider, Text, Button } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';
import { IconBrandGmail } from '@tabler/icons-react';
import  scrollToSection  from '../../utils/scrollToSection';

const links = ['Home', 'Product', 'Mission', 'Team'];

export function Footer() {
  const items = links.map((link) => (
    <Button className={classes.footerButton} onClick={() => {scrollToSection(link.toLowerCase())}} variant='transparent' color='black' radius='lg' c="dimmed">
      {link}
    </Button>
  ));

  const clickGmail = () => {
    window.location = 'mailto:althiaprosthetics@gmail.com'
  }

  return (
    <div className={classes.footer}>
      <Divider my='md' size='xs'/>
      <div className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Text size='xl' fw={700}>Althia Medical</Text>
        <div>{items}</div>
        
        {/* <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandGmail style={{ width: rem(25), height: rem(25) }} stroke={1.5} onClick={clickGmail}/>
        </ActionIcon> */}

        <div>
          <Text color='gray'>Email</Text>
          <Text>althiaprosthetics@gmail.com</Text>
          <Text color='gray'>Phone Number</Text>
          <Text>763-232-6891</Text>
        </div>
      </div>
    </div>
  );
}
