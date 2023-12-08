'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

import { GoHeartFill } from "react-icons/go";

export default function SplitScreen() {
  return (
    <Stack minH={'60vh'} direction={{ base: 'column', md: 'row' }} bg={'#ffeaea'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '6xl', md: '8xl', lg: '10xl' }}
                   fontWeight="700"
                   letterSpacing="0em" 
                   textAlign="left" 
                   fontFamily="Visby Round CF"
                   textColor='#535B75'>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Checkmaté
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#535B75'}>
            Discover love at your campus: Join our exclusive Valentine&aposs Day matchmaking extravaganza for ETH and UZH students, where a simple questionnaire leads you to your perfect match for a magical evening!
          </Text>
          <Button as={'a'} rightIcon={<GoHeartFill />} variant='solid' colorScheme='pink' href={'the-questions'}>Take the Test</Button>
        </Stack>
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            '/images/king_and_queen.png'
          }
        />
      </Flex>
    </Stack>
  )
}