import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../Types";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

// DEFINE THE SHAPE OF THE PROPS ELEMENT
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      {/* FOR THE IMAGE */}
      <Image src={game.background_image} />
      {/*CARD BODY  */}
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between" padding="10px">
          <PlatformIconList
            platforms={game.parent_platform.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
