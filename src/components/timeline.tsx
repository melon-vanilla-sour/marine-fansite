import { Heading, Image, Center, HStack, Fade } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'

export default function Timeline() {
  const timelineRef = useRef(null)

  return (
    <div ref={timelineRef}>
      <Center>
        <Heading as="h2" size="3xl" color="#d14c3a" isTruncated>
          Timeline
        </Heading>
      </Center>
    </div>
  )
}
