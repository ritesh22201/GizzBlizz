import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Navbar from "./components/Navbar"

export const App = () => (
  <Box>
    <Navbar/>
  </Box>
)
