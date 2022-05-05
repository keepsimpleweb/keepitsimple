import React from "react";
import Spline from '@splinetool/react-spline';
import { Spinner, Box } from '@chakra-ui/react'

const Splinner=(mt)=> { return (
/**
 * This function returns a Spinner component with a size of xl and a margin-top of mt, and a
 * margin-left of calc(0px - var(--spinner-size) / 2).
 * @returns A function that returns a component.
 */
  <Spinner size="xl" mt={mt}
    ml="calc(0px - var(--spinner-size) / 2)"
  />);
};

const ThreeD =(param)=> <Spline scene={param}/>
/**
 * UseHookS is a React component that renders a 3D model of a molecule.
 * @param i'ts a link to the molecule's 3D model.
 */
function UseHookS({ param }) { 
  const [state, setState] = React.useState(null)
  const x = React.useMemo(()=> ThreeD(param), [])
  React.useEffect(()=> setState(x), [state])

return (<>
  <Box ml={[ -2, -2, -48 ]}
    css={{ zIndex: '-1', width: '800px', 
      height: '300px', objectFit: 'contain', 
      position: 'absolute', marginTop: '-200px',
    }}
  >
    {state=='null'? Splinner() : state}
  </Box>
</>) }; export { UseHookS };