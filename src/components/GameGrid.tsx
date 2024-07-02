
import { Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";


const GameGrid = () => {
  // We use the newly created hook
    const {games, error} = useGames()
  return (
    <>
      {error && <Text>Error Message: {error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
