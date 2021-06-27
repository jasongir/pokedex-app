import React from "react";
import "./top-left.styles.css";

export const TopLeft = () => {
	return (
		<>
			<div className="upper-section">
				<div className="upper-section-circle"></div>
				<div className="upper-section-three-dots">
					<div className="dot-1"></div>
					<div className="dot-2"></div>
					<div className="dot-3"></div>
				</div>
			</div>
			<div className="upper-left-triangle"></div>
			<div className="upper-left-triangle-cover"></div>
		</>
	);
};
