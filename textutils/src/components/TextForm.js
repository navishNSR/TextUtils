import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [buttonText, newButtonText] = useState("Enable Dark Mode");
  const [bodyStyle, newBodyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    width: "100%",
  });

  const [toggleBtnStyle, newToggleBtnStyle] = useState({
    color: "white",
    backgroundColor: "#141715",
    width: "30vh",
  });

  const [buttonStyle, newButtonStyle] = useState({
    color: "White",
    backgroundColor: "#0045ad",
    width: "30vh",
  });

  const changeMode = () => {
    if (bodyStyle.backgroundColor === "white") {
      newBodyStyle({
        color: "white",
        backgroundColor: "black",
        width: "100%",
      });

      newButtonStyle({
        color: "black",
        backgroundColor: "cyan",
        width: "30vh",
      });

      newToggleBtnStyle({
        color: "#141715",
        backgroundColor: "white",
        width: "30vh",
      });

      newButtonText("Enable Light Mode");
    } else {
      newBodyStyle({
        color: "black",
        backgroundColor: "white",
        width: "100%",
      });

      newButtonStyle({
        color: "white",
        backgroundColor: "#0045ad",
        width: "30vh",
      });

      newToggleBtnStyle({
        color: "white",
        backgroundColor: "#141715",
        width: "30vh",
      });

      newButtonText("Enable Dark Mode");
    }
  };

  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const toCSV = () => {
    let newText = text.replaceAll(" ", ",");
    setText(newText);
  };

  const toJSON = () => {
    let charArray = text.split(" ");
    let newText = "{ \n }";
    for (let i = 0; i < charArray.length; i++) {
      newText = newText.replace(
        "\n",
        `\n"${charArray[i].toLowerCase()}" : "${charArray[i]}"\n`
      );
    }
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const capitalizeText = () => {
    let charArray = text.split(" ");
    let newText = "";
    for (let i = 0; i < charArray.length; i++) {
      newText +=
        charArray[i].charAt(0).toUpperCase() +
        charArray[i].slice(1).toLowerCase() +
        " ";
    }
    setText(newText.trim());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="main-container" style={{ ...bodyStyle, height: "200vh" }}>
        <div className="toggle-button text-center" style={bodyStyle}>
          <button
            type="button"
            className="btn btn-dark my-4"
            style={{ ...toggleBtnStyle }}
            onClick={changeMode}
          >
            {buttonText}
          </button>
        </div>
        <div className="container" style={bodyStyle}>
          <h1> {props.heading} </h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={bodyStyle}
            ></textarea>
            <div className="btn-container text-center my-3">
              <button
                className="btn btn-primary mx-2 my-2"
                style={buttonStyle}
                onClick={toUpperCase}
              >
                Change to Upper Case
              </button>
              <button
                className="btn btn-primary mx-2 my-2"
                style={buttonStyle}
                onClick={toLowerCase}
              >
                Change to Lower Case
              </button>
              <button
                className="btn btn-primary mx-2 my-2"
                style={buttonStyle}
                onClick={toCSV}
              >
                Change to CSV
              </button>
              <button
                className="btn btn-primary mx-2 my-2"
                style={buttonStyle}
                onClick={toJSON}
              >
                Change to JSON
              </button>
              <button
                className="btn btn-primary mx-2 my-2"
                style={buttonStyle}
                onClick={capitalizeText}
              >
                Capitalize Text
              </button>
              <button
                className="btn btn-primary mx-2 my-2"
                style={buttonStyle}
                onClick={clearText}
              >
                Clear Text
              </button>
            </div>
          </div>
        </div>
        <div className="container my-2" style={bodyStyle}>
          <h1 className="my-4">Your Text Summary</h1>
          <p className="my-3">
            {" "}
            {text.split(" ").length} Words {text.split("").length} Characters
          </p>
          <p className="my-3">
            {" "}
            {0.008 * text.split(" ").length} minutes it will take to read
            (Assuming 0.008 minutes per word)
          </p>
          <h3 className="my-4">Preview</h3>
          <p> {text}</p>
        </div>
      </div>
    </>
  );
}

// Event Listeners used in this page - onChange, onClick
