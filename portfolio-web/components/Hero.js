import React from "react";
import Image from "next/image";
import styled from "styled-components";
import HeroImg from "../public/myPic.png";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="hero">
        <TextWrapper>
          <h1>HI THERE👋</h1>
          <h1>I'm Yebin Cho</h1>
          <h1>Front-end developer</h1>
          <h3>Designer + Developer</h3>
          <h5>
            I’m a junior frontend developer with graphic design skills based in
            Vancouver.
          </h5>
          <ButtonWrapper>
            <button className="btn">
              <h3>HIRE ME</h3>
            </button>
          </ButtonWrapper>
        </TextWrapper>
        <div className="img">
          <Image fill src={HeroImg} alt="HeroImage" />
        </div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  padding: 24px;
  .hero {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: row;
    .img {
      width: 50%;
      height: 50%;

      object-fit: contain;
    }
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  .btn {
    width: 200px;
    border-radius: 10px;
    backgrond-color: none;
  }
`;

export default Hero;
