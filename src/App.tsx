import { Box, ChakraProvider, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { theme } from "./layout/theme";
import { Search } from "./Search/Search";

export const App = () => {
  const onSearch = (t) => {
    // TODO
  };
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={10} h="100vh" bg="blue.800">
        <VStack>
          <Search onSearch={onSearch} />
          <Spinner color="whiteAlpha.800" />
          <Text>Searching for: </Text>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};
