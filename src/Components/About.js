import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio1 = this.props.data.bio1;
    const bio2 = this.props.data.bio2;
    const bio3 = this.props.data.bio3;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const resumeRequest = this.props.data.resumeRequest;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Kiley Carson Profile Pic"
              />
              <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {city}, {state}
                    </span>
                </p>
              <a href={resumeDownload} className="button" download={true}>
                    <i className="fa fa-download"></i>   Download resume
              </a>
              <p className="resume-text">{resumeRequest}</p>
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio1}</p>
              <p>{bio2}</p>
              <p>{bio3}</p>
              <div className="row">
                <div className="columns contact-details">
                  
                </div>
                <div className="columns download">
                  <p>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;