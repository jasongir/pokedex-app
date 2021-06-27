import "./info-screen.styles.css";
import { useRef, useEffect } from "react";

export const InfoScreen = ({
	currentPokemon,
	zoomIn,
	scrollLeft,
	scrollTop,
}) => {
	const { name, moves, stats, types, weight, height } = currentPokemon;

	const infoDiv = useRef(null);
	const infoScreen = useRef(null);

	const zoom = (ref, zoomIn) => {
		const current = ref.current;
		const zoomInScale = 2;
		const zoomOutScale = 1 / zoomInScale;

		if (zoomIn) {
			// If we're zooming in
			current.style.transform = `scale(${zoomInScale})`;
			current.style.top = "250px";
			current.style.left = "100px";
		} else {
			// If we are zooming out
			current.style.transform = `scale(1)`;
			current.style.top = "20px";
			current.style.left = "15px";
		}
	};

	const pan = (ref, direction, amount) => {
		const current = ref.current;
		switch (direction) {
			case "up":
				break;
			case "down":
				break;
			case "right":
				break;
			case "left":
				break;
		}
	};

	useEffect(() => {
		if (infoDiv.current != null) zoom(infoDiv, zoomIn);
	}, [zoomIn]);

	return (
		<div className="info-screen" ref={infoScreen}>
			{name && moves && stats && types && weight && height && (
				<div className="info-container" ref={infoDiv}>
					<h1
						id="pokemon-name"
						className="name-heading"
						onClick={() => zoom(infoDiv, true)}
					>
						{name}
					</h1>
					<div className="info-division"></div>
					<div className="height-weight-container">
						<h3 id="pokemon-height" onClick={() => zoom(infoDiv, false)}>
							Height: {Number(height) * 10} cm
						</h3>
						<h3 id="pokemon-weight">Weight: {Number(weight) * 0.1} kg</h3>
					</div>
					<div className="info-division"></div>

					<h3 id="pokemon-types">Types:</h3>
					<ul>
						{types.map((type) => (
							<li key={type.type.name}>{type.type.name}</li>
						))}
					</ul>
					<div className="info-division"></div>

					<table>
						<tbody>
							<tr>
								<th className="statistics-th" colSpan={2}>
									Statistics
								</th>
							</tr>
							<tr>
								<th>HP:</th>
								<td>{stats[0].base_stat}</td>
							</tr>

							<tr>
								<th>Attack:</th>
								<td>{stats[1].base_stat}</td>
							</tr>
							<tr>
								<th>Defense:</th>
								<td>{stats[2].base_stat}</td>
							</tr>
							<tr>
								<th>Special Attack:</th>
								<td>{stats[3].base_stat}</td>
							</tr>
							<tr>
								<th>Special Defense:</th>
								<td>{stats[4].base_stat}</td>
							</tr>
							<tr>
								<th>Speed:</th>
								<td>{stats[5].base_stat}</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};
