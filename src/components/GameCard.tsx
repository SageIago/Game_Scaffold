import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";

// DEFINE THE SHAPE OF THE PROPS ELEMENT
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      {/* FOR THE IMAGE */}
      <Image src={game.thumbnail} />
      {/*CARD BODY  */}
      <CardBody>
        <Heading fontSize="2xl">{game.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
