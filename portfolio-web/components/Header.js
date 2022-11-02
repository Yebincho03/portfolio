import { react, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../public/YC.logo";
import { globalColor } from "../shared/Style";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Header = () => {
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
            src={"/images/hamburger-menu.svg"}
            alt="Menu icon"
          />
        </HamburgerContainer>
        <div className={styles.navContact}>
          <div>Contact me</div>
          <a href="https://github.com/Yebincho03">
            <Image src={githubLogo} alt="githubLogo" />
          </a>
          <a href="https://www.linkedin.com/in/yebincho">
            <Image src={linkedIn} alt="linkedInLogo" />
          </a>
        </div>
      </TextContainer>
    </HeaderContainer>
  </>;
};

const HeaderContainer = styled.div`
  display: flex;
  max-height: 72px;
  padding: 24px;
  justify-content: center;
  flex-direction: row;
  top: 0;
  left: 0;
  align-items: center;
`;

const TextContainer = styled.div``;
const HamburgerContainer = styled.div``;

export default Header;
