import "./zoom-buttons.styles.css";

export const ZoomButtons = ({
	setZoomIn,
	zoomVal,
	scrollLeftAmount,
	setScrollLeftAmount,
	scrollTopAmount,
	setScrollTopAmount,
}) => {
	const zoomIn = () => setZoomIn(true);
	const zoomOut = () => setZoomIn(false);

	const [scrollAmount, scrollTopLength, scrollLeftLength] = [5, 816, 125];

	const scrollUp = () => {
		if (scrollTopAmount > 0) setScrollTopAmount(scrollTopAmount - scrollAmount);
	};

	const scrollDown = () => {
		if (scrollTopAmount < scrollTopLength)
			setScrollTopAmount(scrollTopAmount + scrollAmount);
	};

	const scrollLeft = () => {
		if (scrollLeftAmount > 0)
			setScrollLeftAmount(scrollLeftAmount - scrollAmount);
	};
	const scrollRight = () => {
		if (scrollLeftAmount < 125)
			setScrollLeftAmount(scrollLeftAmount + scrollAmount);
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
				<button className="scroll-btn up-btn" onClick={scrollUp}></button>
				<div className="d-pad upper-right-corner"></div>
				<button className="scroll-btn left-btn" onClick={scrollLeft}></button>
				<div className="d-pad center"></div>
				<button className="scroll-btn right-btn" onClick={scrollRight}></button>
				<div className="d-pad lower-left-corner"></div>
				<button className="scroll-btn down-btn" onClick={scrollDown}></button>
				<div className="d-pad lower-right-corner"></div>
			</div>
		</div>
	);
};
