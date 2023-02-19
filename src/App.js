import logo from './logo.svg';
import './App.css';
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="App">
      <header className="App-header">
      <Button onClick={toggleColorMode} mt={7} size={10} mb={7}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <Text fontSize="2xl">
          ChakCRA
        </Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fork me on Github
        </a>
      </header>
    </div>
  );
}

export default App;
