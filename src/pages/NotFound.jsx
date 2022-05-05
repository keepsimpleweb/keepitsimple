import React from "react";
import { Link } from "react-router-dom"
import { Heading, VStack, Button, Divider } from "@chakra-ui/react"
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Animation } from "@components/Animation";

const NotFound =()=> { return ( <> <Animation>

<VStack h="100vh" justifyContent={'center'} 
	alignItems={'center'} as="section"
> <Heading style={{
			display: 'flex',
			color: "white"
		}}
	> 404 
	<Divider orientation="vertical" h={16} w={2} color="white" ml={4} mr={4}/> 
		Nothing to do here...
	</Heading>

	<Link to="/">
		<Button mt={4} rounded="full" bg="tomato" 
			color="white" size="lg"  width='200px'
			leftIcon={<ChevronLeftIcon />}
			_active={{
				bg: 'crimson',
				transform: 'scale(0.96)',
				color: "black",
				borderColor: '#bec3c9',
			}}
			_hover={{
				bg: 'white',
				transform: 'scale(0.96)',
				color: "black",
				borderColor: '#bec3c9',
			}}
		> Volver </Button>
	</Link>

</VStack></Animation></>); }; export { NotFound };