// import classes from './Home.module.css';
import { Card, Image, SimpleGrid, Text, useMantineTheme, Group, Badge, Title } from '@mantine/core';
import React from 'react'
import { IconAdjustments, IconRobot } from '@tabler/icons-react';
import productImage from '../../assets/product.jpg'

const data = [
  {
    title: 'Adjustable',
    description: 'Our socket can be changed to fit the fluctuations in residual limb size for our amputees, creating a perfect fit.',
    icon: IconAdjustments
  },
  {
    title: 'Automatic',
    description: 'This adjustment is completely hands-free, allowing users to go about their day without having to worry about their socket.',
    icon: IconRobot,
  }
]
export default function Product() {
  const theme = useMantineTheme();


  const features = data.map((feature) => (
    <div className="featuresContainer">
    <Card key={feature.title} shadow="md" radius="md" padding="xl" className='productCard'>
      <feature.icon style={{ width: 'rem(50)', height: 'rem(50)' }} stroke={2} color={theme.colors.blue[6]}/>
      <Text fz="lg" fw={500} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm" className='description'>
        {feature.description}
      </Text>
    </Card>
    </div>
  ))
  return (
    <div className="product" id="product">
      <div className='content'>
        {/* <div className='horizontal_stack'>
            <div>
                <h1 className='h1-intro'>Product</h1>
                <p>Product blurb</p>    
            </div>
            {features}
        </div> */}
        <Group justify="center">
        <Badge variant="filled" size="lg">
          Althia Medical
        </Badge>
      </Group>

      <Title order={2} ta="center" mt="sm">
        Generic Product Name
      </Title>

      <Image src={productImage} style={{ maxWidth: '300px', height: 'auto', borderRadius: '10px' }}/>

      <Text c="dimmed" ta="center" mt="md">
        Product description, we can say something though I'm not sure what. Something else about the product would be cool here. 
      </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
      </div>
    </div>
);
}
