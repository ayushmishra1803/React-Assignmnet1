import React from "react";
import "./userinput.css";
const userInput = (props) => {
	return (
		<div className="userInput">
			<label>Enter the Username</label>:- &nbsp;
			<input
				className="inputfield"
				type="text"
				value={props.name}
				onChange={props.change}
			/>
			<br/>
		</div>
	);
};
export default userInput;
