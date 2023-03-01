import React from 'react'
import styled from 'styled-components';
import Image from "../images/pfp-rex.jpeg"

const SiteHeader = styled.header`
  padding: 12px 0;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  transition: ease 0.4s;
  z-index: 99;

  @media (min-width: 1024px) {
    padding: 20px 0;
  }

  @media (min-width: 768px) {
    padding: 16px 0;
  }
`;

const FullContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1280px) {
    padding: 0 30px;
  }

  @media (min-width: 1024px) {
    padding: 0 33px;
  }

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;

const LinkLogo = styled.a`
  opacity: 1;
  visibility: inherit;
  color: #171717;
  text-transform: uppercase;
  letter-spacing: 0.48px;
  position: relative;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const SiteHeaderMenu = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: -48px;
    margin-left: -147px;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: -40px;
    margin-left: -137px;
  }
`;

const MenuContainer = styled.div``;

const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

const MenuLi = styled.li`
  opacity: 1;
  visibility: inherit;
  padding: 2px;
`;

const LinkA = styled.a`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(23, 23, 23, 0.4);
  padding: 2px;
  display: block;
  cursor: pointer;

  &:hover {
    color: #171717;
    font-weight: 500;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const SiteHeaderIcon = styled.div`
  opacity: 1;
  visibility: inherit;
  position: relative;
  overflow: hidden;
  background-color: rgb(209 213 219/1);
  border-color: rgb(255 255 255/1);
  border-width: 2px;
  border-radius: 9999px;
  width: 60px;
  height: 60px;
  aspect-ratio: 1/1;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const SiteHeaderIconImage = styled.img`
  height: auto;
  max-width: 100%;
`

const Navbar = () => {
  return (
    <SiteHeader>
        <FullContainer>
          <LinkLogo href="/portfolio">Rex Odemheina</LinkLogo>
          <SiteHeaderMenu>
            <MenuContainer>
              <MenuList>
                <MenuLi>
                  <LinkA href="#about">About</LinkA>
                </MenuLi>
                <MenuLi>
                  <LinkA href="#projects">Projects</LinkA>
                </MenuLi>
                <MenuLi>
                  <LinkA href="#contact">Contact</LinkA>
                </MenuLi>
              </MenuList>
            </MenuContainer>
          </SiteHeaderMenu>
          <SiteHeaderIcon>
            <SiteHeaderIconImage src={Image} />
          </SiteHeaderIcon>
        </FullContainer>
      </SiteHeader>
  )
}

export default Navbar