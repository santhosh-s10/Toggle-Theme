import Home from "./Components/Home";
import { ThemeContext } from "./Contexts/ThemeContext";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
   <div>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Home/>
    </ThemeContext.Provider>
   </div>
  );
}

export default App;
