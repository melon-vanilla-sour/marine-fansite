import { Heading, Center, HStack, Slide, Fade, Box } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
import { Parallax } from 'react-parallax'
import Image from 'next/image'
import profile1 from '../../public/assets/profile1.png'
import profile2 from '../../public/assets/profile2.png'

import ProfileInformation from './profile-information'

export default function Profile(props) {
  const [picture, setPicture] = useState(1)
  const profileRef = props.innerRef
  const handleClick = props.handleClick

  return (
    <div ref={profileRef}>
      <Center>
        <Heading as="h2" size="3xl" isTruncated>
          Profile
        </Heading>
      </Center>

      <Center height="620px" position="relative">
        <Fade in={picture == 1}>
          <div>
            <Image src={profile1} alt="profile 1" layout="fill" objectFit="contain" />
          </div>
        </Fade>

        <Fade in={picture == 2}>
          <div>
            <Image src={profile2} alt="profile 2" layout="fill" objectFit="contain" />
          </div>
        </Fade>
      </Center>

      <HStack marginX={2} marginBottom={2} justifyContent="center">
        <Box
          width="100px"
          height="100px"
          position="relative"
          borderRadius="5px"
          border={picture == 1 ? '2px' : '0px'}
          bgColor="white"
        >
          <Image src={profile1} onClick={() => setPicture(1)} layout="fill" objectFit="contain" />
        </Box>
        <Box
          width="100px"
          height="100px"
          position="relative"
          borderRadius="5px"
          border={picture == 2 ? '2px' : '0px'}
          bgColor="white"
        >
          <Image src={profile2} onClick={() => setPicture(2)} layout="fill" objectFit="contain" />
        </Box>
      </HStack>

      <ProfileInformation></ProfileInformation>
    </div>
  )
}
