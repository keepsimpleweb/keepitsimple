import React from "react";
import Spline from '@splinetool/react-spline';
import { Spinner, Heading, Text, VStack, Box } from '@chakra-ui/react'
import { AnimateIntro } from '@components/AnimateIntro';

function ThreeD(param) { return (
  <Spline style={{ objectFit: 'contain', margin: '-80px' }} 
    scene={param}
  />
);};

function Splinner() { return (
  <Spinner size="xl" mt="38"
    ml="calc(0px - var(--spinner-size) / 2)"
  />);
};

function Features() { 
  const [scenOne, setSceOne] = React.useState(null)
  const [scenTwo, setSceTwo] = React.useState(null)
  const x = React.useMemo(()=>ThreeD('https://prod.spline.design/Xou3jW30odCqnvND/scene.spline'),[])
  const y = React.useMemo(()=>ThreeD('https://draft.spline.design/3xBCOgp3orbWGOlm/scene.spline'),[])

  React.useEffect(()=>{ setSceOne(x), setSceTwo(y) },[scenOne])

return ( <>
  <Heading as="h1" position="absolute"
    zIndex="4"  color="whiteAlpha.600" 
    fontSize={['1.4em','1.4em','2em','3em']}
    w="100%" style={{margin: 'auto', userSelect: 'none', pointerEvents: 'none'}}
    mt={24} top="80" 
    userSelect='none'
  > Our concept is simple:<br/>
    You think, we take care of the rest.
  </Heading>
  <Box as='section' __css={{
      padding: '0 20px', background: 'purple',
      background: 'linear-gradient(90deg, rgba(64,12,96,1) 8%, rgba(64,12,96,1) 90%, rgba(18,167,252,1) 100%, rgba(64,12,96,1) 100%)',
    }}
  > <VStack spacing={4} mt="2" maxW="1300px" margin="auto">
      <Box style={{ borderRadius: '80px 150px 20px 120px ',
          height: '500px',
          width: '80%', //!<- Change w responsively
          overflow: 'hidden', display: 'flex', alignItems: 'left',
          justifyContent: 'center', margin: '0 auto', marginTop: '40px',
          marginBottom: '100px', background: 'transparent',
          outline: '2px solid white',
          boxShadow: '0px 20px 25px -5px #400c40, 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 2px 2px -2px rgba(0, 0, 0, 0.08)',
        }}
      > 
        {Splinner()}
        <AnimateIntro delay="1"> 
          {scenOne}
        </AnimateIntro> 
      </Box>


      <Heading mt={[22,1,4]}
        color='#dbd0bf' sx={{filter: 'blur(0.4px)'}}
        fontSize={['1.4em','1.4em','2em','3em']} px={[48,4,4]} 
        fontWeight='bolder' 
      > TRANSFORMING THE
        USER EXPERIENCE AND
        GENERATING VALUE THROUGH
        SOFTWARE DEVELOPMENT<br/>
      </Heading>


      <Box style={{ borderRadius: '410px 260px 480px 150px',
          height: '440px',
          width: '80%',
          paddingLeft: '100px',
          paddingRight: '100px',
          overflow: 'hidden', display: 'flex', justifyContent: 'center',
          margin: '0 auto', marginTop: '100px', marginBottom: '140px',
          background: 'transparent',
          boxShadow: '0px 20px 25px -5px #400c40, 0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 2px 2px -2px rgba(0, 0, 0, 0.08)',
          outline: '2px solid white'
        }}
      > <Heading as="h4" position="absolute" texAlign="left" 
        mt={48} color="whiteAlpha.600" fontSize={['1.4em','1.4em','2em','3em']}
        userSelect='none' style={{userSelect: 'none', pointerEvents: 'none'}}
      > Web, iOS, Android<br/>
        </Heading>
        {scenTwo}
        </Box>
    </VStack>
  </Box>
</> ); } export { Features };