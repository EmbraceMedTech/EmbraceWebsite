import { Container, Group, Anchor, ActionIcon, rem, Divider, Text } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';
import { IconBrandGmail } from '@tabler/icons-react';

const links = [
  { link: '#', label: 'Contact' },
//   { link: '#', label: 'Privacy' },
//   { link: '#', label: 'Blog' },
//   { link: '#', label: 'Careers' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  const clickGmail = () => {
    window.location = 'mailto:althiaprosthetics@gmail.com'
  }

  return (
    <div className={classes.footer}>
      <Divider my='md' size='xs'/>
      <div className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Text size='xl'>Althia Prosthetics</Text>
        {/* <Group className={classes.links}>{items}</Group>
        , */}
        {/* <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandGmail style={{ width: rem(25), height: rem(25) }} stroke={1.5} onClick={clickGmail}/>
        </ActionIcon> */}
        <div>
          <Text color='gray'>Email</Text>
          <Text>althiaprosthetics@gmail.com</Text>
          <Text color='gray'>Phone Number</Text>
          <Text>123-456-7890</Text>

        </div>
      </div>
    </div>
  );
}
