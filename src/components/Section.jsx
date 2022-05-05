import React from "react";
import { AnimatedGradient } from "./AnimatedGradient";
import { StaticGradient } from "./StaticGradient";
import { Box, Container, Heading,
  Flex, SimpleGrid, Stack, useBreakpointValue,
} from "@chakra-ui/react";

const gradientMap = {
  animated: AnimatedGradient,
  static: StaticGradient,
};

const HomepageSection =({
  childrenOnRightSide, title, subtitle,
  isDark, children, bottomGradient,
  topGradient, id, mainAction, leftAlignedTitle,
  hero, subtitleMd, titleSm, paddingBottom,
  color, bg,y,
  ...rest
})=> {
  const TopGradient = topGradient ? gradientMap[topGradient] : null;
  const BottomGradient = bottomGradient ? gradientMap[bottomGradient] : null;
  const isMobile = useBreakpointValue({ base: true, md: false });

  const MainActionButton = React.useMemo(() => {
    return mainAction && mainAction.MainActionButton;
  }, [mainAction]);

return ( <>
  <Box w="100%" position="relative" h='220%'
    as="section" overflow="hidden"
    id={id} pb={paddingBottom ? [44, 44, 80] : []} mb={[0,16,16]} pt={12}
    {...rest}
  > <Container position="relative" zIndex={0}
      maxW="container.page" py={["75px", "75px", "150px"]}
    > {TopGradient && (
        <TopGradient zIndex={-1} position="absolute"
          top={0} left="50%" w="100%"
          transform="translate(-50%, -66%)"
          hero={hero}
          style={{top:'1000px'}}
        />
      )}
      <SimpleGrid columns={[1, 1, childrenOnRightSide ? 2 : 1]}
        spacing={[6, 6, 12]}
        {...y}
      > <Stack spacing={[6, 6, 8]}
          align={childrenOnRightSide ? "flex-start" : "center"}
          justifyContent="center"
        > <Flex align="flex-end" justify="space-between" w="100%">
            <Container maxW="container.lg" px={0}>
              <Heading as="h2" fontSize={["1.4em","1.4em","2em","3em"]}
                w={[ "100%", "100%",
                  MainActionButton && !childrenOnRightSide ? "50%" : "100%",
                ]}
                // color={isDark ? "#F2FBFF" : "#262A36"}
                color={!color? "whiteAlpha.700" : color}
                textAlign={
                  (MainActionButton && !isMobile) || leftAlignedTitle
                    ? "left"
                    : "center"
                }
                size={
                  hero ? "display.lg" : titleSm ? "display.sm" : "display.md"
                }
              >
                {title}
              </Heading>
            </Container>
            {isMobile || mainAction?.forceBelow ? null : MainActionButton}
          </Flex>
          {subtitle && (
            <Container maxW="container.lg" px={0}>
              <Heading
                as="h3"
                textAlign={MainActionButton && !isMobile ? "left" : "center"}
                // color={ isDark ? "rgba(242, 251, 255, 0.8)" : "rgba(39, 46, 54, 0.9)" }
                color={!color? "whiteAlpha.600" : color}
                size={subtitleMd ? "subtitle.md" : "subtitle.lg"}
                fontSize={["1em","1em","1em","1.5em"]}
                fontWeight="thin"
                px={[34, 16,16]}
                pb={[34, 16,16]}
              >
                {subtitle}
              </Heading>
            </Container>
          )}
          {childrenOnRightSide ? null : children}
          {isMobile || mainAction?.forceBelow ? MainActionButton : null}
        </Stack>
        {childrenOnRightSide ? children : null}
      </SimpleGrid>

      { BottomGradient && 
        (<BottomGradient
          zIndex={-1} position="absolute"
          bottom={0} left="50%" w="100%"
          transform={`translate(-50%, ${hero ? "3%" : "66%"})`}
          hero={hero}
        />)
      }
    </Container>
    <Box zIndex={1} bg={isDark ? bg : "transparent"}
      position="absolute" top={0} bottom={0}
      left={0} right={0} mixBlendMode="multiply"
    />
  </Box>
</> ); }; export { HomepageSection };