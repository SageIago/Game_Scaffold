import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  // We use the newly created hook
  const { games, error, isLoading } = useGames();

  // THIS IS TO SHOW THE SKELETONS
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>Error Message: {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardContainer>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>)}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
