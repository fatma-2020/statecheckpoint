import React from "react";
import "./App.css";
import Profile from "./Components/Profile/Profile.js";
class App extends React.Component {
  state = { show: false };

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

        {this.state.show && <Profile />}
      </div>
    );
  }
}

export default App;
