import React from "react";
import Trafficlight from "./trafficlight.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Trafficlight />
		</div>
	);
}
