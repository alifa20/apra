import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";

interface Props {
  onSearch: (term: string) => void;
}
export const Search = ({ onSearch }: Props) => {
  const [term, setTerm] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setTerm(event.target.value);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      onSearch(term);
    }
  };

  return (
    <Flex justifyContent="center">
      <Box w={400}>
        <InputGroup>
          <Input onKeyDown={onKeyDown} onChange={onChange} />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  );
};
