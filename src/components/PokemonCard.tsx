function PokemonCard() {
    const pokemon = pokemonList[1];
	return (
		<>
			<figure>
				{pokemon.imgSrc ? (
					<img src={pokemon.imgSrc} alt="Pokémon" />
				) : (
					<p>???</p>
				)}
			</figure>
			<figcaption>{pokemon.name}</figcaption>
		</>
	);
}

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

export default PokemonCard;

