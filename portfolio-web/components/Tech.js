import styled from "styled-components";
import TechItem from "./TechItem";
import { globalColor, SectionTitle, DescriptiveText } from "../shared/Style";
import icons from "../public/data/icons.json";

const Tech = () => {
  return (
    <Container>
      <SectionWrapper>
        <SectionTitle className="sectionTitle">Skills & Tools</SectionTitle>
        <SkillWrapper>
          {icons.map((icon, i) => (
            <TechItem key={i} icon={icon.link} alt={icon.alt} />
          ))}
        </SkillWrapper>
      </SectionWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1vh 2em;
  align-items: center;
  margin: 20vh 0;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SkillWrapper = styled.div`
  display: flex;
  border: 1px solid ${globalColor.grey10};
  border-radius: 20px;
  padding: 2em;
  align-items: center;
  gap: 2em;
  margin-top: 2vh;
  flex-wrap: wrap;

  @media screen and (min-width: 800px) {
    padding: 3em;
    max-width: 830px;
  }
`;

export default Tech;
