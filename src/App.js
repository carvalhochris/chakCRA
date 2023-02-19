import logo from './logo.svg';
import './App.css';
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <div className="App">
      <header className="App-header">
      <Button onClick={toggleColorMode} mt={7} size={10} mb={7}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We make ideas come to life
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}

export default App;
