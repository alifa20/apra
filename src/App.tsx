import {
  Box,
  ChakraProvider,
  Spinner,
  theme,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Search } from "./Search/Search";

export const App = () => {
  const onSearch = (t) => {
    // TODO
  };
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={10}>
        <VStack>
          <Search onSearch={onSearch} />
          <Spinner />
          <Text>Searching for: </Text>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};
