import { Button, Grid, Image, Container, UnstyledButton, rem, Card, Overlay, Modal, Title, Text, Group } from '@mantine/core';
import { useHover, useEventListener, useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

function C() {
    return (
      <Card
        shadow="sm"
        padding="xl"
      >
        <Card.Section>
          <Image
            src='./clab.png'
            h={160}
          />
        </Card.Section>
  
        <Text fw={500} size="lg" mt="md">
          Email: 
        </Text>
      </Card>
    );
  }

// function Demo() {
//     const ref = useEventListener('click');
//     return <Card ref={ref}>Button clicks: {count}</Card>;
//   }

function Info() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Modal.Root opened={opened} onClose={close}>
            <Modal.Overlay />
            <Modal.Content>
            <Modal.Header>
                <Modal.Title>Althia Prosthetics</Modal.Title>
                <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
                <Container span={1}>
                    <Text size="xl">Christian Labrador</Text>
                </Container>
                <Container span={1}>
                    <Text size="l">Brown University, Sc.B. Mechanical Engineering</Text>
                </Container>
                <Container span={1}>
                    <Text size="l">Minnesota</Text>
                </Container>
            </Modal.Body>
            </Modal.Content>
        </Modal.Root>

        <Button onClick={open}>Open modal</Button>
        </>
    );
}

var pa = require('./info.json');
var team_member_info = document.getElementsByClassName("meet-the-team")[0];
for (var key in team_member_info) {
    for (var i = 0; i < team_member_info[key].length; i++) {
        var name = team_member_info[key][i].Name;
        var major = team_member_info[key][i].Major;
        var img = team_member_info[key][i].Image;
        var badge = document.createElement('div');
        badge.className = 'badge';
        badge.innerHTML = 
            // '<img>' + img + '</img>' + 
            '<h1>' + name + '</h1>' +
            '<h2>' + major + '</h2>';
        document.getElementById(key).appendChild(badge);    
    }
}

export default function Team() {
    const { hovered, ref } = useHover();
    const [opened, { close, open }] = useDisclosure(false);
    return (
        <>
        <Container sz="lg" id="team">
        <div>
            <Title order={1} align="center">Meet the Team</Title>
        </div>
        </Container>
        <Container sz="lg">
        <div>
        <Text size="xl" align="center">Co-Founders</Text>
        </div>
        </Container>
        <Container size="xl">
            <div>
                <Grid>
                    <Grid.Col span={4} style={{ minHeight: rem(200) }}>
                        <Image src={require('./clab.png')} />
                        <Text size="xl" align="center" fw={700}>Christian Labrador</Text>
                        <Text size="m" align="center">Mechanical Engineering, 2024</Text>
                        <Text size="m" align="center">Brown University</Text>
                        <Group align="center">
                            <Button variant="light">LinkedIn</Button>
                            <Button variant="light">Email</Button>
                        </Group>
                    </Grid.Col>
                    <Grid.Col>
                        <div class="meet-the-team"></div>
                    </Grid.Col>
                    {/* <Grid.Col span={4} style={{ minHeight: rem(200) }}>
                    <Modal opened={opened} onClose={close} size="auto" title="Modal size auto" overlayProps={{backgroundOpacity: 0.55, blur: 3,}}></Modal>
                    <div ref={ref}>
                        {hovered ? <button onClick={open} style={{height:"250px",width:"250px"}}><Image src={require('./clab.png')} border="0" width="60"/> </button>: <button style={{height:"200px",width:"200px"}}><Image src={require('./clab.png')} border="0" width="60"/> </button>}
                    </div>
                    </Grid.Col>
                    <Grid.Col span={4} style={{ minHeight: rem(120) }}>
                        <Modal opened={opened} onClose={close} size="auto" title="Althia Prosthetics" overlayProps={{backgroundOpacity: 0.002, blur: 3,}}><Text size="xl">Christian Labrador</Text></Modal>
                        <Button onClick={open}>Open modal</Button>
                    </Grid.Col>
                    <Grid.Col span={4} style={{ minHeight: rem(120) }}>
                        <Modal opened={opened} onClose={close} size="auto" title="Althia Prosthetics" overlayProps={{backgroundOpacity: 0.002, blur: 3,}}><Text size="xl">Christian Labrador</Text></Modal>
                        <Button onClick={open}>Open modal</Button>
                    </Grid.Col>
                    <Grid.Col span={4} style={{ minHeight: rem(120) }}>
                        <Modal opened={opened} onClose={close} size="auto" title="Althia Prosthetics" overlayProps={{backgroundOpacity: 0.002, blur: 3,}}><Text size="xl">Christian Labrador</Text></Modal>
                        <Button onClick={open}>Open modal</Button>
                    </Grid.Col> */}
                </Grid>
            </div>
        </Container>
        </>
    )
}
