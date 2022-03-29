import { Heading, Image, Center, HStack, Fade } from '@chakra-ui/react'
import { profile } from 'console'
import { useState, useEffect, useRef } from 'react'

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
      {picture == 1 ? (
        <Fade in={picture == 1}>
          <Center>
            <Image height="621px" objectFit="contain" src="/assets/profile1.png" alt="profile 1" />
          </Center>
        </Fade>
      ) : (
        <Fade in={picture == 2}>
          <Center>
            <Image height="621px" objectFit="contain" src="/assets/profile2.png" alt="profile 2" />
          </Center>
        </Fade>
      )}
      <HStack marginX={2} justifyContent="center">
        <Image
          boxSize="100px"
          objectFit="contain"
          borderRadius="5px"
          border={picture == 1 ? '2px' : '0px'}
          src="/assets/profile1.png"
          onClick={() => setPicture(1)}
        ></Image>
        <Image
          boxSize="100px"
          objectFit="contain"
          borderRadius="5px"
          border={picture == 2 ? '2px' : '0px'}
          src="/assets/profile2.png"
          onClick={() => setPicture(2)}
        ></Image>
      </HStack>
      <ProfileInformation></ProfileInformation>
    </div>
  )
}
