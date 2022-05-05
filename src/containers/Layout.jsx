import React from "react";
import { Button, useMediaQuery } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { NavBar } from "@components/TopNav";
import { Footer } from "@components/Footer";

const styleLayout = {
	textAlign: "center",
	backgroundColor: "#400c60",
	minHeight: "100vh",
	padding: "0px 0px",
	minWidth: "280px",
	maxWidth: "100vw",
	overflow: "hidden",
};

const Layout =({ children})=> { 
  const [isMobile] = useMediaQuery('(max-width: 768px)');

return (<> <NavBar/> 
	<main className="Layout" style={styleLayout}>
		{children} 
		<footer>
			<Button rounded="full" color="white"
				style={{ background: "transparent", 
					backdropFilter: "blur(13px)",
					position: "absolute", bottom: "40px",
					right: "80px", width: "10px", zIndex: "5",
					transform: isMobile ? "translate(40px, -40px)" : "translate(0px, 0px)", 
				}} _hover={{ 
					backdropFilter: 'blur(180px)',
					filter: "contrast(0.8) saturate(1400%)",
					transform: "scale(1.3)", 
				}}
				onClick={()=>window.scroll({top: 0, left: 0, behavior: "smooth"})}
			><ArrowUpIcon color="cyan"/> </Button>
			<Footer/>
		</footer>
	</main>
</> ); }; export { Layout };
