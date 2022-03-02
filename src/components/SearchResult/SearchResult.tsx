import { Box } from "@chakra-ui/react";
import React from "react";
import { GetPhotosQuery } from "../../generated/graphql";
import { Row } from "./Row";

interface Props {
  data?: GetPhotosQuery;
}
export const SearchResult = ({ data }: Props) => {
  return (
    <Box>
      {data?.photos?.data?.map((row) => (
        <Row data={row} />
      ))}
    </Box>
  );
};
