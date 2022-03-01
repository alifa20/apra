import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/Icon";
import React from "react";

export const Search = () => {
  return (
    <Flex justifyContent="center">
      <Box w={200}>
        <InputGroup>
          <Input />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  );
};
