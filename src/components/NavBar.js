import React from 'react'
import PropTypes from 'prop-types'

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid" style={{backgroundColor: 'black'}}>
        <a className="navbar-brand mx-4" style={{fontSize: '2rem'}}href="/">
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
      </div>
    </nav>
  );
}

export default NavBar;

NavBar.propTypes = {
    title: PropTypes.string.isRequired,   // If .isRequired is written it means either we have to send props or we have to set default props.
    aboutText: PropTypes.string
}

NavBar.defaultProps = {
    title: "Website Title",
    aboutText: "About Text Here"
}