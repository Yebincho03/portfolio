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
      <ButtonWrapper>
        <a href="#about">
          <button className="button">
            <h3>HIRE ME</h3>
          </button>
        </a>
      </ButtonWrapper>
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
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  .button {
    border: 1px solid white;
    width: 200px;
    border-radius: 10px;
    backgrond-color: none;
  }
`;

export default Hero;
