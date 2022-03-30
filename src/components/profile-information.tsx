import { Table, Tbody, Tr, Td, Heading, Center } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

export default function ProfileInformation() {
  return (
    <div>
      <Center>
        <Heading as="h3" size="1xl" isTruncated marginY={3}>
          Houshou Marine
        </Heading>
      </Center>
      <Center>
        <Table
          variant="simple"
          colorScheme="facebook"
          size="sm"
          marginBottom={3}
          marginX={2}
          width={['100%', '60%']}
        >
          <Tbody>
            <Tr>
              <Td>Birthday</Td>
              <Td>July 30th</Td>
            </Tr>
            <Tr>
              <Td>First Stream</Td>
              <Td>August 11th, 2019</Td>
            </Tr>
            <Tr>
              <Td>Height</Td>
              <Td>150cm</Td>
            </Tr>
            <Tr>
              <Td>Hashtags</Td>
              <Td>
                Stream:
                <Link
                  isExternal={true}
                  href="https://twitter.com/search?q=%23%E3%83%9E%E3%83%AA%E3%83%B3%E8%88%AA%E6%B5%B7%E8%A8%98&src=typed_query"
                >
                  #マリン航海記
                </Link>
                <br /> Fan Art: #マリンのお宝
              </Td>
            </Tr>
            <Tr>
              <Td>Blood Type</Td>
              <Td>O</Td>
            </Tr>
          </Tbody>
        </Table>
      </Center>
    </div>
  )
}
