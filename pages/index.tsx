import { ConnectWallet } from '@thirdweb-dev/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container
      maxW={'1200px'}
      backgroundImage="url('kirby.gif')"
      backgroundSize="1200px"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex h={'80vh'} alignItems={'center'} justifyContent={'center'}>
        <Stack
          spacing={4}
          align={'center'}
          color={'blue.400'}
          style={{ textShadow: '1px 2px 3px rgba(0, 0, 0, 3)' }}
        >
          <Heading>유쟈's Markplace</Heading>
          <Text fontSize={'xl'} align={'center'}>
            구~경 한!번! 와보세요~ <br /> 있을 건 있고 없는 건 없는 실용적인
            것들만 모아놓은 marketplace입니다~!
          </Text>
          <Button as={NextLink} href="/buy" bg="pink.200">
            <Text fontSize={'2xl'} fontWeight={'bold'} p={4} color={'gray.200'}>
              구경가기
            </Text>
          </Button>
        </Stack>
      </Flex>
    </Container>
  )
}

export default Home
