import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { globalColor, SectionTitle, DescriptiveText } from "../shared/Style";

const TechItem = (props) => {
  const { icon, alt } = props;

  return (
    <Container>
      <IconContainer>
        <Image src={icon} alt={alt} objectFit="fill" width={50} height={50} />
        <DescriptiveText>{alt}</DescriptiveText>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
export default TechItem;
