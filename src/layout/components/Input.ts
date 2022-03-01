import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import type { PartsStyleFunction } from "@chakra-ui/theme-tools";

const variantOutline: PartsStyleFunction<typeof parts> = () => {
  return {
    field: {
      border: "1px solid",
      borderColor: "gray.400",
      _hover: {
        borderColor: "blue.300",
      },
    },
  };
};

const variants = {
  outline: variantOutline,
};

export const Input = {
  variants,
};
