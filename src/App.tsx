import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "Bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: 4,
	},
];

function App() {
	return (
			<PokemonCard pokemon={pokemonList[0]} />
	);
}

export default App;