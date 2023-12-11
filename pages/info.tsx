import { Container, Heading, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'

export default function Info() {
  const address = useAddress()

  return (
    <Container maxW={'1200px'} p={5} bg="orange.100">
      <Heading> Infomation </Heading>
      <Text>
        Developed by Yoojeong Han. <br />
        deployed by using 0xc4bb8c39977aBc36c2d7ABf1ed910165C3F6F502 (Account 4)
        <br />
        Technology : Thirdweb, Ethers, Next.js, ChakraUI, Typescript
        <br />
      </Text>
      <br />
      <Heading> Contract Addresses </Heading>
      <Text>
        - MARKETPLACE_ADDRESS : 0xbE24BFBBBe939bfbC403690a579B3cD89dD6b1b2
        <br />
        - NFT_COLLECTION_ADDRESS : 0xb2F18b3b81E2590b65f78A8c822433E83D653006
        <br />
        - TOKEN_DROP_ADDRESS : 0xA1D7034A5e5B19E95741f692dA53bae94E83Ff90 <br />
      </Text>
      <br />
      <Heading> Current Wallet </Heading>
      <Text>{address}</Text>
    </Container>
  )
}
