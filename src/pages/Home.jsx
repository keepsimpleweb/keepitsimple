import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Heading , Button, Text } from "@chakra-ui/react";
import { Animation } from "@components/Animation";
import { MainCards } from "../components/MainCards";
import { Cards } from "../components/Cards";
import logo from "./logo.svg";
import "./module.css";

const color = {
	color: "#61afef",
	fontFamily: "consolas",
	textDecoration: "none",
	fontSize: "0.9em",
	marginTop: "14px",
}; const tint = { 
	color: "cyan", 
	fontSize: "0.9em", 
	marginTop: "14px" 
};

function Home() {
	const [tinta, setTinta] = React.useState(color);
	const sty = { res: ["1.4em","1.4em","2em","3em"], };

return ( <><Animation> <Box bg="white" as="section">  <div style={{ textAlign: "center"}}>

<section style={{
		backgroundColor: "#400c60",
		background: "rgb(64,12,96)",
		background: "linear-gradient(153deg, rgba(64,12,96,1) 7%, rgba(64,12,96,1) 47%, rgba(18,167,252,1) 90%, rgba(64,12,96,1) 96%)",
		background: "rgb(64,12,96)",
		background: "linear-gradient(153deg, rgba(64,12,96,1) 7%, rgba(64,12,96,1) 77%, rgba(18,167,252,1) 90%, rgba(64,12,96,1) 96%)",
		background: "radial-gradient(circle at 50% 58%, rgba(21, 10, 255, 0.61) 0%, rgba(61, 12, 96, 0.94) 39%, rgba(64, 12, 96, 100) 100%)",
		color: "white", minHeight: "100vh", display: "flex", flexDirection: "column",
		alignItems: "center", justifyContent: "center", fontSize: "calc(10px + 2.2vmin)",
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
		position: 'relative', zIndex: "1", paddingBottom: "50px",
	}}
> 
	<Heading as="h1" mt={[28,16,16]} pb={5} fontWeight="bolder"
		color='#dbd0bf' sx={{filter: 'blur(0.4px)'}}
		fontSize={sty.res} px={[48,4,4]}
	>We create apps, easily.<br/>
	</Heading>

	<Text mt={[8,2,1]} fontSize={['0.6em', '0.6em', '0.7em','0.9em']} 
		px={[56,4,4]} fontWeight="thin"
		sx={{filter: 'contrast(0.5) blur(0.34px)'}}
	> Bridging the gap between your business and the world!<br/>
		Transforming the user experience and generating value through software development.
	</Text>
	<Link to='/register'>
		<Button  mt={8} fontSize="24px" mb={9} bg='#f03' 
			px={'20'} size='lg' _hover={{color: 'black',background: 'red'}}
			sx={{backdropFilter: 'blur(10px)', boxShadow: '0px 0px 10px #f03'}}
			mixBlendMode="lighten"
			rounded="full">Start with us</Button>
	</Link>
	<img src={logo} alt="logo"
		style={{ height: "40vmin",
			WebkitFilter: "blur(0.3px) saturate(2)",
			marginBottom: "50px"
		}} className="App-logo imgSpinner"
		position="relative"
		zIndex="-1"
	/>
	<Box display='flex'>
		<a href="https://reactjs.org" target="_blank"
			rel="noopener noreferrer"
			style={{ color: "#ff0999",
				fontFamily: "monospace",
				textDecoration: "none",
				fontSize: "1.3em",
			}}
		> Using&ensp;</a>
		<a href="https://github.com/rroderickk/nodemachine" target="_blank"
			rel="noopener noreferrer"
			style={{ color: "#ff0999",
				fontFamily: "monospace",
				textDecoration: "none",
				fontSize: "1.3em",
			}}
		> <strong style={{ color: "#98c379" }}>
				NodeMachine
			</strong>
		</a>
	</Box>
	<a href="https://twitter.com/cheatmodes4"
		target="_blank" rel="noopener noreferrer"
		onMouseOver={()=> setTinta(tint)}
		onMouseLeave={()=> setTinta(color)}
		style={tinta}
	> @CheatModes4<br/><br/><br/>
	</a>
</section> 
	<MainCards>
		<Cards/>
	</MainCards>
</div> 
</Box> 
</Animation></> ); }; export { Home };