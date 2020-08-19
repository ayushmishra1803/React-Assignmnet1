import React, { Component } from "react";
import UserOutput from "./userOutput/userOutput";
import UserInput from "./userInput/userInput";
import "./App.css";
class App extends Component {
	state = {
		username: "Ayush",
	};
	usernameSwtichHandler = (props) => {
		this.setState({
			username: props.target.value,
		});
	};
	render() {
		return (
			<div className="App">
				<h1>Assignment-1</h1>
				<UserInput
					name={this.state.username}
					change={this.usernameSwtichHandler}
				/>
				<UserOutput name={this.state.username}>
					I am Computer Science Student{" "}
				</UserOutput>
				<UserOutput name={this.state.username} />
				<UserOutput name={this.state.username} />
			</div>
		);
	}
}

export default App;
