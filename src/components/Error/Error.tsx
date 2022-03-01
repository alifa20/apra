import { Box } from "@chakra-ui/react";
import React from "react";

export const Error = ({ children }) => {
  return (
    <Box p={5} bg="pink.500" color="white" fontSize="md" borderRadius={5}>
      {children}
    </Box>
  );
};
