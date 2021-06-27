import React, { useEffect, useState } from "react";
import "./pokedex.styles.css";

import { PicScreen } from "../pic-screen/pic-screen.component";
import { TopLeft } from "../top-left-section/top-left.component";
import { NumScreen } from "../num-screen/num-screen.component";
import { NumButtons } from "../num-buttons/num-buttons.component";
import { SideArrows } from "../side-arrows/side-arrows.component";
import { InfoScreen } from "../info-screen/info-screen.component";
import { ZoomButtons } from "../zoom-buttons/zoom-buttons.component";

export const Pokedex = () => {
	// Array for storing json data for each pokemon:
	// name, image urls, number, etc.
	const [allPokemon, setAllPokemon] = useState([]);
	// the current Pokemon we're on
	const [currentPokemon, setCurrentPokemon] = useState({});

	// pokemon to currently display
	const [pokeNumber, setPokeNumber] = useState(0);
	// name of pokemon currently displayed
	const [name, setName] = useState("");
	// urls for images, to pass into image component
	const [frontImageUrl, setFrontImageUrl] = useState("");
	const [backImageUrl, setBackImageUrl] = useState("");

	// state related to the zooming on the right side of the screen
	const [zoomIn, setZoomIn] = useState(false);
	useEffect(() => console.log(zoomIn), [zoomIn]);
	const [scrollLeft, setScrollLeft] = useState(false);
	const [scrollTop, setScrollTop] = useState(false);

	let firstAllPokemon = [];

	const fetchPokemonData = async (pokemon) => {
		fetch(pokemon.url)
			.then((res) => res.json())
			.then((pokemon) => {
				firstAllPokemon = [...firstAllPokemon, pokemon];
				setAllPokemon(
					firstAllPokemon.sort(
						(poke1, poke2) => Number(poke1.id) - Number(poke2.id)
					)
				);
			});
	};

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
			.then((res) => res.json())
			.then(async (pokes) => {
				const pokeArray = pokes.results;
				await pokeArray.forEach(fetchPokemonData);
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		if (allPokemon.length === 151) {
			setName(allPokemon[pokeNumber].name);
			setFrontImageUrl(allPokemon[pokeNumber].sprites.front_default);
			setBackImageUrl(allPokemon[pokeNumber].sprites.back_default);
			setCurrentPokemon(allPokemon[pokeNumber]);
			// console.log(allPokemon);
		}
	}, [allPokemon]);

	useEffect(() => {
		if (allPokemon.length === 151) {
			setName(allPokemon[pokeNumber].name);
			setFrontImageUrl(allPokemon[pokeNumber].sprites.front_default);
			setBackImageUrl(allPokemon[pokeNumber].sprites.back_default);
			setCurrentPokemon(allPokemon[pokeNumber]);
		}
	}, [pokeNumber]);

	return (
		<div className="entire-pokedex">
			<section>
				<div className="left-side">
					<TopLeft />
					<PicScreen
						name={name}
						frontUrl={frontImageUrl}
						backUrl={backImageUrl}
					/>
					<NumScreen
						number={Number(pokeNumber) + 1}
						changeNumber={setPokeNumber}
					/>
					<NumButtons />
					<SideArrows
						number={Number(pokeNumber)}
						changeNumber={setPokeNumber}
						size={allPokemon.length}
					/>
					<div className="poke-hinge">
						<div className="inner-hinge-top"></div>
						<div className="inner-hinge-bottom"></div>
					</div>
				</div>
			</section>
			<section>
				<div className="right-side">
					<div className="upper-right-triangle"></div>
					<div className="upper-right-triangle-cover"></div>
					<InfoScreen currentPokemon={currentPokemon} zoomIn={zoomIn} />
					<ZoomButtons setZoomIn={setZoomIn} zoomVal={zoomIn} />

					<div className="big-buttons">
						<div className="big-button big-button-1"></div>
						<div className="big-button big-button-2"></div>
					</div>
				</div>
			</section>
		</div>
	);
};

// Info about fetching data from the API:
// https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2

// CSS animations:
// https://www.w3schools.com/css/css3_animations.asp

// react controlled inputs:
// https://reactjs.org/docs/forms.html

// Getting and setting scroll position of element
// https://www.javascripttutorial.net/dom/css/get-and-set-scroll-position-of-an-element/
