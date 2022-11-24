import {
    Box,
    Text,
    useColorModeValue,
    
  } from '@chakra-ui/react';

export default function Footer() {
  return (
    <div>
      <Box 
        bg="#f1f5f9"
        p="10" 
        bg={useColorModeValue('#f1f5f9', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        >
      <Text fontSize="sm" align="center">© KONEKONE. All rights reserved.</Text>
      </Box>
    </div>
  )
}