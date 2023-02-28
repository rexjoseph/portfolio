import React, { useEffect } from "react";
import styled from 'styled-components';

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
`

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
`

const FullContainerDefault = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 13px;

  @media (min-width: 1280px) {
    padding: 0 30px;
  }

  @media (min-width: 1024px) {
    padding: 0 33px;
  }

  @media (min-width: 768px) {
    padding: 0 24px;
  }
`

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
`

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
`

const MenuContainer = styled.div``

const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`

const MenuLi = styled.li`
  opacity: 1;
  visibility: inherit;
  padding: 2px;
`

const Link = styled.a`
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
`

const SiteHeaderIcon = styled.div`
  opacity: 1;
  visibility: inherit;
  position: relative;
  overflow: hidden;
`

const Main = styled.main`
  background: #f5f5f4;
  display: block;
`

const CaseHero = styled.div`
  opacity: 1;
  padding-bottom: 4rem;
  padding-top: 14rem;
  position: relative;

  @media screen and (min-width: 750px)
    {
    padding-bottom: 8rem;
    padding-top: 22rem;
  }
`

const CaseHeroContent = styled.div`
  padding-left: 6.9230769231vw;
  padding-right: 6.9230769231vw;
  position: relative;

  @media screen and (min-width: 750px)
    {
    padding-left: 2.7777777778vw;
    padding-right: 2.7777777778vw;
  }
`

const CaseHeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const CaseHeroH2 = styled.h2`
  font-size: 12.3076923077vw;
  font-weight: 500;
  letter-spacing: -3.8px;
  line-height: .9;
  text-transform: uppercase;

  @media screen and (min-width: 750px)
    {
    font-size: 6.3333333333vw;
  }
`

const CaseHeroParagraph = styled.p`
  transform: translate(0px, 0px);
  opacity: 1;
  visibility: inherit;
  margin-bottom: 2rem;

  @media screen and (min-width: 1025px)
   {
    width: 27.7777777778vw;
  }

  @media screen and (min-width: 750px)
   {
    width: 33.3333333333vw;
  }

  // @media screen and (min-width: 501px)
  // {
  //   margin-bottom: 2.3rem;
  //   width: 64.6153846154vw;
  // }
`

const CaseHeroUrl = styled.div`
  margin-bottom: 4rem;
  transform: translate(0px, 0px);
  opacity: 1;
  visibility: inherit;
`

const CaseHeroLink = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 0.4rem;
`

const CaseHeroLinkSpanLink = styled.a`
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: -0.72px;
  line-height: .8;
  text-transform: uppercase;
  color: #000;
`

const CaseHeroLinkSpan = styled.span``

const CaseHeroAsset = styled.div`
  height: 143.5897435897vw;
  width: 100%;

  @media screen and (min-width: 750px)
 {
    height: 43.0555555556vw;
  }
`

const CaseHeroAssetCrop = styled.div`
  height: 100%;
  position: relative;
  opacity: 1;
  visibility: inherit;
`

const CaseHeroImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
  opacity: 1;
  visibility: inherit;
`

const CaseTable = styled.section`
  background: #ececec;
  padding-bottom: 3.4rem;
`

const CaseTableContent = styled.div`
  padding-left: 6.9230769231vw;
  padding-right: 6.9230769231vw;
  position: relative;

  @media screen and (min-width: 750px)
  {
    padding-left: 2.7777777778vw;
    padding-right: 2.7777777778vw;
  }
`

const CaseTableTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -0.8px;
  line-height: 1;
  text-transform: uppercase;
  padding-bottom: 1.6rem;

  @media screen and (min-width: 750px)
  {
    font-size: 4rem;
    width: 27.7777777778vw;
  }
`

const TableContent = styled.div`
  border-top: 1px solid #262523;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 750px)
 {
    align-items: flex-end;
  }
`

const TableRow = styled.div`
  border-bottom: 1px solid #262523;
  display: flex;
  min-height: 8rem;
  padding-bottom: 2.2rem;
  padding-top: 1.5rem;
  opacity: 1;
  visibility: inherit;
`

const Paragraph = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  line-height: 1.3;
  flex-shrink: 0;
  padding-right: 1rem;
  width: 32.3076923077vw;

  @media screen and (min-width: 750px)
    &:first-child {
    width: 16.6666666667vw;
  }

  @media screen and (max-width: 768px) {
    &:second-child {
      width: 60%;
    }
  }
`

const ParagraphFullLength = styled.p`
font-size: 1.2rem;
text-transform: uppercase;
line-height: 1.3;
flex-shrink: 0;
padding-right: 1rem;
width: 100%;

@media screen and (min-width: 750px) {
  width: 100%;
}
`

const ContactDiv = styled.div``

const ContactBG = styled.section`
  background-color: #171717;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 111;
  position: relative;
`

const ContactFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
`

const SocialLinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;

  @media (min-width: 1280px) {
    padding-top: 30px;
  }

  @media (min-width: 1024px) {
    padding-top: 33px;
  }

  @media (min-width: 768px) {
    padding-top: 24px;
  }
`

const SocialLink = styled.a`
  font-size: 16px;
  line-height: 20px;
  padding: 5px;
  color: #fff;
  cursor: pointer;
`

const SocialLink1 = styled.a`
  font-size: 16px;
  line-height: 20px;
  padding: 5px;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
`

const SocialLinkBookCall = styled.a`
  font-size: 18px;
  text-decoration: underline;
  line-height: 22px;
  padding: 5px;
  color: #fff;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: none;
  }
`

const SocialLinkH2 = styled.h2`
  letter-spacing: -2px;
  font-size: 56px;
  line-height: 56px;
  text-align: center;
  color: #fff;
  max-width: 896px;
  margin: 0 auto;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }
`

const SocialLinkH2Link = styled.a`
  color: #fff;
`

const Bop = () => {
  const copy = new Date().getFullYear();

  useEffect(() => {
    document.title = `Bop — Apparel`;
  });

  return (
    <>
      <SiteHeader>
        <FullContainer>
          <LinkLogo href='/'>Rex Odemheina</LinkLogo>
          <SiteHeaderMenu>
            <MenuContainer>
              <MenuList>
                <MenuLi>
                  <Link href="#about">About</Link>
                </MenuLi>
                <MenuLi>
                  <Link href="#projects">Projects</Link>
                </MenuLi>
                <MenuLi>
                  <Link href="#contact">Contact</Link>
                </MenuLi>
              </MenuList>
            </MenuContainer>
          </SiteHeaderMenu>
          <SiteHeaderIcon>.</SiteHeaderIcon>
        </FullContainer>
      </SiteHeader>
      <Main>
        <CaseHero>
          <CaseHeroContent>
            <CaseHeroText>
              <CaseHeroH2>
                BOP - APPAREL
              </CaseHeroH2>
              <CaseHeroParagraph>
                A 100% biodegradable eCommerce site using natural materials, clean motion, and a revamped brand design.
              </CaseHeroParagraph>
              <CaseHeroUrl>
                <CaseHeroLink>
                  <CaseHeroLinkSpanLink href="https://github.com/rexjoseph/hmclient" target="_blank">VISIT</CaseHeroLinkSpanLink>
                </CaseHeroLink>
              </CaseHeroUrl>
            </CaseHeroText>
            <CaseHeroAsset>
              <CaseHeroAssetCrop>
                <CaseHeroImage src="https://cdn.media.amplience.net/i/SweatyBetty/Slot-5-Banner_Parachute_Dsk?fmt=auto&qlt=60" />
              </CaseHeroAssetCrop>
            </CaseHeroAsset>
          </CaseHeroContent>
        </CaseHero>
        <CaseTable>
          <CaseTableContent>
            <CaseTableTitle>An innovative apparel brand bucking industry trends with sustainable practices</CaseTableTitle>
            <TableContent>
              <TableRow>
                <Paragraph>Client</Paragraph>
                <Paragraph>bop apparel</Paragraph>
              </TableRow>
              <TableRow>
                <Paragraph>Year</Paragraph>
                <Paragraph>2022</Paragraph>
              </TableRow>
              <TableRow>
                <Paragraph>Role</Paragraph>
                <Paragraph>STRATEGY, DESIGN, DEVELOPMENT</Paragraph>
              </TableRow>
              <TableRow>
                <Paragraph>Ask</Paragraph>
                <Paragraph>bop approached me to help bring their carefully crafted sustainable brand experience online.</Paragraph>
              </TableRow>
              <TableRow>
                <Paragraph>Solution</Paragraph>
                <Paragraph>The bop website design pays tribute to the clean creation put into this brand and their products. The modern aesthetic allows the brand, and products to speak to a broad audience. Visitors quickly realize this isn’t just another green-washed, tired, stuffy apparel brand. The design and merchandising system is set up to update brand ambassadors and content on a real-time regular basis, drawing users back regularly to see what new product has been dreamt up.</Paragraph>
              </TableRow>
              <TableRow>
                <ParagraphFullLength>
                  Though the technical side is complex, it is almost as elegant. While utilizing a React.js, Express, and Node.js build as a starting point, I needed to lean on Authorize.net for checkout, and are using MongoDB to power database operations. These two key integrations are seamless to the user, making for one unified brand experience across the entire site.
                </ParagraphFullLength>
              </TableRow>
            </TableContent>
          </CaseTableContent>
        </CaseTable>
        <ContactDiv id="contact">
          <ContactBG>
            <FullContainerDefault style={{translate: "none", rotate: "none", scale: "none", transform: `translate(0%, -2%) translate3d(0px, 0px, 0px)`}}>
              <ContactFlex>
                <SocialLinkRow>
                  <>
                    <SocialLink href="https://www.linkedin.com/in/rex-odemheina-012413163/" target="_blank">LinkedIn</SocialLink>
                  </>
                  <>
                    <SocialLink href="mailto:devloperrex@gmail.com" target="_blank">Email</SocialLink>
                  </>
                  <>
                    <SocialLink href="https://github.com/rexjoseph" target="_blank">GitHub</SocialLink>
                  </>
                </SocialLinkRow>
                <>
                  <SocialLinkH2>
                    <SocialLinkH2Link>Let's talk about your project</SocialLinkH2Link>
                  </SocialLinkH2>
                  <SocialLinkBookCall href="https://calendly.com/devloperrex/project-discovery" target="_blank">Book a call</SocialLinkBookCall>
                </>
                <SocialLinkRow>
                  <>
                    <SocialLink href="https://twitter.com/jvorex_" target="_blank">Twitter</SocialLink>
                  </>
                  <>
                    <SocialLink1>&copy; {copy}</SocialLink1>
                  </>
                  <>
                    <SocialLink href="https://instagram.com/jvorex_" target="_blank">Instagram</SocialLink>
                  </>
                </SocialLinkRow>
              </ContactFlex>
            </FullContainerDefault>
          </ContactBG>
        </ContactDiv>
      </Main>
    </>
  );
};

export default Bop;
