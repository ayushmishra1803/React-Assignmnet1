import React from "react";
import "./userOutput.css";
const userOutput = (props) => {
	return (
		<div className="output">
			<h1>Hello </h1>
			<p>My name is {props.name}</p>
			<p>{props.children}</p>
		</div>
	);
};
export default userOutput;
