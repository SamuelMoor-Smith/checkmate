import { Image } from '@chakra-ui/react'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" passHref>
            {/* <a> */}
                <Image
                    alt={'Login Image'}
                    objectFit={'contain'}
                    maxW={{ base: '100px', md: '150px' }} // Adjust maximum width as per your requirement
                    maxH={{ base: '50px', md: '60px' }} // Adjust maximum height as per your requirement
                    src={
                    '/images/logo.png'
                } />
            {/* </a> */}
          </Link>
    )
}