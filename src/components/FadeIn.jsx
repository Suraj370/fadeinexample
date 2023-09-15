import React from 'react';
import { motion } from 'framer-motion';

// Define the animation properties
const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const withFadeIn = (WrappedComponent) => {
  return (props) => {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 0.5 }} // Adjust the duration as needed
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

export default withFadeIn;
