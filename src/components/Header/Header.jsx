import React from 'react'
import { Heading } from '@chakra-ui/react'

export default function Header() {
  return (
    <header>
      <Heading as='h1' size='4xl' color='#f6f1ff' my={5}>
        Todo List
      </Heading>
    </header>
  )
}
