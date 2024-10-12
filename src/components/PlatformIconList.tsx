import { Platform } from "../Types";
import {
  FaWindows,
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaLinux,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

// USE THE PROPS TO GET THE PLATFORM
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // DEFINE HOW TO MAP THE ICONS TO A SPECIFIC KEY
  const iconMap: { [key: string]: IconType } = {
    "PC (Windows)": FaWindows,
    Playstation: FaPlaystation,
    Linux: FaLinux,
    iOS: MdPhoneIphone,
    Android: FaAndroid,
    Xbox: FaXbox,
    Nintendo: SiNintendo,
    "Web Browser": BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"} />
      ))}
      <Text></Text>
    </HStack>
  );
};

export default PlatformIconList;
