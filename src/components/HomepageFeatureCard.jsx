import {Heading, Flex, Stack } from "@chakra-ui/react";
import { ChakraNextImage } from "../components/Image";
import React from "react";

const HomepageFeatureCard =({ type })=> {
  //// const { bg, title, icon, description, gradientBg } = type;

return (<>
  <Flex bgGradient={type.bg} overflow="hidden" 
    position="relative" borderRadius={6} p={8} flexDir="column"
    __css={{backdropFilter: 'blur(150px)', border:'1px solid rgb(255, 255, 255, 0.1)'}}
  > <Stack mb={4} spacing={4}
      direction={{ base: "row", lg: "column" }}
      align={{ base: "center", lg: "flex-start" }}
    > 
    {/* <ChakraNextImage
      src={type.icon} 
      alt={type.title}
      mixBlendMode={'multiply'} 
      //todo
    /> */}
      <Heading as="h4" color="whiteAlpha.900" fontWeight='bold' 
        fontSize={{ base: 'md', md: 'xl' }} pt={20}
      >
        {type.title}
      </Heading>
    </Stack>
    <Heading as="p" size="subtitle.md" fontSize='1.2em' 
      fontWeight='thin' color="whiteAlpha.900" textAlign='left'
    >
      {type.description}
    </Heading>

    { type.gradientBg && (<ChakraNextImage position="absolute"
        alt="" borderRadius={6} overflow="hidden" pointerEvents="none" 
        top={4} left={0} bottom={0} right={0} layout="fill"
        pt={2}
        src={type.gradientBg.url} 
        w={{base: 40, lg: 40}}
        h={{base: 40, lg: 40}}
        //todo
        objectFit="cover"
        objectPosition={type.gradientBg.position}
      />)
    }

  </Flex>
</>); }; export { HomepageFeatureCard };