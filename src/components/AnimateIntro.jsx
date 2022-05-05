import { AnimatePresence, motion } from 'framer-motion'

import React from "react";

const AnimateIntro =({children, delay=1})=> { return (<>

<motion.div
  initial={{ y: -30, opacity: 0}}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 20, opacity: 0 }}
  transition={{ duration: 0.4 , delay: delay, type: 'easeInOut' }}
>{children}</motion.div>

</> ) }; export {AnimateIntro};