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
          tech="Tech : React Native, JavaScript, Expo, Firebase Authentication, Google Auth, GraphQL"
        />
        <Project
          featureLogo={picbeakLogo}
          featureHeadline="Explore birds and spot them in the wild"
          featureDescription="Web app that provides educational information about bird species."
          featureImg={picbeakImg}
          tech="Tech : React.js, JavaScript, REST APIs, Express.js, Mongoose, Node.js, MongoDB Atlas, Sass, Git, Heroku"
        />
      </SectionWrapper>
      <button className="moreProjectBtn">
        <Link href="/projects">See more projects</Link>
      </button>
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
  .moreProjectBtn {
    cursor: pointer;
    width: 200px;
    height: 45px;
    border: 1px solid ${globalColor.primary};
    border-radius: 10px;
    background-color: transparent;
    color: ${globalColor.primary};
    font-size: 15px;
    line-height: 10px;
    margin-top: 2em;
    :hover {
      background-color: ${globalColor.primary};
      color: ${globalColor.grey100};
    }
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1em;
`;

export default ProjectsContainer;
