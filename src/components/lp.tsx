import { Heading, Center, HStack, Fade, Box, Flex } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import Logo from '../../public/assets/houshoumarinelogo_only.png'
import topImage from '../../public/assets/profile1.png'

export default function LP(props) {
  const LPRef = props.innerRef

  return (
    <Flex
      width="100%"
      height={['50vh', '100vh']}
      border={['10px solid #ff3333', '20px solid #ff3333']}
      ref={LPRef}
      flexDirection="column"
    >
      <Box height="80%"></Box>
      <Box filter="drop-shadow(0 0 3px white)" position="relative" bottom={['0px', '50px']}>
        <Center>
          <Image src={Logo}></Image>
        </Center>
      </Box>
    </Flex>
  )
}
