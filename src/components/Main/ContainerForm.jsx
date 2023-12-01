import React from 'react'
import { Flex, Spacer, Box} from '@chakra-ui/react'

export default function ContainerForm() {
  return (
    <>
      <Flex>
        <Box m='4' p='10' w='50%'>
          Box 1
        </Box>
        <Spacer />
        <Box m='4' p='10' w='50%'>
          Box 2
        </Box>
      </Flex>
    </>
  )
}
