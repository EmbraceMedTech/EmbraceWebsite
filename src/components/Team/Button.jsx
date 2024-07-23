// import { Box, BoxProps, createPolymorphicComponent, Group } from '@mantine/core';

// interface MyButtonProps extends BoxProps {
//     label: string;
//   }
  
// const MyButton = createPolymorphicComponent<'button', MyButtonProps>(
//     forwardRef<HTMLButtonElement, MyButtonProps>(({ label, ...others }, ref) => (
//       <Box component="button" {...others} ref={ref}>
//         {label}
//       </Box>
//     ))
//   );

// function Demo() {
//     return (
//       <Group>
//         <MyButton label="Button by default" />
//         <MyButton
//           label="MyButton as anchor"
//           component="a"
//           href="https://mantine.dev"
//           target="_blank"
//         />
//       </Group>
//     );
//   }
