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
        <div className="imgWrapper">
          <div className="blueBox"></div>
          <div className="greenBox"></div>
          <div className="img">
            <Image fill src={HeroImg} alt="HeroImage" />
          </div>
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
    .imgWrapper {
      position: relative;
      .img {
        width: 70%;
        height: auto;
        object-fit: contain;
        z-index: 3;
        padding-top: 50px;

        @media screen and (min-width: 800px) {
          height: 80%;
          width: 33.6vw;
        }
      }
      .greenBox {
        width: 140px;
        height: 140px;
        background-color: #74fac0;
        opacity: 30%;
        border-radius: 50px;
        position: absolute;
        z-index: -1;
        top: 30px;
        right: 0;
      }
      .blueBox {
        width: 40px;
        height: 40px;
        background-color: #4f60f6;
        opacity: 40%;
        border-radius: 40px;
        position: absolute;
        z-index: -1;
        top: 0;
        right: 150px;
      }
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
