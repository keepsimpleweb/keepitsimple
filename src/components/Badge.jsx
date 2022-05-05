import React from "react";
import { Image,Box,Container,
  Stack, Text, Heading } from "@chakra-ui/react";

const Badge =(props)=> { return (<>
<Container>
    <Heading as='h2' size='md' maxW={48} ml={10} max={4}
      css={{textTransform: "uppercase"}}
    >
      {props.formValues.firstname==""? "YOUR BADGE": props.formValues.firstname}
    </Heading>

    <Box>
      <Image src={
          !props.formValues.email==""? ""
          : props.formValues.avatar
        } alt="avatar"
      />

      <Box>
        <Text bgGradient='linear(to-l,  #FF0080, #9f0)'
          bgClip='text' fontSize='xs' fontWeight='lighter'
        >
          @{props.formValues.twitter==""? "CheatModes4": props.formValues.twitter} 
        </Text>
         <Stack spacing={1}>
          <Heading as='h5' size='xs' css={{textTransform: "capitalize"}}>
            {props.formValues.firstname==""? "Firstname": props.formValues.firstname}
          </Heading>
          <Heading as='h5' size='xs' css={{textTransform: "capitalize"}}>
            {props.formValues.lastname==""?   "Lastname": props.formValues.lastname} 
          </Heading>
          <Heading as='h5' size='xs'>
            {props.formValues.jobTitle==""?  "Job title": props.formValues.jobTitle} 
          </Heading>
          <Heading as='h6' fontSize="12px">
            {props.formValues.email==""?         "Email": props.formValues.email}    
          </Heading>
         </Stack>
      </Box>

    </Box>
</Container>

</> ) }; export {Badge};