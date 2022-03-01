import React from "react";
import { Photo } from "../../generated/graphql";
import { Text } from "@chakra-ui/react";

interface Props {
  data?: Photo | null;
}
export const Row = ({ data }: Props) => {
  return <Text color="white">{data?.title}</Text>;
};
