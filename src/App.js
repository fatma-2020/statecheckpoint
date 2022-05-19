import React from "react";
import "./App.css";
import Profile from "./Components/Profile/Profile.js";
class App extends React.Component {
  state = {
    show: false,
    fullName: "Full Stack Developer",
    profession: "Keep fast computers slow",
    bio: "A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side",
  };

  render() {
    return (
      <div className="App">
        <button
          className="button-52"
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {this.state.show ? "Hide" : "Show"}
        </button>

        {this.state.show && (
          <Profile
            name={this.state.fullName}
            profession={this.state.profession}
            bio={this.state.bio}
          />
        )}
      </div>
    );
  }
}

export default App;
