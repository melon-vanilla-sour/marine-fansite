import { Heading, Image, Center, HStack, Fade } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
import { Parallax } from 'react-parallax'

import ProfileInformation from './profile-information'

export default function Profile(props) {
  const [picture, setPicture] = useState(1)
  const profileRef = props.innerRef
  const handleClick = props.handleClick

  return (
    <div ref={profileRef}>
      <Parallax
        // bgImage="/assets/profile1-transparent.png"
        bgImageAlt="marine-background"
        strength={500}
      >
        <Center>
          <Heading as="h2" size="3xl" isTruncated>
            Profile
          </Heading>
        </Center>
        {picture == 1 ? (
          <Fade in={picture == 1}>
            <Center>
              <Image
                maxHeight="621px"
                objectFit="contain"
                src="/assets/profile1.png"
                alt="profile 1"
              />
            </Center>
          </Fade>
        ) : (
          <Fade in={picture == 2}>
            <Center>
              <Image
                maxHeight="621px"
                objectFit="contain"
                src="/assets/profile2.png"
                alt="profile 2"
              />
            </Center>
          </Fade>
        )}
        <HStack marginX={2} marginBottom={2} justifyContent="center">
          <Image
            boxSize="100px"
            objectFit="contain"
            borderRadius="5px"
            border={picture == 1 ? '1px' : '0px'}
            src="/assets/profile1.png"
            onClick={() => setPicture(1)}
            bgColor="white"
          ></Image>
          <Image
            boxSize="100px"
            objectFit="contain"
            borderRadius="5px"
            border={picture == 2 ? '1px' : '0px'}
            src="/assets/profile2.png"
            onClick={() => setPicture(2)}
            bgColor="white"
          ></Image>
        </HStack>
      </Parallax>
      <ProfileInformation></ProfileInformation>
    </div>
  )
}
