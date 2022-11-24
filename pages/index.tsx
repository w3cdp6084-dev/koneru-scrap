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

import Card from '../src/components/Card';

export default function Home() {

  return (
    <Box className="wrap" w={{ base: "414px", md: "834px", lg: "100%" }} display='flex' justifyContent='center' alignItems='center'>
      <Card />
    </Box>
  )
}