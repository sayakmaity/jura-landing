// src/components/TypingAnimation.js
import React from 'react';
import { useTrail, animated, config } from 'react-spring';

const TypingAnimation = ({ title, textFollowUp }) => {
  const charsTitle = title.split('').map(char => (char === ' ' ? '\u00A0' : char));
  const trailTitle = useTrail(charsTitle.length, {
    opacity: 1,
    from: { opacity: 0 },
  });

  const charsFollowUp = textFollowUp.split('').map(char => (char === ' ' ? '\u00A0' : char));
  const trailFollowUp = useTrail(charsFollowUp.length, {
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: { opacity: 0 },
    config: { ...config.default},
    delay: 1500,
  });

  return (
    <>
    <div className='title-styles'>
      {trailTitle.map((props, index) => (
        <animated.span key={index} style={props}>
          {charsTitle[index]}
        </animated.span>
      ))}
      </div>
      <div className='custom-font-followup'>
      {trailFollowUp.map((props, index) => (
        <animated.span key={index} style={props}>
          {charsFollowUp[index]}
        </animated.span>
      ))}
    </div>
    <div className='contact-button'>
    <a href="mailto:jurafounders@gmail.com">Contact</a>
    </div>
    
    </>
  );
};

export default TypingAnimation;
