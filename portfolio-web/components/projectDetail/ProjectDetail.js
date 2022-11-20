import Image from "next/image";
import {
  globalColor,
  DescriptiveText,
  ProjectText,
} from "../../shared/Style.js";
import styled from "styled-components";
import GitLogo from "../../public/logo/github.svg";
import Link from "next/link";

const ProjectDetail = (props) => {
  const {
    projectTitle,
    projectHeadline,
    projectImage,
    tech,
    projectDescription,
    team,
    link,
  } = props;

  return (
    <Container>
      <ProjectWrapper>
        <SectionContainer>
          <InfoContainer>
            <div className="projectTitle">
              <ProjectText>
                {projectTitle} | {projectHeadline}
              </ProjectText>

              <Link href={link}>
                <Image className="link" src={GitLogo} width={40} height={40} />
              </Link>
            </div>
            <div className="wrapper">
              <ProjectText className="role">Role</ProjectText>
              <DescriptiveText>Front-end Developer</DescriptiveText>
            </div>
            <div className="wrapper">
              <ProjectText>About the project</ProjectText>
              <DescriptiveText>
                {projectDescription}
                <p>{team}</p>
              </DescriptiveText>
              <h5>Tech : {tech}</h5>
            </div>
          </InfoContainer>
          <ImageContainer>
            <Image
              src={projectImage}
              alt="projectimage"
              objectPosition={"center"}
              objectFit={"cover"}
              quality={100}
            />
          </ImageContainer>
        </SectionContainer>
      </ProjectWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1vh 0;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${globalColor.grey10};
  padding: 2em;
  gap: 3em;

  @media screen and (min-width: 800px) {
    padding: 3em 0;
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    width: 700px;
  }

  .projectTitle {
    display: flex;
    gap: 1em;
    .link {
      cursor: pointer;
      :hover {
        scale: 0.9;
      }
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 800px) {
    width: 500px;
  }
`;

export default ProjectDetail;
