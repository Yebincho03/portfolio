import react from "react";
import Image from "next/image";
import styled from "styled-components";
import Icon from "../public/sticker.png";
import { globalColor, SectionTitle, DescriptiveText } from "../shared/Style";
import Arrow from "../public/arrow.svg";

const About = () => {
  return (
    <Container>
      <div className="arrow">
        <Image src={Arrow} />
      </div>
      <div className="blackBox">
        <div className="imgWrapper">
          <Image className="icon" src={Icon} alt="icon" />
        </div>
        <div className="textWrapper">
          <SectionTitle className="sectionTitle">Hi, I’m Yebin</SectionTitle>
          <DescriptiveText className="descriptiveText">
            I’m a <b>Frontend Developer</b> with a background in graphic design.
            Recently, I graduated from
            <b>Langara College Web and Mobile development.</b> I am passionate
            about solvoing problems through code and creating interactive
            applications and experiences on the web. I am excited to work
            alongside other amazing programmers and learn so much more!
          </DescriptiveText>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  justify-content: center;
  align-self: center;
  margin: 20vh 0;

  .arrow {
    display: flex;
    justify-content: center;
    margin-bottom: 20vh;
  }

  .blackBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000000;
    width: 85vw;
    border-radius: 20px;
    padding: 5vh 5vw;

    @media screen and (min-width: 800px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }
    .imgWrapper {
      width: 20vw;
      .icon {
        width: 50px;
        height: auto;
      }
    }

    .textWrapper {
      width: 100%;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-self: center;

      @media screen and (min-width: 800px) {
        width: 45vw;
      }

      .sectionTitle {
        line-height: 80px;
      }

      .descriptiveText {
        b {
          color: ${globalColor.primary};
          font-weight: 200;
        }
      }
    }
  }
`;

export default About;
