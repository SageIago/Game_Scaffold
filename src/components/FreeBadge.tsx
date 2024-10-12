import { Badge } from "@chakra-ui/react";

// THIS IS FOR THE BADGE
interface Props {
  badgetype: string;
}

const FreeBadge = ({badgetype}: Props) => {
  return (
    <Badge bgColor="blue">{badgetype}</Badge>
  )
}

export default FreeBadge