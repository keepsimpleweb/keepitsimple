import React from "react"
import { FormControl, FormLabel, Heading,
  Button, VStack, Avatar, Input, 
} from '@chakra-ui/react'
import { Animation } from "@components/Animation";
import { Gravatar } from "../utils/Gravatar"


const BadgeForm =(props)=> { 
  const handleSubmit =e=> { e.preventDefault(); return setTimeout(()=>{props.handleSend()},500)};

return (<> <Animation>
<form style={{ position: "relative", 
    alignItems: "center",
    marginTop: "-66px",
  }} id="badge-form"
  onSubmit={handleSubmit}
> <VStack spacing={4}>
    <Heading as={'h1'} size='2xl'
      isTruncated color="white"
    > JOIN US!  </Heading>

    <Avatar size='lg'
      name={props.formValues.firsName} 
      src={
        !props.formValues.email==""? 
          Gravatar(props.formValues.email)
        : props.formValues.avatar
      }
    />
    <VStack spacing="40px">
        <FormControl>
        <FormLabel htmlFor='email' color="khaki" >Email address</FormLabel>
          <Input placeholder='Insert you email' color="white"
            htmlSize={22} width='auto' size='sm'
            id='email' type='email' isRequired
            name="email" autoFocus  rounded="full"
            onChange={props.onChange}
            value={props.formValues.email}
          />

        <FormLabel color="khaki" htmlFor='firstname' mt={1}>Firstname</FormLabel>
          <Input placeholder='Insert you firstname' color="white"
            htmlSize={22} width='auto' size='sm'
            id='firstname' type='text' rounded="full"
            name="firstname" isRequired
            onChange={props.onChange}
            value={props.formValues.firstname}
          />

        <FormLabel color="khaki" htmlFor='lastname' mt={1}>Lastname</FormLabel>
          <Input placeholder='Insert you lastname' color="white"
            htmlSize={22} width='auto' size='sm'
            id='lastname' type='text' rounded="full"
            name="lastname" isRequired
            onChange={props.onChange}
            value={props.formValues.lastname}
          />

        <FormLabel color="khaki" htmlFor='jobtitle' mt={1} > Job Title
        </FormLabel>
        <Input placeholder='Insert you job title' color="white"
          htmlSize={22} width='auto' size='sm'
          id='jobtitle' type='text' rounded="full"
          name="jobtitle" isRequired
          onChange={props.onChange}
          value={props.formValues.jobtitle}
        />

        <FormLabel color="khaki" htmlFor='twitter' mt={1}>Twitter</FormLabel>
        <Input placeholder='Insert twitter account' color="white"
          htmlSize={22} width='auto' size='sm'
          id='twitter' type='text'
          name="twitter" isRequired rounded="full"
          onChange={props.onChange}
          value={props.formValues.twitter}
        /> </FormControl>

      <Button type="submit" style={{marginTop: "24px"}}
        colorScheme='green' rounded="full"
        _hover={{
          bg: '#FF0080',
          transform: 'scale(1.04)',
        }} _active={{
        border: "none",
				bg: '#7928CA',
				transform: 'scale(0.96)',
				color: "black",
			}}> REGISTER </Button>
    </VStack>
  </VStack>
</form>

</Animation></> ) }; export {BadgeForm};