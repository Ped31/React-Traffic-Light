import React, { useState } from "react";
import "../../styles/trafficlight.css";

function Traffic() {
	let [state, setState] = useState({
		red: "redLight",
		yellow: "yellowLight",
		green: "greenLight"
	});
	return (
		<div className="container">
			<div className="holder" />
			<div className="trafficLight">
				<div
					className={state.red}
					onClick={() =>
						setState({
							red: "redBright",
							yellow: "yellowLight",
							green: "greenLight"
						})
					}
				/>

				<div
					className={state.yellow}
					onClick={() =>
						setState({
							red: "redLight",
							yellow: "yellowBright",
							green: "greenLight"
						})
					}
				/>
				<div
					className={state.green}
					onClick={() =>
						setState({
							red: "redLight",
							yellow: "yellowLight",
							green: "greenBright"
						})
					}
				/>
			</div>
		</div>
	);
}

export default Traffic;
