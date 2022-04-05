import { Heading, Center, HStack, Fade } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from 'swiper' //使いたい機能をインポート

SwiperCore.use([Pagination, Navigation])

const images = [
  '/assets/music1.png',
  '/assets/music2.png',
  '/assets/music3.png',
  '/assets/music4.jpg',
  '/assets/music5.png',
  '/assets/music10.jpg',
  '/assets/music11.jpg',
]

export default function Music(props) {
  const linksRef = props.innerRef
  return (
    <div ref={linksRef}>
      <Center>
        <Heading as="h2" size="3xl">
          Music
        </Heading>
      </Center>
      <Swiper
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        navigation
        loop={true}
        effect="flip"
        breakpoints={{
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {images.map((src: string, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              <Center>
                <Image src={src} width="400" height="400" alt={`music${index}`} />
              </Center>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
