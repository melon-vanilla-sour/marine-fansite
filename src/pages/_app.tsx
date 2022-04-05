import '@fontsource/bungee/400.css'
import 'swiper/css/bundle'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// Theme Customization
const theme = extendTheme({
  fonts: {
    heading: 'Bungee, sans-serif',
  },
  components: {
    Heading: {
      baseStyle: {
        marginTop: '30px',
        marginBottom: '30px',
        textDecoration: 'underline',
        textUnderlineOffset: '5px',
      },
    },
  },
})

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
