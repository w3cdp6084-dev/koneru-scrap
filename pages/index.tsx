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
    <Box className="wrap" w={{ base: "414px", md: "834px", lg: "100%" }} display='flex' justifyContent='center' alignItems='center'>
        <Box className="content" w={{ base: "414px", md: "834px", lg: "100%" }} display='flex' justifyContent='center' alignItems='center' bg='gray.100'>
          This is a box 
        </Box>
    </Box>
  )
}