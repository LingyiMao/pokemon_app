const PokemonDetails = ({ name, image, type, height, weight, ability }) => {
  return (
    <div className="pokemon-detail__cards">
      <img src={image} alt="pokemon-images" />
      <h1>{name}</h1>
      <div className="pokemon-info">
        <h3>Type: </h3>
        <p>{type}</p>
      </div>
      <div className="pokemon-info">
        <h3>Height: </h3>
        <p>{height}</p>
      </div>
      <div className="pokemon-info">
        <h3>Weight: </h3>
        <p>{weight}</p>
      </div>
      <div className="pokemon-info">
        <h3>Ability: </h3>
        <p>{ability}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;
