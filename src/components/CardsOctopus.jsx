import React from "react";
import Icon from "@chakra-ui/icon";
import { HStack, Stack,  Box, Flex, Heading, Text,
  BoxProps, ImageProps as ChakraImageProps,
  chakra, } from "@chakra-ui/react";
import { UpDownIcon } from "@chakra-ui/icons";
// import useDimensions from "react-cool-dimensions";
// import { isBrowser } from "utils/isBrowser";

// import { Heading, Text } from "tw-components";

const CardsOctopus =({ title="hola", address="hiola", description="134h", }) => { return ( <>
  <h1>CardsOctopus</h1>
  <Stack spacing={2} p={4} w={80}
    borderRadius="lg" border="1px solid lightgray"
  >
    <Heading textTransform="capitalize" size="title.sm">
      {title}
    </Heading>
    <HStack>
      <Icon as={UpDownIcon} boxSize={4} color="gray.500" />
      <Text size="label.lg" color="gray.600"
        fontWeight={500} fontFamily="mono"
      >
        {address}
      </Text>
    </HStack>
    <Heading color="rgba(39, 46, 54, 0.9)" as="p" size="subtitle.sm">
      {description}
    </Heading>
  </Stack>
</> ) }; export {CardsOctopus};


// const ChakraNextUnwrappedImage = chakra(NextImage, {
//   shouldForwardProp: (prop) =>
//     [ "width", "height", "src", "alt",
//       "quality", "placeholder", "blurDataURL",
//       "loader ", "layout", "sizes",
//       "onLoadingComplete", "priority",
//     ].includes(prop),
// });

const previousLoadedImagesSet = new Set();

const ChakraNextImage =(props) => {
  const {
    src, alt, width, quality = 90,
    layout = "responsive",
    height, objectFit, objectPosition,
    placeholder = typeof src === "string" ? "empty" : "blur",
    imgProps, priority, sizes, ...rest
  } = props;
const { observe, width: _width } = useDimensions();

  const imageId = React.useMemo(() => {
    const _src = typeof src === "string" 
      ? src : src?.default?.src || src?.src || "";
    return `${_src}_w=${_width}`;
  }, [_width, src]);

  const size = sizes || (isBrowser() && _width !== undefined
    ? `${(_width / window.innerWidth) * 100}vw`
    : "100vw");

return (
  <Box maxW="100%" pos="relative" {...rest} ref={observe}>
    <ChakraNextUnwrappedImage
      onLoadingComplete={() => {
        previousLoadedImagesSet.add(imageId);
      }}
      objectFit={objectFit} objectPosition={objectPosition}
      w="auto" h="auto" layout={layout} sizes={size} width={width}
      quality={quality} height={height} placeholder={placeholder}
      src={src} alt={alt} priority={priority}
      transition={
        previousLoadedImagesSet.has(imageId) ? undefined : "all 0.2s"
      }
      {...imgProps}
    />
  </Box>
); };