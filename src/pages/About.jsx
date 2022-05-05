import React from "react";
import {Divider, Button, Flex, HStack, 
  Image, Heading, Stack, Text, 
  VStack, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Animation } from '@components/Animation';
import { UseHookS } from "../components/UseHookS";
import compr from "@imgs/compromiso-pency.svg"

const About =()=> {
	const sty = {
		res: ['1.4em','1.4em','2em','2em'],
    lay: ['column', 'column', 'row'],
    Tali: ['left', 'left', 'center'],
	};
return (<>
<Animation>
  <VStack as='section' overflow={'hidden'} h='100%' mb={48}>
    <Box as='article' color='white' fontSize={sty.res} pt={'10px'} mx={6}>
      <Heading color='white' fontWeight='extrabold' pb={2} mt={8}>
        About us
        <Divider pb={2} w='50%' m='auto' mt='-2' mb='1'/>
      </Heading>
      <Text fontSize={'0.5em'} fontWeight='medium' pb={0} ml='-8.4px'>
        Wellcome to
      </Text>
      <Box as='article' maxW='890px' margin='auto' 
        borderRadius='xl' overflow='hidden' bg='whiteAlpha.500' sx={{backdropFilter: 'blur(10px)'}}
        textAlign={sty.Tali} color='tomato' w={{base: '420px', sm: '420px',md: '740px', lg: '840px'}}
      >
        <Flex direction={sty.lay} justifyContent='center' pt={2}>
          <Box bg='#F0EAFB' color='black' pt='27px' h='440px'
            w={{base: '520px', sm: '520px',md: '520px', lg: '540px'}} 
            direction='column' margin='auto' textAlign='center' mt={-4}
            justifyContent={'center'} overflow='hidden'  zIndex='4'
            boxShadow='0px 5px 5px -5px #400c40, 0px 35px 35px 8px rgba(0, 0, 0, 0.04), 10px 6px 9px -2px rgba(0, 0, 0, 0.08)'
          >
            <Text fontSize='medium' textAlign='left' lineHeight='1.6' mt='5'
              fontWeight='medium' color='#171923' ml='8' maxW='370px'
            > <strong>Keeple</strong> Indie. is a software development company dedicated to supporting, transforming and expanding the products of the <b>Keeple</b> Growth portfolio companies. In keeping with <b>Keeple Growth's mission to revolutionize the concept of Smart Capital, Keeple focuses on providing quality services for all of its clients' technology needs.</b>  By creating a structure of transparency and excellence, our technology experts have had the opportunity to become an extension of our clients' team. Thanks to the adaptability and knowledge of our teams, we have created a perfect synergy with our clients; helping them become market-leading, capital-efficient companies.
            </Text>
          </Box>

          <Box w='440px' margin='auto' color='black' borderRadius='xl' pb={8}
            userSelect='none' style={{userSelect: 'none', pointerEvents: 'none'}}
          >  
            <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text' fontSize='3xl' fontWeight='bolder'
              w='100%' textAlign='left' pl='8' mt='4'
            >Keep it simple
            </Text>

            <UseHookS
              param="https://prod.spline.design/XDVWIbR5S0TxY1mh/scene.spline"
            />

            <Box color='black' textAlign={'left'} mt={2} zIndex='4'> 
              <Text fontSize={'0.6em'} fontWeight='medium' px={8} mt={8} ml={4}>
                <CheckCircleIcon color='whiteAlpha.600' mt={-1}/> Fast
              </Text>
              <Text fontSize={'0.6em'} fontWeight='medium' px={8} mt={4} ml={4}>
                <CheckCircleIcon color='whiteAlpha.600' mt={-1}/> Powerfull
              </Text>
              <Text fontSize={'0.6em'} fontWeight='medium' px={8} mt={4} ml={4}>
                <CheckCircleIcon color='whiteAlpha.600' mt={-1}/> Strong
              </Text>
              <Text fontSize={'0.6em'} fontWeight='medium' px={8} mt={4} ml={4}>
                <CheckCircleIcon color='whiteAlpha.600' mt={-1}/> 24/7 Support
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Text fontSize={'0.5em'} fontWeight='normal' pb={'16'}>
        At <strong>Keeple</strong>, our passion is <strong>quality.</strong>
      </Text>
    </Box>
  </VStack>

  {/*//?Quality---------------------------*/}
  <Box mt={48}></Box>
    <Box as='article' color='white' fontSize={sty.res} pt={'10px'} mt='-48' mx={6} mb='16'>
      <Heading color='gray.300' fontWeight='extrabold' pb={2} mt={8}>
        Why quality?
        <Divider pb={2} w='50%' borderColor="purple" m='auto' mt='-2' mb='1'/>
      </Heading>
      <Text fontSize={'0.5em'} fontWeight='bolder' pb={0} ml='-8.4px'>
        Quality is paramount
      </Text>
      <Box as='article' maxW='890px' margin='auto' bg="transparent" 
        borderRadius='xl' overflow='hidden'  sx={{backdropFilter: 'blur(10px)'}}
        textAlign={sty.Tali} w={{base: '420px', sm: '420px',md: '740px', lg: '840px'}}
      >
        <Flex direction={sty.lay} justifyContent='center' pt={2}>
          <Box pt='27px' h='380px'
            w={{base: '520px', sm: '520px',md: '520px', lg: '540px'}} 
            direction='column' margin='auto' textAlign='center' mt={-4}
            justifyContent={'center'} overflow='hidden'  zIndex='4'
            boxShadow='0px 5px 5px -5px #400c40, 0px 35px 35px 8px rgba(0, 0, 0, 0.04), 10px 6px 9px -2px rgba(0, 0, 0, 0.08)'
            bg='whiteAlpha.100' style={{borderRadius: '40px 40px 900px 40px'}}
            sx={{backdropFilter: 'blur(40px)'}}
          >
            <Text fontSize='medium' textAlign='left' lineHeight='1.6' ml='14' mt='8'
              color='whiteAlpha.800' maxW='300px'
            >
              <b>Great ideas</b> are the fuel of every good product. But through <strong>quality-focused management,</strong> we can transform these products and revolutionize the playing field. <strong>Quality </strong>is the key to creating and maintaining a long-term revenue cycle because companies can increase user satisfaction; retaining customers and reducing costs related to defective functions.
            </Text>
          </Box>
          <Box w='440px' margin='auto' color='black' borderRadius='xl' pb={8} 
            userSelect='none' style={{userSelect: 'none', pointerEvents: 'none'}}
          >  
            <Box color='black' textAlign={'left'} mt={2} zIndex='4'> 
              <Image src={compr} sx={{filter: "contrast(1.4)"}}
                w={56} h={56} ml={['90px','90px','90px']} 
                __css={{borderRadius: '100%'}}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
      <Text fontSize={'0.5em'} fontWeight='normal'>
        At <strong>Keeple</strong> we are characterized by <b>authenticity.</b>
      </Text>
    </Box>
</Animation>
</> ) }; export {About};
