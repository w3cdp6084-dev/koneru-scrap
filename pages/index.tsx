import { Input } from "@chakra-ui/react"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

export default function Home() {

  return (
    <Box w={{ base: "1280px", md: "800px", lg: "500px" }}>
        <Box bg="red.200" w={{ base: "300px", md: "400px", lg: "500px" }}>
          This is a box 
        </Box>

      <Input
        w="30%"
        m="5"
        type="text"
        placeholder="Input Field"
        color="blue.800"
        bg="blue.50"
        rounded="2xl"
        border="0"
        _focus={{
          bg: "blue.200",
          outline: "none",
        }}
      />
    </Box>
  )
}