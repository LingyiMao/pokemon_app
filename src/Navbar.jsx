import pokemonImage from "../public/pokemon.png";
import pokemonBall from "../public/pokemon-ball.png"

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img className="pokemonBall" src={pokemonBall} alt="" />
      <h1>Pokemon Information List</h1>
      <img className="pokemonImage" src={pokemonImage} alt="" />
    </nav>
  );
};

export default Navbar;
