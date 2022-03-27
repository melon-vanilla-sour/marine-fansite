import { Heading, Image, Center, HStack, Fade } from '@chakra-ui/react'
import { profile } from 'console'
import { useState, useEffect, useRef } from 'react'

import ProfileInformation from './profile-information'

export default function Profile(props) {
  const [picture, setPicture] = useState(1)
  const profileRef = useRef()

  const executeScroll = (ref) => {
    if (!ref.current) return
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={profileRef}>
      <Center>
        <Heading as="h2" size="3xl" color="#d14c3a" isTruncated>
          Profile
        </Heading>
      </Center>
      {picture == 1 ? (
        <Fade in={picture == 1}>
          <Image boxSize="100%" objectFit="contain" src="/assets/profile1.png" alt="profile 1" />
        </Fade>
      ) : (
        <Center>
          <Fade in={picture == 2}>
            <Image height="621px" objectFit="contain" src="/assets/profile2.png" alt="profile 2" />
          </Fade>
        </Center>
      )}
      <HStack marginX={2} justifyContent="center">
        <Image
          boxSize="100px"
          objectFit="cover"
          borderRadius="5px"
          border="2px"
          src="/assets/profile1.png"
          onClick={() => setPicture(1)}
        ></Image>
        <Image
          boxSize="100px"
          objectFit="cover"
          borderRadius="5px"
          border="2px"
          src="/assets/profile2.png"
          onClick={() => setPicture(2)}
        ></Image>
      </HStack>
      <ProfileInformation></ProfileInformation>

      <button onClick={() => executeScroll(profileRef)}> Click to scroll </button>
    </div>
  )
}
