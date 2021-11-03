import React from "react";
import "./side-arrows.styles.css";

export const SideArrows = ({ number, changeNumber, size }) => {
	const handleChangeLeft = () => {
		if (number <= 0) {
			changeNumber(size - 1);
			return;
		}
		changeNumber(Number(number) - 1);
	};
	const handleChangeRight = () => {
		changeNumber((Number(number) + 1) % size);
	};

	return (
		<div className="side-arrows-container">
			<button onClick={handleChangeLeft}>🡠</button>
			<button onClick={handleChangeRight}>🡢</button>
		</div>
	);
};
