import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { client } from '../libs/client'
import Link from "next/link";

export default function Card({ koneruscrap }) {

  return (
    <div>
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'100%'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'100%'}
          bg={'white'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            width={320}
            height={180}
            p={24}
            rounded={16}
          />

        </Box>
        <div>
            <ul>
              {koneruscrap.map((koneruscrap) => (
                <li key={koneruscrap.id}>
                  <Link href={`/koneruscrap/${koneruscrap.id}`}>
                    {koneruscrap.title}
                  </Link>
                  <p>{koneruscrap.date}</p>
                  <p>{koneruscrap.category}</p>
                </li>
              ))}
            </ul>
          </div>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            TAG
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Title
          </Heading>
          <Text color={'gray.500'}>
            Content
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "koneruscrap" });
  return {
    props: {
      koneruscrap: data.contents,
    },
  };
};