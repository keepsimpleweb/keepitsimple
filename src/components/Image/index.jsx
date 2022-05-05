import React from "react"
import { Box, BoxProps, 
  ImageProps, chakra, Image, useDimensions,
} from "@chakra-ui/react";

const STR_UNDEFINED = "undefined";
export const hasWindow = typeof window !== STR_UNDEFINED;
export const hasDocument = typeof document !== STR_UNDEFINED;

function isBrowser() {
  return hasWindow;
}

const ChakraNextUnwrappedImage = chakra(Image, {
  shouldForwardProp: (prop)=>
    [ "width", "height", "src", "alt",
      "quality", "placeholder", "blurDataURL",
      "loader ", "layout", "sizes",
      "onLoadingComplete", "priority",
    ].includes(prop),
});

const previousLoadedImagesSet = new Set();
const ChakraNextImageProps = { alt: "alt" };


const ChakraNextImage =(props)=> {
  const { quality=90, layout="responsive",
    placeholder=typeof src==="string"? "empty" : "blur",
    src, alt, width, height, objectFit, objectPosition,
    priority, sizes, ...rest 
  } = props;

  const imageId = React.useMemo(()=> {
    const src = typeof src === "string" ? src : src?.default?.src || src?.src || "";
    return `${src}_w=${width}`;
  }, [width, src]);

  const size = sizes || (isBrowser() && width !== undefined
    ? `${(width / window.innerWidth) * 100}vw`
    : "100vw");

return ( <>
  <Box maxW="100%" pos="relative" {...rest}>
    <ChakraNextUnwrappedImage 
      onLoadingComplete={() => {
        previousLoadedImagesSet.add(imageId);
      }}
      objectFit={objectFit}
      objectPosition={objectPosition}
      w="auto" h="auto"
      layout={layout}
      sizes={size}
      quality={quality}
      width="20"
      height="20"
      placeholder={placeholder}
      src={src}
      alt={alt}
      priority={priority}
      transition={
        previousLoadedImagesSet.has(imageId) ? undefined : "all 0.2s"
      }
      ml={[4,8,8]}
    />
  </Box>
</>); }; export { ChakraNextImage }; 

