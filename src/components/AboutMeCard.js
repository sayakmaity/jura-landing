import React from "react";
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';

const Card = styled.div`
  color: #feb6ff;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  height: 400px;
  width: 350px;
  float: right;
  text-align: right;
`;

const Image = styled.img`
  margin-top: 20px;
  height: 300px;
  border-radius: 8px;
  margin-right: 10px;
`

const Container = styled.div`
  max-width: 1300px;
  text-align: right;
  float: right;
`;

const AboutMeCard = () => {

  const springs = useSpring({
    from: { x: 4000 },
    to: { x: 0 },
    delay: 2000,
    config: {friction:60}
  });

  return (
    <animated.div
      style={{
        ...springs,
      }}>
        <Container>
            <Image src="./headshot.jpeg" alt="logo"/>
            <Image src="./IMG_2313.jpg" alt="logo"/>
            <Card>
                <h5>
                    I am a senior at Harvard University, studying computer science. In my free time, I enjoy traveling, working out and going for runs, and cooking/baking new recipes. I love to code and am also really passionate towards STEM and improving gender diversity in STEM. I founded my 501(c)(3) non-profit organization ThinkSTEAM to raise awareness of the gender gap in STEM and STEAM, which incorporates the arts and generally represents STEM’s intersection with humanities and social sciences. STEM’s intersection with humanities/social sciences allows us to think of STEM in the context of the people it impacts so that we can make sure STEM doesn’t exacerbate any gender and racial inequities. Check out ThinkSTEAM’s website in the link below!
                </h5>
            </Card>
        </Container>
      </animated.div>
  );
};

export default AboutMeCard;
