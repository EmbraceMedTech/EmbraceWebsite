// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

// import { MantineProvider } from '@mantine/core';
import  Mission  from './components/Mission/Mission';

export default function App() {
  return (
  <div>
    <Mission/>
  </div>
  )
}
