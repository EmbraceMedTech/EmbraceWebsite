// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

// import { MantineProvider } from '@mantine/core';
import  Mission  from './components/Mission/Mission';
import Home from './components/Home/Home';
// import {Header} from './components/Header/Header';

export default function App() {
  return (
  <div>
    <Home/>
    <Mission/>
  </div>
  )
}
