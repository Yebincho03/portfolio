import styled from "styled-components";

export const globalColor = {
  grey100: "#212121",
  grey0: "#FFFFFF",
  primary: "#74FAC0",
  secondary: "#4f60f6",
};

export const SectionTitle = styled.h3`
  color: ${globalColor.grey0};
  font-size: 40px;
  font-weight: 600;
  margin: 0;
`;

export const HeadLine = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: ${globalColor.grey0};
  margin: 0;
`;

export const DescriptiveText = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 18px;
  color: ${globalColor.grey0};
  margin: 0;
`;
