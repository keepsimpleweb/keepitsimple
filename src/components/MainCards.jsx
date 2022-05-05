import React from "react";
import {Image, Box,Heading, Flex, Stack, Container, SimpleGrid } from "@chakra-ui/react"
import { HomepageSection } from "./Section";
import { FeaturesBackground } from "./FeaturesBackground";
import { HomepageFeatureCard } from "./HomepageFeatureCard";
import logoGrand from "@pages/Logo.svg";
import {x,y,z,w,v,t} from "./Image/inyector"

const MainCards =()=> { return ( <>
<Flex justify="center" flexDir="column" as="main" 
  bg="#400c60" h={['300hv','280hv','280hv','230vh']} mb={96}
>
  <HomepageSection id="home" hero='true' 
    title="SOFTWARE DESIGN AND DEVELOPMENT"
    subtitle=
      { <> From idea conceptualization, research, creation, and marketing, we do it all for you! We develop software and apps that will go beyond your needs.
        <Box display={{ base: "none", md: "block" }}/> Reinventing ways to make sure that your business is on the path of success. With strategic planning and meticulous application, we implement the latest techniques to launch your business in a worldwide platform.
      </> }
    bottomGradient="animated" paddingBottom
  >   <Stack w="100%" spacing={["64px", "64px", "100px"]} 
        pb={['10rem','10rem','20rem']}>
      </Stack>
  </HomepageSection>
  <Flex position="relative"
    mt={{ base: "-18rem", md: "-18rem"}}
    py={{ base: "2em", md: '5em' }}
    id="features"  borderRadius="md" 
  > 
  <FeaturesBackground position="absolute"/>
    <Container maxW="container.page"
      position="relative" 
      pt={['600px','48px','88px']} 
      pb={[48,48,0]}
    > 
      <Stack w="100%" align="center" spacing={{ base: "2.5rem", md: "5.5rem" }}  maxW='1400px' margin="auto"> 
        <SimpleGrid w="100%" placeItems="stretch" zIndex={10} 
          columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={-48}
        > 
          <HomepageFeatureCard type={y}/>
          <HomepageFeatureCard type={x}/>
          <HomepageFeatureCard type={z}/>
          <HomepageFeatureCard type={w}/>
          <HomepageFeatureCard type={v}/>
          <HomepageFeatureCard type={t}/>
        </SimpleGrid>
      </Stack>

    </Container>
  </Flex>
</Flex>
  <HomepageSection id="home" hero='true' title="PC, MOBILE MARKETING AND APP OPTIMISATION" color='black' isDark bg='#da034c'
    subtitle={ <> Keeple Independient is the love den of innovation, learning, and utility hailing from Colombia. We are a complete digital solutions services going beyond customer expectations and reaching goals beyond one’s limits. We aim to deliver convenience for all businesses out there by providing our services from creating software and products, developing platforms to boost revenue, and marketing your business to a global community.{' '}
        <b>THE INNOVATIVE TEAM BEHIND KEEP IT SIMPLE</b>{' '}
        Composed of talented creators, Keeple Indie is home to some of the world’s greatest digital innovators! From creating apps for various devices to developing software customized for your needs, we tailor all our services to maximize efficiency for your business and boost your ROI.
        <Image src={logoGrand} w='600px' mt={[20,20,48]} margin='auto'></Image>
      </> }
    topGradient="animated" paddingBottom bottom={'400px'} pt={[48,48,'-400px']} mb={['-800px','-800px','-1200px',]}
  >
  </HomepageSection>
</> ); }; export {MainCards};
