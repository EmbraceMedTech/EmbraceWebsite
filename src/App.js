// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

// import { MantineProvider } from '@mantine/core';
import  Mission  from './components/Mission/Mission';
import Home from './components/Home/Home';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import Team from './components/Team/Team';

export default function App() {
  return (
  <div>
    <Header/>
    <Home/>
    <Mission/>
    <Team/>
    <Footer/>
  </div>
  )
}
