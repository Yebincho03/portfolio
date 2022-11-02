import { react, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../public/YC.logo.svg";
import Github from "../public/github-logo.svg";
import Linkedin from "../public/linkedin-logo.svg";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <HeaderContainer>
        <TextContainer>
          <LogoContainer>
            <Image width={74} height={76} src={Logo} alt={"Logo"} />
          </LogoContainer>
          <HamburgerContainer onClick={(e) => setShowMenu(!showMenu)}>
            <Image
              width={30}
              height={30}
              src={"/public/hamburger-menu.svg"}
              alt="Menu icon"
            />
          </HamburgerContainer>
          <div>
            <div>Contact me</div>
            <a href="https://github.com/Yebincho03">
              <Image width={50} height={50} src={Github} alt="githubLogo" />
            </a>
            <a href="https://www.linkedin.com/in/yebincho">
              <Image width={35} height={35} src={Linkedin} alt="linkedInLogo" />
            </a>
          </div>
        </TextContainer>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  max-height: 150px;
  padding: 24px;
  justify-content: center;
  flex-direction: row;
  top: 0;
  left: 0;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  justify-content: space-between;
`;
const HamburgerContainer = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const LogoContainer = styled.div`
  display: flex;
`;

export default Header;
