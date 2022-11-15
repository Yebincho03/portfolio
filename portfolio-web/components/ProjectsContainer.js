import Project from "./Project";
import styled from "styled-components";
import courteLogo from "../public/logo/courte-logo.svg";
import courteImg from "../public/images/courte-image.png";
import picbeakLogo from "../public/logo/picbeak-logo.svg";
import picbeakImg from "../public/images/picbeak-image.png";
import { globalColor, SectionTitle } from "../shared/Style";
import Link from "next/link";

const ProjectsContainer = () => {
  return (
    <Container id="projects">
      <SectionWrapper>
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
      </SectionWrapper>
      <Link href="/projects">See more projects</Link>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2em;
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
  .moreBtn {
    width: 150px;
    height: 45px;
    border: none;
    background-color: transparent;
    color: ${globalColor.grey10};
    font-size: 15px;
    line-height: 10px;
    margin-top: 2em;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1em;
`;

export default ProjectsContainer;
