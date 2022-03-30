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
        <Heading as="h2" size="3xl" isTruncated>
          Music
        </Heading>
      </Center>
      <Swiper
        slidesPerView={1} //一度に表示するスライドの数
        pagination={{
          clickable: true,
        }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
        navigation //スライドを前後させるためのボタン、スライドの左右にある
        loop={true}
      >
        {images.map((src: string, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              <Image src={src} layout="responsive" width={414} height={414} alt="test_image" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
