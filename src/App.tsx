import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "Bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "Mew",
	},
];

function App() {
	return (
			<PokemonCard pokemon={pokemonList[1]} />
	);
}

export default App;