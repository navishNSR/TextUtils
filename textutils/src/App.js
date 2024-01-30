import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      // document.body.style.backgroundColor = '#212529';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    // <NavBar/>
    // <NavBar title="TextUtils" />
    <>
      <NavBar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm
        heading="Enter the text to Analyze"
        mode={mode}
        toggleMode={toggleMode}
      />
    </>
  );
}

export default App;
