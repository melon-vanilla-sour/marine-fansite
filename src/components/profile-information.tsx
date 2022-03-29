import { Table, Tbody, Tr, Td, Heading, Center } from '@chakra-ui/react'

export default function ProfileInformation() {
  return (
    <div>
      <Center>
        <Heading as="h3" size="1xl" isTruncated marginY={3}>
          Houshou Marine
        </Heading>
      </Center>
      <Table variant="simple" colorScheme="facebook" size="sm" marginBottom={3} marginX={2}>
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
              Stream: #マリン航海記 <br /> Fan Art: #マリンのお宝
            </Td>
          </Tr>
          <Tr>
            <Td>Blood Type</Td>
            <Td>O</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  )
}
