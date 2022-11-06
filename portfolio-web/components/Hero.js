import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { globalColor, HeadLine, DescriptiveText } from "../shared/Style";
import HeroImg from "../public/myPic.png";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="textWrapper">
        <div className="helloText">HI THERE👋</div>
        <HeadLine>I'm Yebin,</HeadLine>
        <HeadLine>Front-end developer</HeadLine>
        <h4>DESIGNER + DEVELOPER</h4>
        <DescriptiveText>
          I’m a junior frontend developer with graphic design skills based in
          Vancouver.
        </DescriptiveText>
        <ButtonWrapper>
          <button className="btn">
            <h3>HIRE ME</h3>
          </button>
        </ButtonWrapper>
      </div>
      <div className="imgWrapper">
        <div className="img">
          <div className="blueBox"></div>
          <div className="greenBox"></div>
          <Image className="heroImg" src={HeroImg} alt="HeroImage" />
        </div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  justify-content: center;
  align-self: center;
  margin-top: 4vh;

  @media screen and (min-width: 800px) {
    gap: 2vw;
    margin-top: 8vh;
  }

  .textWrapper {
    margin-top: 5vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 800px) {
      width: 70vw;
      height: auto;
    }

    .helloText {
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 40px;
    }

    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: ${globalColor.primary};
    }
  }

  .imgWrapper {
    display: flex;
    justify-content: center;
    width: 100%;

    .img {
      margin-top: 4vh;
      position: relative;

      @media screen and (min-width: 800px) {
        height: 100%;
        width: 300px;
      }

      .heroImg {
        width: 100%;
        height: auto;
        z-index: 3;
        object-fit: contain;
      }

      .greenBox {
        width: 100px;
        height: 100px;
        background-color: ${globalColor.primary};
        opacity: 30%;
        border-radius: 40px;
        position: absolute;
        z-index: 1;
        top: -1vh;
        right: -1vw;
      }

      .blueBox {
        width: 30px;
        height: 30px;
        background-color: ${globalColor.secondary};
        opacity: 40%;
        border-radius: 40px;
        position: absolute;
        z-index: 1;
        top: -7vh;
        right: 7vw;
      }
    }
  }
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
