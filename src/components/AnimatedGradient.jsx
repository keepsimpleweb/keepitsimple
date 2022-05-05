import React from 'react';
import { AspectRatio, Box,
  Center, keyframes, useBreakpointValue,
  usePrefersReducedMotion,
} from '@chakra-ui/react';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(120deg)}
`;

const AnimatedGradient =({ hero, opacity=9.8,...props })=> {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const prefersReducedMotion = usePrefersReducedMotion();

return ( <>
  <AspectRatio ratio={0.5} zIndex='-1'
    opacity={opacity || [1, 1, 0.5]}
    {...props}
  > 
  <>
    <Center overflow='visible!important'>
        <Box w='60%' h='60%' position='relative'
          filter={isMobile ? 'blur(100px)' : 'blur(150px)'}
          overflow='visible'
          animation={hero!='true'? prefersReducedMotion : `${spin} 5s ease-in-out alternate infinite`
          }
          bg='red'
        > <Box w='60%' h='60%' position='absolute'
            bg='purple.500' top='22%' left='22%'
            transform='translate(-50%, -50%)'
          />
          <Box w='60%' h='60%' position='absolute'
            bg='orange.500' top='22%' right='22%'
            transform='translate(50%, -50%)'
          />
          <Box w='60%' h='60%' position='absolute'
            bg='primary.500' bottom='22%' left='22%'
            transform='translate(-50%, 50%)'
          />
          <Box w='60%' h='60%' position='absolute'
            bg='red.500' bottom='22%' right='22%'
            transform='translate(50%, 50%)'
          />
        </Box>
      </Center>
    </>
  </AspectRatio>
</>); }; export { AnimatedGradient };