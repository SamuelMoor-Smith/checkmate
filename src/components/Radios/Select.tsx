'use client'

import {
  Box,
  Stack,
  Heading,
  useRadio, 
  useRadioGroup,
  Card,
  CardBody,
  Text,
  Image,
  Button,
  CardFooter,
  Grid
} from '@chakra-ui/react'
import { get } from 'https';

import { FaChessBishop, FaChessQueen, FaChessRook, FaChessKnight } from 'react-icons/fa';

import Title from '../Title';

const OPTIONS = [
    { value: '0', title: 'Option 0', Icon: FaChessQueen },
    { value: '1', title: 'Option 1', Icon: FaChessRook },
    { value: '2', title: 'Option 2', Icon: FaChessKnight },
    { value: '3', title: 'Option 3', Icon: FaChessBishop },
  ]

// function getSize(size: string) {
//     switch (size) {
//         case 'xl':
//             return {'base': 10, 'md': 12};
//         case 'lg':
//             return {'base': 8, 'md': 10};
//         case 'md':
//             return {'base': 6, 'md': 8};
//         case 'sm':
//             return {'base': 4, 'md': 6};
//         default:
//             throw new Error('Invalid size');
//     }
// }

function getColor(value: string) {
    switch (value) {
        case '0':
            return 'pink.400'; // Pink
        case '1':
            return 'purple.400'; // Purple
        case '2':
            return 'red.400'; // Red
        case '3':
            return 'teal.400'; // Gold/Yellow
        default:
            throw new Error('Invalid value');
    }
}

function getBg(value: string) {
    switch (value) {
        case '0':
            return 'pink.200'; // Lighter shade of pink
        case '1':
            return 'purple.200'; // Lighter shade of purple
        case '2':
            return 'red.200'; // Lighter shade of red
        case '3':
            return 'teal.200'; // Lighter shade of yellow/gold
        default:
            throw new Error('Invalid value');
    }
}

export default function Select() {
    function CustomSelectButton(props: any) {
        const { image, ...radioProps } = props
        const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
            useRadio(radioProps)

        return (

            <Card
                as={'label'}
                {...getRadioProps()}
                cursor='pointer'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                alignItems={'center'}
                justifyContent={'center'}
                _checked={
                    {
                        borderColor: 'pink.400',
                    }
                }
                width='100%'
                borderWidth='2px'
                >
                <input {...getInputProps({})} hidden />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    color={getColor(props.value)} 
                    m={2}
                    // ml={6}
                    bg={getBg(props.value)} 
                    borderRadius="full"
                    height='40px'
                    width='40px'
                >
                    <props.Icon size={24} />
                </Box>

                <CardBody>
                    <Text>{props.title}</Text>
                </CardBody>
            </Card>
            // <Box as='label'>
            //     <input {...getInputProps({})} hidden />
            //     <Box
            //         {...getRadioProps()}
            //         cursor='pointer'
            //         borderWidth='2px'
            //         borderRadius='full'
            //         borderColor='#944D80'
            //         _checked={{
            //             borderColor: 'pink.400',
            //         }}
            //         _hover={{
            //             borderColor: 'pink.400',
            //         }}
            //         height='20px'
            //         width='100%'
            //     />
            // </Box>
        );
    }
  
    const { value, getRadioProps, getRootProps } = useRadioGroup({
      defaultValue: '3',
      onChange: console.log,
    })
  
    return (
        <Box {...getRootProps()} width="100%" mt={10}>
            <Title title="Which option do you pick? (Select one)"/>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} justifyContent="center" alignItems="center">
                {/* <Heading fontFamily="Visby Round CF" size='md' textColor={getColor('agree')}>Agree</Heading> */}
                {OPTIONS.map((option) => {
                return (
                    <CustomSelectButton
                    key={option.value}
                    title={option.title}
                    Icon={option.Icon}
                    {...getRadioProps({ value: option.value })}
                    />
                )
                })}
                {/* <Heading fontFamily="Visby Round CF" size='md' textColor={getColor('disagree')}>Disagree</Heading> */}
            </Grid>
      </Box>
    )
  }