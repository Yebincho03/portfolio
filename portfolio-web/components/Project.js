import Image from "next/image";
import { globalColor, DescriptiveText } from "../shared/Style";
import styled from "styled-components";

const Project = (props) => {
  const { featureLogo, featureHeadline, featureDescription, featureImg, tech } =
    props;

  return (
    <ProjectWrapper>
      <FeatureContainer>
        <ImageContainer>
          <Image
            src={featureImg}
            alt="featureimage"
            objectPosition={"center"}
            objectFit={"cover"}
            quality={100}
          />
        </ImageContainer>
        <InfoContainer>
          <div className="featureLogo">
            <Image
              src={featureLogo}
              objectFit={"cover"}
              quality={100}
              alt="featureLogo"
            />
          </div>
          <h2 className="headLine">{featureHeadline}</h2>
          <DescriptiveText>{featureDescription}</DescriptiveText>
          <DescriptiveText className="tech">{tech}</DescriptiveText>
        </InfoContainer>
      </FeatureContainer>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  text-align: left;
  padding: 1vh 0;
`;

const FeatureContainer = styled.div`
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  @media screen and (min-width: 800px) {
    max-width: 400px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;

  @media screen and (min-width: 800px) {
    max-width: 300px;
  }

  .featureLogo {
    width: 130px;
    height: 25px;
    margin: 0;
    justify-content: center;
  }
  .headLine {
    margin: 2vh 0;
  }

  .tech {
    padding-top: 30px;
    font-weight: 300;
    color: ${globalColor.grey10};
  }
`;

export default Project;
