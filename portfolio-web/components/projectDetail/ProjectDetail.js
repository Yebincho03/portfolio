import Image from "next/image";
import { globalColor, DescriptiveText } from "../../shared/Style.js";
import styled from "styled-components";

const ProjectDetail = (props) => {
  const {
    projectTitle,
    projectHeadline,
    role,
    tech,
    projectDescription,
    projectImg,
  } = props;

  return (
    <Container>
      <ProjectWrapper>
        <SectionContainer>
          <h1>{projectTitle}</h1>
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
  max-width: 900px;
  text-align: left;
  padding: 1vh 0;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${globalColor.grey10};
  border-radius: 20px;
  padding: 2em;
  gap: 2em;

  @media screen and (min-width: 800px) {
    padding: 3em;
    flex-direction: row;
  }
`;

export default ProjectDetail;
