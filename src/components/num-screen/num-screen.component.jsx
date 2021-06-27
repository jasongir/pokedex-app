import React from "react";
import "./num-screen.styles.css";

export const NumScreen = ({ number, changeNumber }) => {
	const handleNumberChange = (e) => {
		const currentInputNum = Number(e.target.value);
		if (currentInputNum >= 1 && currentInputNum <= 151) {
			changeNumber(currentInputNum - 1);
		}
	};

	return (
		<input
			value={number}
			onChange={handleNumberChange}
			type="number"
			name="pokemon-number"
			id="choose-pokemon-number"
			min={1}
			max={151}
		/>
	);
};
