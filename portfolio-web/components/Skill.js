import react from "react";
import Image from "next/image";
import styled from "styled-components";
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Skill;
