import { Heading, Center, HStack, Fade, Box, Flex } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import Logo from '../../public/assets/houshoumarinelogo_only.png'
import topImage from '../../public/assets/profile1.png'

export default function LP(props) {
  const LPRef = props.innerRef

  return (
    <Flex
      minWidth="900px"
      height="50vh"
      position="relative"
      border="20px solid #ff3333"
      ref={LPRef}
    >
      <Box flexGrow={1} position="relative" overflow="hidden">
        <Box top="-100px" position="relative">
          <Image src={topImage} />
        </Box>
      </Box>
      <Box
        width="100%"
        height="50%"
        position="absolute"
        filter="drop-shadow(0 0 3px white)"
        bottom="20px"
      >
        <Image src={Logo} layout="fill" objectFit="contain"></Image>
      </Box>
    </Flex>
  )
}
