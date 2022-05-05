import React from "react";
import {Flex, SimpleGrid} from "@chakra-ui/react";

const MainCardOptopus = ({ children }) => {return ( <>
<Flex
  position="relative"
  zIndex={3}
  overflow="hidden"
  mt={{ base: "0rem", md: "0rem" }}
  py={{ base: 0, md: 0 }}
  id="features"
>
  {/* <FeaturesBackground position="absolute" bottom={0} /> */}
  <SimpleGrid
    w="100%"
    placeItems="stretch"
    columns={{ base: 1, md: 2, lg: 3 }}
    spacing={6}
  >
    {children}
    {/* <HomepageFeatureCard type={NFTCollection.contractType} />
    <HomepageFeatureCard type={Marketplace.contractType} />
    <HomepageFeatureCard type={Token.contractType} />
    <HomepageFeatureCard type={Pack.contractType} />
    <HomepageFeatureCard type={NFTDrop.contractType} />
    <HomepageFeatureCard type={Split.contractType} /> */}
  </SimpleGrid>
</Flex>
</>); }; export { MainCardOptopus };
