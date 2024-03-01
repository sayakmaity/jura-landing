import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedText = () => {
  const animationProps = useSpring({
    width: 900,
    from: { width: 0 },
    config: { duration: 1000 }, // Animation duration in milliseconds
  });

  return (
    <animated.div style={animationProps}>
      <h1>Welcome to My Animated React App</h1>
    </animated.div>
  );
};

export default AnimatedText;