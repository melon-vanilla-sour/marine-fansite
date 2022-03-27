import { useRef, useState } from 'react'

import Profile from '../components/profile'
import MenuComponent from '../components/menu'
import Links from '../components/links'
import Timeline from '../components/timeline'

import { Fade } from '@chakra-ui/react'

function HomePage() {
  return (
    <div>
      <Profile></Profile>
      <Links></Links>
      <MenuComponent></MenuComponent>
      <Timeline></Timeline>
    </div>
  )
}

export default HomePage
