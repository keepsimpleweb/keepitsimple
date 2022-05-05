import React from "react";
import { HStack, Image, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import l from "./imglogo.svg";

const NavBar =(props)=> {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle =()=> setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props} sx={{backdropFilter: "blur(40px)"}} boxShadow='md'>
      <MenuItem to="/" _hover={{color: 'crimson'}}>
        <HStack>
          <Image boxSize='60px' objectFit='cover'
            src={l} alt='logoNm' className='imgSpinner'
          />
          {/*//?---------none-none-inline---------------*/}
          <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
            display={["inline","inline", "inline"]}
            bgClip='text' fontSize='2xl' 
            _hover={{bgGradient:'linear(to-l, #f04, #7928CA)' }}
          >Keep it simple</Text>
        </HStack>
      </MenuItem>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon =({w:width='24px', h: height='24px'})=> (
  <svg width={width} height={height} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon =({w: width='24px', h: height='24px'})=> { 
  return (
  <svg width={width} height={height} viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  > <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);};

const MenuToggle =({ toggle, isOpen })=> { return (
  <Box display={{ base: "block", md: "none" }} 
    onClick={toggle} css={{
      cursor: 'pointer', 
      outline: "1px solid grey", 
      padding: "13px", 
      borderRadius: "100%",
    }} _hover={{
      backdropFilter: 'blur(10px)',
      filter: "contrast(0.8)",
      transform: "scale(1.1)"
    }}
  >
    {isOpen ? <CloseIcon h={16} w={16} /> : <MenuIcon h={16} w={16} />}
  </Box>
);};

const MenuItem =({ dis="flex", children, isLast, to="/", ...rest })=> {
return (
  <Link to={to}>
    <Text display={dis} {...rest}>
      {children}
    </Text>
  </Link>
);};

const MenuLinks =({ isOpen })=> {
  const sty = {
    con: {filter: 'contrast(0.7)'},
    und: {textDecoration: 'underline'},
    dis: ["none", "none", "none"],
  };
  return (
  <Box display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}
  > <Stack spacing={8} align="center" 
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]} fontWeight="bolder" fontSize="lg"
    > <MenuItem to="/about" sx={sty.con} _hover={sty.und}>About </MenuItem>
      <MenuItem to="/features" sx={sty.con} _hover={sty.und}>Features </MenuItem>
      <MenuItem to="/pricing" sx={sty.con} _hover={sty.und}>Pricing </MenuItem>
      <MenuItem to="/register" isLast>

        <Button size="sm" rounded="full" colorScheme='whiteAlpha'
          color={["primary.500", "primary.500", "white", "white"]}
          _hover={{ color: 'black', bg: ["primary.100", "primary.100", "white"] }}
        > Create Account
        </Button>

      </MenuItem>
    </Stack>
  </Box>
);};

const NavBarContainer =({ children, ...props })=> { return (
  <Flex as="nav" align="center"  py={'2'} w="100%" 
    justify={["space-between", "space-between", "space-evenly"]}
    position="sticky" top='0' zIndex='999'
    wrap="wrap" px={['48', '9', '9']}
    color={["white", "white", "primary.700", "primary.700"]}
    {...props}
  > {children} </Flex>
);};

export { NavBar };