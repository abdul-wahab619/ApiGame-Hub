import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 75 ? "yellow" : "";
  return (
    <Badge fontSize={"14px"} paddingX={2} borderRadius={"5px"} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
