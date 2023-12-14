'use client'

import {
  Box,
  Stack,
  Heading,
  useRadio, 
  useRadioGroup,
} from '@chakra-ui/react'
import Title from '../Title';
import { get } from 'http';

const OPTIONS = [
    { value: '0', type: 'agree', size: 'xl' },
    { value: '1', type: 'agree', size: 'lg' },
    { value: '2', type: 'agree', size: 'md' },
    { value: '3', type: 'neutral', size: 'sm' },
    { value: '4', type: 'disagree', size: 'md' },
    { value: '5', type: 'disagree', size: 'lg' },
    { value: '6', type: 'disagree', size: 'xl' },
  ]

function getSize(size: string) {
    switch (size) {
        case 'xl':
            return {'base': 4, 'sm': 10, 'md': 12};
        case 'lg':
            return {'base': 4, 'sm': 8, 'md': 10};
        case 'md':
            return {'base': 4, 'sm': 6, 'md': 8};
        case 'sm':
            return {'base': 4, 'sm': 4, 'md': 6};
        default:
            throw new Error('Invalid size');
    }
}

function getColor(type: string) {
    switch (type) {
        case 'agree':
            return 'pink.400';
        case 'neutral':
            return '#944D80';
        case 'disagree':
            return '#535B75';
        default:
            throw new Error('Invalid type');
    }
}

function getHover(type: string) {
    switch (type) {
        case 'agree':
            return 'pink.400';
        case 'neutral':
            return '#944D80';
        case 'disagree':
            return '#535B75';
        default:
            throw new Error('Invalid type');
    }
}

export default function Agree() {
    function CustomAgreeButton(props: any) {
        const { image, ...radioProps } = props
        const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
            useRadio(radioProps)

        return (
            <Box as='label'>
                <input {...getInputProps({})} hidden />
                <Box
                    {...getRadioProps()}
                    cursor='pointer'
                    borderWidth='2px'
                    borderRadius='full'
                    borderColor={getColor(props.type)}
                    _checked={{
                        bg: getColor(props.type),
                    }}
                    _hover={{
                        bg: getHover(props.type),
                    }}
                    height={getSize(props.size)}
                    width={getSize(props.size)}
                />
            </Box>
        );
    }
  
    const { value, getRadioProps, getRootProps } = useRadioGroup({
      defaultValue: '3',
      onChange: console.log,
    })
  
    return (
        <Box {...getRootProps()} width="100%" mt={10}>
            <Title title="How much do you agree with this statement?"/>
            <Stack {...getRootProps()} spacing={{ base: 1, sm: 1.5, md: 4 }} justifyContent="center" alignItems="center" direction='row'>
                <Heading fontFamily="Visby Round CF" size={{ base: 'sm', md: 'md' }} textColor={getColor('agree')}>Agree</Heading>
                {OPTIONS.map((option) => {
                return (
                    <CustomAgreeButton
                    key={option.value}
                    type={option.type}
                    size={option.size}
                    {...getRadioProps({ value: option.value })}
                    />
                )
                })}
                <Heading fontFamily="Visby Round CF" size={{ base: 'sm', md: 'md' }} textColor={getColor('disagree')}>Disagree</Heading>
            </Stack>
        </Box>
    )
  }