import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import * as components from "./components";
import { Input } from "./components/Input";

export const theme = extendTheme({
  ...defaultTheme,
  // components: { ...components },
  components: { Input },
  // colors: {
  //   brand: {
  //     100: "#f7fafc",
  //     900: "#1a202c",
  //   },
  // },
});
