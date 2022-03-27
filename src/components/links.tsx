import { Heading, Image, Center, HStack, Fade } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Links(props) {
  const linksRef = props.innerRef
  return (
    <div ref={linksRef}>
      <Center>
        <Heading as="h2" size="3xl" color="#d14c3a" isTruncated>
          Official Links
        </Heading>
      </Center>
    </div>
  )
}
