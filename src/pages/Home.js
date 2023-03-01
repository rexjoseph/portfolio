import React, { useEffect } from 'react'
import styled from 'styled-components'
import Bop from "../images/bop-min-scaled-1.jpg"

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

const FullContainer1 = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 0;
  padding-top: 96px;

  @media (min-width: 1280px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 0px;
    padding-top: 164px;
  }

  @media (min-widt: 1024px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 0px;
    padding-top: 148px;
  }

  @media (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 0px;
    padding-top: 124px;
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

const HeadingTwo = styled.h2`
  font-size: 28px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: -1.119px;
  overflow: hidden;
  margin-bottom: 64px;

  @media (max-width: 1439px) {
    padding-right: 14px;
  }
  
  @media (min-width: 1280px) {
    font-size: calc(9px + 3.65vw);
    line-height: 1.1;
    margin-bottom: 120px;
  }

  @media (min-width: 1024px) {
    font-size: calc(9px + 3.65vw);
    line-height: 1.1;
    margin-bottom: 108px;
  }

  @media (min-width: 768px) {
    font-size: 55px;
    line-height: 1.1;
    margin-bottom: 96px;
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

const SectionGrid = styled.section`
`

const BlogList = styled.div`
  flex: 1 1 auto;
  width: 100%;
  position: relative;

  @media (min-width: 1280px) {
    &:nth-child(3n+2) {
      width: calc(70% - 28px);
    }
  }

  @media (min-width: 1024px) {
    &:nth-child(3n+2) {
      width: calc(70% - 26px);
    }
  }

  @media (min-width: 1024px) {
    &:last-of-type {
    width: 30%;
  }
`

const BlogRow1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;

  @media (min-width: 1280px) {
    &:nth-child(3n+2) {
      gap: 28px;
    }
  }

  @media (min-width: 1024px) {
    &:nth-child(3n+2) {
      gap: 26px;
    }
  }

  @media (min-width: 1280px) {
    &:nth-child(3n+3) {
      gap: 28px;
    }
  }

  @media (min-width: 1024px) {
    &:nth-child(3n+3) {
      gap: 26px;
    }
  }

  @media (min-width: 1024px) {
    &:nth-child(3n+3) ${BlogList} {
      width: 30%;
  }

  @media (min-width: 1280px) {
    &:nth-child(3n+3) ${BlogList}:last-of-type {
      width: calc(70% - 28px);
  }

  @media (min-width: 1280px) {
    &:nth-child(3n+3) ${BlogList}:last-of-type {
      width: calc(70% - 26px);
  }
`

const Hr = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #171717;
  border: 0;
  position: absolute;
  transform-origin: center;
  transition: transform 1s ease-in-out;
  margin: 0;
  padding: 0;
  color: #171717;
  overflow: visible;
  transform: scaleX(1);
`

const BloglistLink = styled.a`
  display: block;
  width: 100%;
  margin-bottom: 64px;

  @media (min-width: 1280px) {
    margin-bottom: 120px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 108px;
  }

  @media (min-width: 768px) {
    margin-bottom: 96px;
  }
`

const BlogListP = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  line-height: 16px;
  color: #171717;

  @media (min-width: 1280px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
    line-height: 20px;
  }
`

const BlogListP1 = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  line-height: 16px;
  color: #171717;

  @media (min-width: 1280px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 15px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const BlogListSpan = styled.span``

const BlogListImageDiv = styled.div`
  padding-top: 75%;
  position: relative;
  overflow: hidden;
  isolation: isolate;
`

const BlogListImage = styled.img`
  display: block;
  max-width: 100%;
  vertical-align: middle;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  transition: scale 1s ease;

  &:hover {
    transition: scale 1s ease;
    scale: 1.03 !important;
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

const BigHeadingDiv = styled.div`
  margin: 0 auto;
`

const BigHeading = styled.h1`
  font-size: 30vw;
  font-weight: 400;
  letter-spacing: -10px;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
`


const Home = () => {
  const copy = new Date().getFullYear();

  useEffect(() => {
    document.title = `Rex Odemheina — Software Engineer - TypeScript, Node.js, Next.js, React.js, AWS, GraphQL + AI`;
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
        <FullContainer1 id="about">
          <HeadingTwo>
            Hey! I am Rex, a Software Engineer with 2.5 years of experience creating experiences for startups, brands, charities, and agencies related to climate, fintech, eCommerce, and SaaS. I help businesses reach their goals by creating clean but catchy solutions that have a personality and deliver the best outcomes.
          </HeadingTwo>
        </FullContainer1>
        <FullContainerDefault>
          <BigHeadingDiv>
            <BigHeading>WORK</BigHeading>
          </BigHeadingDiv>
        </FullContainerDefault>
        <FullContainerDefault id="projects">
          <SectionGrid>
            <BlogRow1>
              <Hr></Hr>
              <BlogList>
                <BloglistLink href="/#/portfolio/bop">
                  <BlogListP>
                    <BlogListSpan>bop.</BlogListSpan>
                    <BlogListSpan>Apparel eCommerce</BlogListSpan>
                    <BlogListSpan>bop.</BlogListSpan>
                  </BlogListP>
                  <BlogListImageDiv>
                    <BlogListImage src={Bop} alt="Bop" />
                  </BlogListImageDiv>
                  <BlogListP1>
                    <BlogListSpan>bop.</BlogListSpan>
                    <BlogListSpan>Apparel eCommerce</BlogListSpan>
                    <BlogListSpan>bop.</BlogListSpan>
                  </BlogListP1>
                </BloglistLink>
              </BlogList>
            </BlogRow1>
          </SectionGrid>
        </FullContainerDefault>
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
  )
}

export default Home