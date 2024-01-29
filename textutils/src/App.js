import React from 'react'
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    // <NavBar/>
    // <NavBar title="TextUtils" />
    <>
      <NavBar title="TextUtils" about="About TextUtils" />
      <TextForm heading="Enter the text to Analyze" />
    </>
  );
}

export default App;
