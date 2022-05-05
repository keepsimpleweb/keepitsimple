import React from "react";
import { Stack, VStack, Divider,
  Link, Text, useColorModeValue,
  HStack, useMediaQuery
} from '@chakra-ui/react';

import { TWITTER, GITHUB, EMAIL } from './socialLinks.jsx';

const Footer =()=> { 
  const linkColor = useColorModeValue('gray.600', 'white');
  const textMode = useColorModeValue('gray.500', 'whiteAlpha.600');

return ( <>
  <VStack pb={4} as="footer" alignItems="center" position='relative' zIndex="4" 
    sx={{backdropFilter: 'blur(40px)'}} fontSize={['sm','sm','lg']} 
  >
    <Divider/>

    <Stack w="100%" alignItems="center"
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
    > <Text color={linkColor} margin="auto">
        Copyright &copy;&nbsp; 2019{' '}-{' '}
        {new Date().getFullYear()} · Rodrigo Moreno &reg; All Rights Reserved
      </Text>
    </Stack>
    <HStack justifyContent="space-between"  zIndex='40'
      divider={
        <Text color="gray.500" mx={2}>
          •
        </Text>
      }
    > <HStack justifyContent="space-between"
        divider={
          <Text color="gray.500" mx={2}>
            •
          </Text>
        }
      > 
      <Link isExternal href={TWITTER}>
          <Text color={textMode}>
            Twitter
          </Text>
        </Link>
      <Link isExternal href={GITHUB}>
          <Text color={textMode}>
            Github
          </Text>
        </Link>
        <Link isExternal href={EMAIL}>
          <Text color={textMode}>
            Email
          </Text>
        </Link>
      </HStack>
    </HStack>
  </VStack>
</> ); }; export {Footer};