import { Heading, Image, Center, HStack, Fade } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Streaming(props) {
  const linksRef = props.innerRef
  return (
    <div ref={linksRef}>
      <Center>
        <Heading as="h2" size="3xl" isTruncated>
          Streaming
        </Heading>
      </Center>
    </div>
  )
}
