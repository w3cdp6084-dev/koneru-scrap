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
export default function Home({blog}) {

  return (
    <div>
      <Box className="wrap" w={{ base: "414px", md: "834px", lg: "100%" }} display='flex' justifyContent='center' alignItems='center'>
      <div>
            <ul>
              {blog.map((blog) => (
                <li key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                  <p>{blog.date}</p>
                  <p>{blog.category}</p>
                </li>
              ))}
            </ul>
          </div>
      </Box>
    </div>
  )
}
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};