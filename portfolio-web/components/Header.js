import { react, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../public/YC.logo.svg";
import Github from "../public/github.svg";
import Linkedin from "../public/linkedin-logo.svg";
import hamburger from "../public/hamburger-menu.svg";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <HeaderContainer>
        <TextContainer>
          <Image width={74} height={76} src={Logo} alt={"Logo"} />
          <MenuItems>
            <Menu>
              <div className="contactMe">CONTACT ME</div>
            </Menu>
            <Menu>
              <a href="https://github.com/Yebincho03">
                <Image width={40} height={40} src={Github} alt="githubLogo" />
              </a>
            </Menu>
            <Menu>
              <a href="https://www.linkedin.com/in/yebincho">
                <Image
                  width={40}
                  height={40}
                  src={Linkedin}
                  alt="linkedInLogo"
                />
              </a>
            </Menu>
          </MenuItems>
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
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  margin: 0 5px;

  .contactMe {
    line-height: 40px;
    margin: 0 10px;
    font-size: 20px;
    font-weight: 700;
  }
`;
const MenuItems = styled.div`
  display: flex;
`;

export default Header;