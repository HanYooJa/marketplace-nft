import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import React from 'react'
import { Box, Flex, Link, Heading, Text, Avatar } from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar = () => {
  const address = useAddress()
  return (
    <Box
      maxW={'1200px'}
      m={'auto'}
      py={'10px'}
      px={'40px'}
      style={{
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
      }}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Link as={NextLink} href="/">
          <Heading> 유쟈의 MarketPlace </Heading>
        </Link>
        <Flex>
          <Link as={NextLink} href="/buy" mx={2.5}>
            <Text fontSize={'2xl'} as="b">
              Buy
            </Text>
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            <Text fontSize={'2xl'} as="b">
              Sell
            </Text>
          </Link>
          <Link as={NextLink} href="/tokendrop" mx={2.5}>
            <Text fontSize="2xl" as="b">
              Token Drop
            </Text>
          </Link>
          <Link as={NextLink} href="/info" mx={2.5}>
            <Text fontSize="2xl" as="b">
              Info
            </Text>
          </Link>
        </Flex>
        <Flex alignItems={'center'}>
          <ConnectWallet />
          {address && (
            <Link as={NextLink} href={`/profile/${address}`}>
              <Avatar src="https://bit.ly/broken-link" ml={'20px'} />
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
