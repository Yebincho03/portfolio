import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroWrapper>
      <TextWrapper>
        <div>HI THERE👋</div>
        <h1>I'm Yebin Cho</h1>
        <h1>Front-end developer</h1>
        <div>Designer + Developer</div>
        <div>
          I’m a junior frontend developer with graphic design skills based in
          Vancouver.
        </div>
      </TextWrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  align-self: center;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Hero;
