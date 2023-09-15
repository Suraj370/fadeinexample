import React from 'react';
import withFadeIn from './FadeIn'; // Import your HOC

const MyComponent = (props) => {
  // Your component logic here
  return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
  natus, nesciunt quasi minima</div>;
};

// Wrap MyComponent with the withFadeIn HOC
const AnimatedMyComponent = withFadeIn(MyComponent);

export default AnimatedMyComponent;
