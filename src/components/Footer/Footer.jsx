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

  return (
    <div className={classes.footer}>
      <Divider my='md' size='xs'/>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Text size='xl'>Althia Prosthetics</Text>
        {/* <Group className={classes.links}>{items}</Group>
        , */}
        <ActionIcon size="lg" color="gray" variant="subtle">
          <IconBrandGmail style={{ width: rem(25), height: rem(25) }} stroke={1.5}/>
        </ActionIcon>
      </Container>
    </div>
  );
}
