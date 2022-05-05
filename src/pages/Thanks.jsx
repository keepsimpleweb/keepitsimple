import React from 'react';
import { Animation } from '@components/Animation';
import {  Box, Heading,Text } from '@chakra-ui/react';

const Thanks =()=> {

	setTimeout(()=>{
		window.location.href='/keepitsimple/';
	},4000);

return ( <><Animation>
	<Box as='section' 
		style={{ height: '100vh', 
			width: '100%',
			justifyContent: 'center',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		}}
	> <Heading style={{ backgroundColor: '#400c60', 
			fontWeight: 'bold',
			color: 'white',
			marginTop: '-40rx',
		}}>Thanks for trusting us!
		</Heading>
		<Text >Soon you will be contacted</Text>
	</Box>
</Animation></> ); }; export { Thanks };