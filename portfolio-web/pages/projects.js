import Link from "next/link";
import { globalColor, SectionTitle, DescriptiveText } from "../shared/Style";
import styled from "styled-components";
import Image from "next/image";
import Header from "../components/Header";

function Project() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export default Project;
