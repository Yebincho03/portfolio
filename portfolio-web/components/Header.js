import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../public/logo/YC.logo.svg";
import Github from "../public/logo/github.svg";
import Linkedin from "../public/logo/linkedin-logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Link href="/">
          <Image width={54} height={56} src={Logo} alt="Logo" />
        </Link>

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
              <Image width={40} height={40} src={Linkedin} alt="linkedInLogo" />
            </a>
          </Menu>
        </MenuItems>
      </TextContainer>
    </HeaderContainer>
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
  margin-top: 2vh;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  margin: 0 5px;

  .contactMe {
    line-height: 40px;
    margin: 0 10px;
    font-size: 20px;
    font-weight: 500;
  }
`;
const MenuItems = styled.div`
  display: flex;
`;

export default Header;
