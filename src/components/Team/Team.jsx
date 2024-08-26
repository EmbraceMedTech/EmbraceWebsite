import { Anchor, Button, Grid, Image, Container, UnstyledButton, rem, Card, Overlay, Modal, Title, Text, Group, ActionIcon, Tooltip, CopyButton } from '@mantine/core';
import { useHover, useEventListener, useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import { IconBrandLinkedin, IconMail, IconCheck } from '@tabler/icons-react';


import classes from './Team.module.css';
import memberData from './info.json';
// import image from './images/clab.png';
console.log(memberData);
console.log(memberData['Christian Labrador'].key);
// console.log("calb", image);

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
    const [membersArray, setMembersArray] = useState([]);
    let names = Object.keys(memberData);
    const fetchMembersData = async () => {
        // Simulate a fetch call
        // const fetchedData = await fetch('your-api-endpoint');
        const jsonData = require('./info.json');
        setMembersArray(Object.values(jsonData));
    };
    const isMobile = useMediaQuery('(max-width: 576px)');

    useEffect(() => {
        fetchMembersData();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <>
            <Container sz="lg" id="team">
                <div>
                    <Title order={1} align="center" className={classes.subheader}>Meet the Team</Title>
                </div>
            </Container>
            <Container sz="lg">
                <div>
                    {/* <Text size="xl" align="center">Co-Founders</Text> */}
                </div>
            </Container>
            <Container size="xl">
                <div>
                    <Grid justify="space-around" align="stretch">
                        {membersArray.map((member, index) => (

                            <Grid.Col span={isMobile ? 6 : 3} style={{ minHeight: rem(200) }} key={index}>
                                {/* <img src={`${member.image}`} alt={`Member ${index}`} /> */}
                                <Image src={member.image_path} width="100%" height="auto" radius="md" alt={`Member ${index}`} />
                                <Text size="xl" align="center" fw={700}>{names[index]}</Text>
                                <Text size="m" align="center">{member.education}</Text>
                                <Text size="m" align="center">{member.concentration}</Text>
                                <Group justify="center">
                                    <Text size="m" align="center">{member.email}</Text>
                                    {member.email ?
                                        <CopyButton value={member.email} timeout={2000}>
                                            {({ copied, copy }) => (
                                                <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                                    <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                                                        {copied ? (
                                                            <IconCheck className={classes.email_icon} />
                                                        ) : (
                                                            <IconMail className={classes.email_icon} />
                                                        )}
                                                    </ActionIcon>
                                                </Tooltip>
                                            )}
                                        </CopyButton> : null}

                                    {
                                        member.linkedin ? <a href={member.linkedin}>
                                            <IconBrandLinkedin className={classes.linkedin_icon} />
                                        </a> : null
                                    }
                                </Group>
                            </Grid.Col>
                        ))}
                    </Grid>

                </div>
            </Container>
            {/* <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
            <div id="meet_the_team" defer></div>
            <script type="text/javascript" src="./helper.js"></script> */}
        </>
    )
}

/*
Old json Gabrielle section IM TOO LAZY TO CODE RENDER 4 PEOPLE SORRY
    "Gabrielle Shieh" : {
        "id" : 4,
        "education" : "Brown University",
        "concentration" : "Computer Science",
        "image_path": "/memberImages/clab.png",
        "linkedin": "https://www.linkedin.com/in/paula-vilaboa",
        "email": "paula_rodriguez-_vilaboa@alumni.brown.edu"
    }
*/
