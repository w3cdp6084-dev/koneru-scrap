import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import Link from "next/link";
import { client } from '../src/libs/client';
export default function Home({koneruscrap}) {

  return (
    <div>
      <Box className="wrap" w={{ base: "414px", md: "834px", lg: "100%" }} display='flex' justifyContent='center' alignItems='center'>
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
      </Box>
    </div>
  )
}
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "koneruscrap" });
  console.log(data);
  return {
    props: {
      koneruscrap: data.contents,
    },
  };
};