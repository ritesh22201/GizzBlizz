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
import TodoItem from "./components/TodoItem"
import Todos from "./components/Todos"

export const App = () => (
  <Box bg={'#3450a1'}>
    <Navbar/>
    <Todos/>
  </Box>
)
