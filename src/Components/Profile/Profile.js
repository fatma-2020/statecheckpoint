import React from "react";
import profileimg from "./programmer.jpg";
import "./Profile.css";
class Profile extends React.Component {
  state = { timer: 0 };

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer+1 });
    }, 1000);
  }

  render() {
    return (
      <div className="profile">
        <div className="timer">Timer: {this.state.timer} seconds</div>
        <div className="dataprofile">
          <div className="profiledetails">
            <h3>Full Name : Full Stack Developer</h3>
            <h3> Profession : Keep fast computers slow </h3>
            <h6> Bio : 
            A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side
            </h6>
          </div>
          <div >
            <img src={profileimg} alt="profilePhoto" />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;