import { Button, Grid, Image, Container, UnstyledButton, rem, Card, Overlay, Modal, Title, Text, Group, ActionIcon, Tooltip, CopyButton } from '@mantine/core';
import { useHover, useEventListener, useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { IconBrandLinkedin, IconMail, IconCheck } from '@tabler/icons-react';

import classes from './Team.module.css';
import memberData from './info.json';
console.log(memberData);
console.log(memberData['Christian Labrador'].key);
console.log("names", Object.keys(memberData));

// document.addEventListener('DOMContentLoaded', function() {
//     var pa = require('./info.json');
//     console.log(pa)
//     var meet_the_team = document.getElementsByClassName("meet_the_team")[0];
//     for (var key in pa) {
//         // var name = key
//         // var id = pa[key]["id"]
//         // var major = pa[key]["concentration"];
//         // var college = pa[key]["education"]
//         // var badge = document.createElement('div');
//         // badge.className = 'badge';
//         // badge.innerHTML = 
//         //     // '<img>' + img + '</img>' + 
//         //     '<h1>' + name + '</h1>' +
//         //     '<h2>' + major + '</h2>';
//         // console.log(badge)
//         const div = document.createElement('div');
//         const idSpan = document.createElement('span');
//         idSpan.textContent = `ID: ${key.id}, `;
//         div.appendChild(idSpan);

//         const nameSpan = document.createElement('span');
//         nameSpan.textContent = `Name: ${key.major}, `;
//         div.appendChild(nameSpan);

//         const ageSpan = document.createElement('span');
//         ageSpan.textContent = `Age: ${key.college}`;
//         div.appendChild(ageSpan);
//         meet_the_team.appendChild(div);    
//     }
// });

export default function Team() {
    const { hovered, ref } = useHover();
    const [opened, { close, open }] = useDisclosure(false);
    const membersArray = Object.values(memberData);
    let names = Object.keys(memberData);

    const setupMembers = () => {
        return (
            <Grid justify="space-between" align="stretch">
                {membersArray.map((member, index) => {
                    <Grid.Col span={3} style={{ minHeight: rem(200) }}>
                        <Image src={member.imageSrc} width="200px" height="300px" radius="md"/>
                        <Text size="xl" align="center" fw={700}>{names[index]}</Text>
                        <Text size="m" align="center">{member.education}</Text>
                        <Text size="m" align="center">{member.concentration}</Text>
                        <Group justify="center">
                            <a href={member.linkedin}>
                                <IconBrandLinkedin className={classes.linkedin_icon}/>
                            </a>
                            <CopyButton value={member.email} timeout={2000}>
                                {({ copied, copy }) => (
                                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                    <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                        {copied ? (
                                        <IconCheck className={classes.email_icon}/>
                                        ) : (
                                        <IconMail className={classes.email_icon}/>
                                        )}
                                    </ActionIcon>
                                    </Tooltip>
                                )}
                            </CopyButton>
                        </Group>
                    </Grid.Col>
                })}
            </Grid>
        )
    }
    return (
        <>
        <Container sz="lg" id="team">
        <div>
            <Title order={1} align="center" className={classes.subheader}>Meet the Team</Title>
        </div>
        </Container>
        <Container sz="lg">
        <div>
        <Text size="xl" align="center">Co-Founders</Text>
        </div>
        </Container>
        <Container size="xl">
            <div>
                {setupMembers()}
                <Grid justify="space-between" align="stretch">
                    <Grid.Col span={3} style={{ minHeight: rem(200) }}>
                        <Image src={require('./clab.png')} width="200px" height="300px" radius="md"/>
                        <Text size="xl" align="center" fw={700}>Christian Labrador</Text>
                        <Text size="m" align="center">Brown University</Text>
                        <Text size="m" align="center">Mechanical Engineering</Text>
                        <Group justify="center">
                            <a href="https://www.linkedin.com/in/christian-labrador-1ba425206/">
                                <IconBrandLinkedin className={classes.linkedin_icon}/>
                            </a>
                            <CopyButton value="christianl.althia@gmail.com" timeout={2000}>
                                {({ copied, copy }) => (
                                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                    <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                        {copied ? (
                                        <IconCheck className={classes.email_icon}/>
                                        ) : (
                                        <IconMail className={classes.email_icon}/>
                                        )}
                                    </ActionIcon>
                                    </Tooltip>
                                )}
                            </CopyButton>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={3} style={{ minHeight: rem(200) }}>
                        <Image src={require('./Joseph Headshot.jpeg')} width="200px" height="300px" radius="md"/>
                        <Text size="xl" align="center" fw={700}>Joseph Dewan</Text>
                        <Text size="m" align="center">Brown University</Text>
                        <Text size="m" align="center">Mechanical Engineering</Text>
                        <Group justify="center">
                            <a href="https://www.linkedin.com/in/joseph-dewan">
                                <IconBrandLinkedin className={classes.linkedin_icon}/>
                            </a>
                            <CopyButton value="joseph.althia@gmail.com" timeout={2000}>
                                {({ copied, copy }) => (
                                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                    <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                        {copied ? (
                                        <IconCheck className={classes.email_icon}/>
                                        ) : (
                                        <IconMail className={classes.email_icon}/>
                                        )}
                                    </ActionIcon>
                                    </Tooltip>
                                )}
                            </CopyButton>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={3} style={{ minHeight: rem(200) }}>
                        <Image src={require('./Paula_Headshot.jpeg')} width="200px" height="300px" radius="md"/>
                        <Text size="xl" align="center" fw={700}>Paula Rodriguez-Vilaboa</Text>
                        <Text size="m" align="center">Brown University</Text>
                        <Text size="m" align="center">Mechanical Engineering</Text>
                        <Group justify="center">
                            <a href="https://www.linkedin.com/in/paula-vilaboa">
                                <IconBrandLinkedin className={classes.linkedin_icon}/>
                            </a>
                            <CopyButton value="paula_rodriguez-_vilaboa@alumni.brown.edu" timeout={2000}>
                                {({ copied, copy }) => (
                                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                    <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                        {copied ? (
                                        <IconCheck className={classes.email_icon}/>
                                        ) : (
                                        <IconMail className={classes.email_icon}/>
                                        )}
                                    </ActionIcon>
                                    </Tooltip>
                                )}
                            </CopyButton>
                        </Group>
                    </Grid.Col>
                    {/* <Grid.Col>
                        <div class="meet-the-team"></div>
                    </Grid.Col> */}
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
            {/* <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
            <div id="meet_the_team" defer></div>
            <script type="text/javascript" src="./helper.js"></script> */}
        </>
    )
}


