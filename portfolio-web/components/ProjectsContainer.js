import Project from "./Project";
import styled from "styled-components";
import courteLogo from "../public/logo/courte-logo.svg";
import courteImg from "../public/images/courte-image.png";
import picbeakLogo from "../public/logo/picbeak-logo.svg";
import picbeakImg from "../public/images/picbeak-image.png";
import {
  globalColor,
  SectionTitle,
  DescriptiveText,
  HeadLine,
} from "../shared/Style";

const ProjectsContainer = () => {
  return (
    <Container id="projects">
      <SectionTitle className="sectionTitle">Projects</SectionTitle>
      <Project
        featureLogo={courteLogo}
        featureHeadline="Discover a better way to play tennis"
        featureDescription="A mobile application that facilitates the use and sharing of tennis courts."
        featureImg={courteImg}
      />
      <Project
        featureLogo={picbeakLogo}
        featureHeadline="Explore birds and 
        spot them in the wild"
        featureDescription="Web app that provides educational information about bird species."
        featureImg={picbeakImg}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
  margin: 0;
  margin-top: 13.7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .sectionTitle {
    margin-bottom: 2vh;
    text-align: left;
  }
`;

export default ProjectsContainer;
