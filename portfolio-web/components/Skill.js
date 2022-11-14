import react from "react";
import Image from "next/image";
import styled from "styled-components";
import Css from "../public/icons/css3.svg";
import Html from "../public/icons/html5.svg";
import Javascript from "../public/icons/javascript.svg";
import Jquery from "../public/icons/jquery.svg";
import Sass from "../public/icons/sass.svg";
import React from "../public/icons/react.svg";
import Git from "../public/icons/git.svg";
import Firebase from "../public/icons/firebase.svg";
import {
  globalColor,
  SectionTitle,
  DescriptiveText,
  HeadLine,
} from "../shared/Style";

const Skill = () => {
  return (
    <Container>
      <SectionTitle className="sectionTitle">Skills & Tools</SectionTitle>
      <SkillWrapper>
        <IconContainer>
          <Image src={Html} width={50} height={50} />
          <DescriptiveText>HTML</DescriptiveText>
        </IconContainer>

        <IconContainer>
          <Image src={Css} width={50} height={50} />
          <DescriptiveText>CSS</DescriptiveText>
        </IconContainer>

        <IconContainer>
          <Image src={Sass} width={50} height={50} />
          <DescriptiveText>sass</DescriptiveText>
        </IconContainer>

        <IconContainer>
          <Image src={Javascript} width={50} height={50} />
          <DescriptiveText>javascript</DescriptiveText>
        </IconContainer>

        <IconContainer>
          <Image src={Jquery} width={50} height={50} />
          <DescriptiveText>jquery</DescriptiveText>
        </IconContainer>

        <IconContainer>
          <Image src={React} width={50} height={50} />
          <DescriptiveText>react</DescriptiveText>
        </IconContainer>

        <IconContainer>
          <Image src={Git} width={50} height={50} />
          <DescriptiveText>git</DescriptiveText>
        </IconContainer>

        <IconContainer>
          <Image src={Firebase} width={50} height={50} />
          <DescriptiveText>firebase</DescriptiveText>
        </IconContainer>
      </SkillWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  text-align: left;
  padding: 1vh 2em;
  margin: 20vh 0;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${globalColor.grey10};
  border-radius: 20px;
  padding: 2em;
  gap: 2em;
  margin-top: 2vh;

  @media screen and (min-width: 800px) {
    padding: 3em;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
`;

export default Skill;
