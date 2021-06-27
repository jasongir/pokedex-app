import "./zoom-buttons.styles.css";

export const ZoomButtons = ({ setZoomIn, zoomVal, setDirection }) => {
	const zoomIn = () => {
		if (!zoomVal) {
			console.log(setZoomIn, zoomVal);
			setZoomIn(true);
		}
	};

	const zoomOut = () => {
		if (zoomVal) {
			console.log(setZoomIn, zoomVal);
			setZoomIn(false);
		}
	};
	return (
		<div className="zoom-buttons">
			<div className="zoom">
				<button className="zoom-in" onClick={zoomIn}>
					+
				</button>
				<button className="zoom-out" onClick={zoomOut}>
					-
				</button>
			</div>
			<div className="scroll">
				<div className="d-pad upper-left-corner"></div>
				<div className="d-pad up">
					<button className="scroll-btn up-btn"></button>
				</div>
				<div className="d-pad upper-right-corner"></div>
				<button className="scroll-btn left-btn"></button>
				<div className="d-pad center"></div>
				<button className="scroll-btn right-btn"></button>
				<div className="d-pad lower-left-corner"></div>
				<button className="scroll-btn down-btn"></button>
				<div className="d-pad lower-right-corner"></div>
			</div>
		</div>
	);
};
