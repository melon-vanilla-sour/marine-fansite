import { useRef, useState } from 'react'

import Profile from '../components/profile'
import MenuComponent from '../components/menu'
import Links from '../components/links'
import Timeline from '../components/timeline'

function HomePage() {
  const refs = useRef([])
  const parts = [
    {
      name: Profile,
    },
    {
      name: Links,
    },
  ]

  const executeScroll = (ref) => {
    if (!ref) return
    ref.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      {parts.map((part, index) => {
        const Component = part.name
        return <Component innerRef={(el) => (refs.current[index] = el)}></Component>
      })}
      <MenuComponent refs={refs} handleClick={executeScroll}></MenuComponent>
      <Timeline></Timeline>
    </div>
  )
}

export default HomePage
