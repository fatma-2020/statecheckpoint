import React from "react";
import "./Profile.css";
import imgprofile from "./programmer.jpg"
class Profile extends React.Component {
  state = { timer: 0 };

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="profile">
        <div className="timer">Timer: {this.state.timer} seconds</div>
        <div className="dataprofile">
          <div className="profiledetails">
            <h3>Full Name : {this.props.name}</h3>
            <h3> Profession : {this.props.profession} </h3>
            <h6> Bio : {this.props.bio}</h6>
          </div>
          <div>
            <img src={imgprofile} alt="profilePhoto" />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
