import Link from "next/link";
import { globalColor, SectionTitle, DescriptiveText } from "../shared/Style";
import styled from "styled-components";
import Image from "next/image";
import Header from "../components/Header";
import DetailContainer from "../components/projectDetail/DetailContainer";

function Resume() {
  return (
    <Container>
      <Header />
      <ImageContainer>
        <Image
          src="/images/resume.jpg"
          objectFit={"cover"}
          quality={100}
          width={1000}
          height={1400}
        />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0;
`;

export default Resume;
