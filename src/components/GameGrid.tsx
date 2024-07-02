import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { Text } from "@chakra-ui/react";

// TO DEFINE THE SHAPE OF THE GAME OBJECT
interface Game {
  id: number;
  title: string;
}

const GameGrid = () => {
  // THIS IS FOR THE GAMES ARRAY
  const [games, setGames] = useState<Game[]>([]);

  // THIS IS FOR THE ERROR ARRAY
  const [error, setError] = useState();

  useEffect(() => {
    apiClient
      .get<Game[]>("/games")
      .then((response) => setGames(response.data))
      .catch((err) => setError(err.message));
  }, []);
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
