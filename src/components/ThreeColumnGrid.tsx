'use client'

import { Image } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align={'center'}>
      <Flex
        w={20}
        h={20}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        // bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontSize={25} fontWeight={600} fontFamily="Rozha One" textAlign={'center'}>{title}</Text>
      <Text color={'gray.600'} textAlign={'center'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={20} bg="#F7FCF5">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Image src="images/computer_icon.png" boxSize="20" alt={"Computer Icon"} />}
          title={'Take the Quiz'}
          text={
            'Participants register with their ETH/UZH email and take the 10 minute quiz'
          }
        />
        <Feature
          icon={<Image src="images/mirror_icon.png" boxSize="20" alt={"Mirror Icon"}/>}
          title={'Get a Match'}
          text={
            'Participants are matched based on their compatibility'
          }
        />
        <Feature
          icon={<Image src="images/meet_icon.png" boxSize="20"alt={"Meet Icon"}/>}
          title={'Meet'}
          text={
            'Matches can meet for the first time at the Checkmaté event'
          }
        />
      </SimpleGrid>
    </Box>
  );
}