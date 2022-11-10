import { Input } from "@chakra-ui/react"

export default function Home() {
  return (
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
  )
}