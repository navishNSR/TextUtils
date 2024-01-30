import React from "react";
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode==='dark'?'black':'light'} bg-${props.mode==='dark'?'black':'light'}`}
    >
      <div className={`container-fluid`} >
        <a className={`navbar-brand mx-4 text-${props.mode==='dark'?'light':'dark'}`} style={{ fontSize: "2rem" }} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
        </div> */}
        {/* <div className={`form-check form-switch text-${!props.mode}`}> */}
        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
            style={{
              background: props.mode === 'dark' ? '#14bdad' : 'white',
              transition: 'background-color 0.3s ease-in-out',
              cursor: 'pointer',
              borderColor: props.mode === 'dark' ? 'white' : 'black',
            }}
          />
          <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault">
            Enable {props.mode==='light'?'Dark':'Light'} Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

NavBar.propTypes = {
  title: PropTypes.string.isRequired, // If .isRequired is written it means either we have to send props or we have to set default props.
  aboutText: PropTypes.string,
};

NavBar.defaultProps = {
  title: "Website Title",
  aboutText: "About Text Here",
};
