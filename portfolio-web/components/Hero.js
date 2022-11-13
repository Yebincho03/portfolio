import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { globalColor, HeadLine, DescriptiveText } from "../shared/Style";
import HeroImg from "../public/images/myPic.png";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="textWrapper">
        <div className="helloText">HI THERE👋</div>
        <HeadLine>I'm Yebin,</HeadLine>
        <HeadLine>Front-end developer</HeadLine>
        <h4>DESIGNER + DEVELOPER</h4>
        <DescriptiveText className="descriptiveText">
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
  flex-direction: column;
  max-width: 900px;
  justify-content: center;
  align-self: center;
  margin-top: 4vh;
  padding: 2em;

  @media screen and (min-width: 800px) {
    gap: 2vw;
    margin-top: 13vh;
    flex-direction: row;
  }

  .textWrapper {
    margin-top: 5vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 800px) {
      width: 50vw;
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
      line-height: 50px;
      color: ${globalColor.primary};
      margin: 0;
    }

    .descriptiveText {
      width: 80%;
    }
  }

  .imgWrapper {
    display: flex;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 800px) {
      height: 100%;
      width: 35vw;
    }

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
        top: -5vh;
        right: 20vw;

        @media screen and (min-width: 800px) {
          position: absolute;
          top: -5vh;
          right: 5vw;
        }
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  .btn {
    width: 180px;
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid ${globalColor.primary};
    color: ${globalColor.primary};
    font-size: 15px;
    line-height: 10px;
    margin: 0;
  }
`;

export default Hero;
