import React, { useState } from "react";
import "./pic-screen.styles.css";

export const PicScreen = ({ name, frontUrl, backUrl }) => {
	const [currentSide, setCurrentSide] = useState("front");

	const flipSide = () =>
		currentSide === "front" ? setCurrentSide("back") : setCurrentSide("front");

	return (
		<div className="pic-screen">
			<div className="pic-screen-white-1">
				<img
					className="pokemon-img"
					src={currentSide === "front" ? frontUrl : backUrl}
					alt={`${name}, ${currentSide === "front" ? "" : "back"} default view`}
				/>
			</div>
			<div className="pic-screen-white-2"></div>

			<div className="pic-screen-yellow"></div>
			<button className="pic-screen-button" onClick={flipSide}>
				🔄
			</button>
			<div className="four-vents">
				<div className="vent"></div>
				<div className="vent"></div>
				<div className="vent"></div>
				<div className="vent"></div>
			</div>
		</div>
	);
};
