import styled from "styled-components";

export const globalColor = {
  grey100: "#212121",
  grey10: "#7a7a7a",
  grey0: "#FFFFFF",
  primary: "#74FAC0",
  secondary: "#4f60f6",
};

export const SectionTitle = styled.h3`
  color: ${globalColor.grey0};
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  @media screen and (min-width: 800px) {
    font-size: 40px;
  }
`;

export const HeadLine = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: ${globalColor.grey0};
  line-height: 35px;
  margin: 0;
  @media screen and (min-width: 800px) {
    font-size: 28px;
    font-weight: 600;
    color: ${globalColor.grey0};
    line-height: 35px;
    margin: 0;
  }
`;

export const DescriptiveText = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 18px;
  color: ${globalColor.grey0};
  margin: 0;
`;
