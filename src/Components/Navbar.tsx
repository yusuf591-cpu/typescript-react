import React from 'react'
import { Text, HStack  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (

    <HStack spacing={'20'} color={'white'} backgroundColor={'mediumpurple'} padding={'2'}>
      <Text >
        <Link to='/'>
          Home
        </Link>
      </Text>
      <Text>
        <Link to='/about'>
          About
        </Link>
      </Text>

    </HStack>

  )
}

export default Navbar
