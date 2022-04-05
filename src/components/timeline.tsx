import { Heading, Image, Center, HStack, Fade } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'

export default function Timeline(props) {
  const timelineRef = props.innerRef

  return (
    <div ref={timelineRef}>
      <Center>
        <Heading as="h2" size="3xl" isTruncated>
          Timeline
        </Heading>
      </Center>
    </div>
  )
}
