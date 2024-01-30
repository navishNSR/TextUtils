import React, { useState } from "react";

export default function TextForm(props) {
  // States
  const [text, setText] = useState("");

  /* These are the states I used while implementing Dark Mode in Same Component.
    Now it changed to global i.e. I have applied for whole application by doing it
    in App.js and sending it as props to different components */
  // const [buttonText, setButtonText] = useState("Enable Dark Mode");

  // const [bodyStyle, setBodyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   width: "100%",
  // });

  // const [toggleBtnStyle, setToggleBtnStyle] = useState({
  //   color: "white",
  //   backgroundColor: "#141715",
  //   width: "30vh",
  // });

  // const [buttonStyle, newButtonStyle] = useState({
  //   color: "White",
  //   backgroundColor: "#0045ad",
  //   width: "30vh",
  // });

  // // Change Mode Light/Dark
  // const changeMode = () => {
  //   if (bodyStyle.backgroundColor === "white") {
  //     setBodyStyle({
  //       color: "white",
  //       backgroundColor: "#404040",
  //       width: "100%",
  //     });

  //     newButtonStyle({
  //       color: "black",
  //       backgroundColor: "#00ccff",
  //       width: "30vh",
  //     });

  //     // setToggleBtnStyle({
  //     //   color: "#141715",
  //     //   backgroundColor: "white",
  //     //   width: "30vh",
  //     // });

  //     // setButtonText("Enable Light Mode");
  //   } else {
  //     setBodyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       width: "100%",
  //     });

  //     newButtonStyle({
  //       color: "white",
  //       backgroundColor: "#0045ad",
  //       width: "30vh",
  //     });

  //     setToggleBtnStyle({
  //       color: "white",
  //       backgroundColor: "#141715",
  //       width: "30vh",
  //     });

  //     setButtonText("Enable Dark Mode");
  //   }
  // };

  // All Functions - Used for Event Listeners below

  const handleOnChange = (event) => {
    setText(event.target.value);
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

  const copyText = () => {
    let textInTextArea = document.getElementById("myBox");
    textInTextArea.select();
    navigator.clipboard.writeText(textInTextArea.value);
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const changeCSVtoList = () => {
    let newText = text.replaceAll(',', '\n');
    setText(newText);
  }

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  // Return Components

  return (
    <>
      <div className="main-container my-3">
        {/* <div className="toggle-button text-center">
          <button
            type="button"
            className="btn btn-dark my-4"
            style={{ ...toggleBtnStyle }}
            onClick={changeMode}
          >
            {buttonText}
          </button>
        </div> */}
        <div
          className={`container bg-${
            props.mode === "dark" ? "black" : "light"
          }`}
        >
          <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
            {" "}
            {props.heading}{" "}
          </h1>
          <div className="mb-3">
            <textarea
              className={`form-control bg-${
                props.mode === "dark" ? "black" : "light"
              } text-${props.mode === "dark" ? "light" : "dark"}`}
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              // style={bodyStyle}
            ></textarea>
            <div className="btn-container text-center my-3">
              <button
                className="btn btn-primary mx-2 my-2"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#14bdad" : "#0045ad",
                  color: props.mode === "dark" ? "black" : "white",
                  width: "30vh",
                }}
                onClick={toUpperCase}
              >
                Change to Upper Case
              </button>

              <button
                className="btn btn-primary mx-2 my-2"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#14bdad" : "#0045ad",
                  color: props.mode === "dark" ? "black" : "white",
                  width: "30vh",
                }}
                onClick={toLowerCase}
              >
                Change to Lower Case
              </button>

              <button
                className="btn btn-primary mx-2 my-2"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#14bdad" : "#0045ad",
                  color: props.mode === "dark" ? "black" : "white",
                  width: "30vh",
                }}
                onClick={toCSV}
              >
                Change to CSV
              </button>

              <button
                className="btn btn-primary mx-2 my-2"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#14bdad" : "#0045ad",
                  color: props.mode === "dark" ? "black" : "white",
                  width: "30vh",
                }}
                onClick={toJSON}
              >
                Change to JSON
              </button>

              <button
                className="btn btn-primary mx-2 my-2"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#14bdad" : "#0045ad",
                  color: props.mode === "dark" ? "black" : "white",
                  width: "30vh",
                }}
                onClick={capitalizeText}
              >
                Capitalize Text
              </button>

              <button
                className="btn btn-primary mx-2 my-2"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#14bdad" : "#0045ad",
                  color: props.mode === "dark" ? "black" : "white",
                  width: "30vh",
                }}
                onClick={copyText}
              >
                Copy Text
              </button>

              <button
                className="btn btn-primary mx-2 my-2"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#14bdad" : "#0045ad",
                  color: props.mode === "dark" ? "black" : "white",
                  width: "30vh",
                }}
                onClick={removeExtraSpaces}
              >
                Remove Extra Spaces
              </button>

              <button
                className="btn btn-primary mx-2 my-2"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#14bdad" : "#0045ad",
                  color: props.mode === "dark" ? "black" : "white",
                  width: "30vh",
                }}
                onClick={changeCSVtoList}
              >
                Change CSV to List
              </button>

              <button
                className="btn btn-primary mx-2 my-2"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#14bdad" : "#0045ad",
                  color: props.mode === "dark" ? "black" : "white",
                  width: "30vh",
                }}
                onClick={clearText}
              >
                Clear Text
              </button>
            </div>
          </div>
        </div>
        <div
          className={`container my-2 bg-${
            props.mode === "dark" ? "black" : "light"
          }`}
        >
          <h1
            className={`my-4 text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            Your Text Summary
          </h1>
          <p
            className={`my-3 text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            {" "}
            {text.split(" ").length} Words {text.split("").length} Characters
          </p>
          <p
            className={`my-3 text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            {" "}
            {0.008 * text.split(" ").length} minutes it will take to read
            (Assuming 0.008 minutes per word)
          </p>
          <h3
            className={`my-4 text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            Preview
          </h3>
          <p
            className={`my-3 text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            {" "}
            {text}
          </p>
        </div>
      </div>
    </>
  );
}

// Event Listeners used in this page - onChange, onClick
