import React, { useState } from "react";
import styled from "styled-components";
import { colors, typography, device } from "../shared/styles";
import { Icon } from "./Icon";
import CyberLogo  from "../shared/logos/CgLogo.svg";
import { useMediaQuery } from "react-responsive";
import { MenuContent } from "./SideMenuContent";

const mediaDevice = device.mobileL;

const Container = styled.div`
  width: ${(props) => (props.active ? "412px" : "138px")};
  height: 100vh;
  display: flex;
  position: relative;
`;

const SideMenuContainer = styled.div`
  width: ${(props) => (props.active ? "395px" : "120px")};
  height: 100%;
  background: ${colors.neutral.CCWhite};
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  width: 24px;
`;

const ContentContainer = styled.div`
  margin-top: 0px;
  background: ${(props) => (props.active ? colors.neutral.CCWhite : "#E5E5E5")};
  height: 100%;

  @media ${mediaDevice} {
    margin: 25px 25px;
    background: ${colors.neutral.CCWhite};
  }
`;

const MenuToggle = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  right: 0px;
  bottom: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.neutral.CCWhite};
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    background: rgba(170, 131, 184, 0.2);
    box-shadow: 0px 0px 5px 5px rgba(170, 131, 184, 0.2);
  }
`;

const MobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.neutral.CCWhite};
`;

const MobileHeaderContainer = styled.div`
  height: 66px;
  margin: 10px 10px;
  display: flex;
  position: sticky;
  background: white;
  top: 0px;
  z-index: 10;
  flex-direction: row;
  align-items: center;
`;

const MobileLogo = styled.div`
  width: 50px;
  height: 46px;

  svg {
    width: 50px;
    height: 46px;
  }
`;

const MobileHeader = styled.div`
  font-family: ${typography.type.primary};
  font-style: normal;
  font-weight: ${typography.weight.bold};
  font-size: 18px;
  line-height: 23px;
  color: ${colors.neutral.Gray1};
  margin-left: 15px;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const Divider = styled.div`
  border: 1px solid ${colors.neutral.Gray6};
  height: 0px;
  width: 100%;
  margin-bottom: 20px;
`;

const FilterButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f3f7f9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;

  &:hover {
    cursor: pointer;
    background: rgba(170, 131, 184, 0.2);
    box-shadow: 0px 0px 5px 5px rgba(170, 131, 184, 0.2);
  }
`;

const MobileFilterContainer = styled.div`
  padding: 0px 10px 10px;
`;

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuIcon = isOpen ? "close" : "menu";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MobileContainer>
      <MobileHeaderContainer>
        <MobileLogo>
          <img src={CyberLogo} alt="Cybercom logo" />
        </MobileLogo>
        <MobileHeader>Service Report</MobileHeader>
        <IconContainer>
          <Icon icon={menuIcon} aria-hidden onClick={handleClick} />
        </IconContainer>
      </MobileHeaderContainer>
      <ContentContainer active={isOpen}>
        {isOpen && (
          <MobileFilterContainer>
            <Divider />
            <MenuContent showTicketTypeFilter={true} />
          </MobileFilterContainer>
        )}
      </ContentContainer>
    </MobileContainer>
  );
}

function DesktopMenu() {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleIcon = isExpanded ? "arrowleft" : "arrowright";

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container active={isExpanded}>
      <MenuToggle onClick={handleClick}>
        <Icon icon={toggleIcon} aria-hidden />
      </MenuToggle>
      <SideMenuContainer active={isExpanded}>
        <Logo>
          <img src={CyberLogo} alt="Cybercom logo" />
        </Logo>
        <ContentContainer>
          <Divider />
          {isExpanded ? (
            <MenuContent />
          ) : (
            <FilterButton onClick={handleClick}>
              <Icon icon="filter" aria-hidden />
            </FilterButton>
          )}
        </ContentContainer>
      </SideMenuContainer>
    </Container>
  );
}

export function SideMenu() {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  return <>{isMobile ? <MobileMenu /> : <DesktopMenu />}</>;
}

SideMenu.propTypes = {};

SideMenu.defaultProps = {};
