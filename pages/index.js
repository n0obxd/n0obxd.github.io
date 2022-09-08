import Head from "next/head";
import { PROFILES } from "../constants/profiles";
import { WORK } from "../constants/work";
import {
  Container,
  Title,
  Header,
  Subtitle,
  Paragraph,
  SectionTitle,
  WorkSectionContainer,
  WorkTitle,
  WorkDescription,
  WorkExtra,
  ProfilesSectionContainer,
  ProfileItem,
} from "../styles/index";
import SocialSection from "../components/SocialSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Noob XD: Developer, Freelance, & Hacker</title>
      </Head>
      <Container>
        <Header>
          <img
            src="/rahul-avatar.png"
            alt="n0obxd headshot"
            width={180}
            height={180}
          />
          <Subtitle>Hey, I'm Noob XD</Subtitle>
          <Title>
            I am from <span className="accent-line">Bangladesh</span>{" "}
          </Title>
          <Paragraph>
            I'm an <strong>Open Source Contributor</strong>,{" "}
            <strong>Freelancer</strong>, <strong>Ethical hacker</strong> &{" "}
            <strong>Web Designer</strong>.
          </Paragraph>
        </Header>
        <SocialSection />
        <section id="work">
          <SectionTitle align="left">
            <span className="accent-line">Work</span>
          </SectionTitle>
          {WORK &&
            WORK.map((data) => {
              return (
                <WorkSectionContainer key={data.title + data.link}>
                  <WorkTitle>
                    <a href={data.link} target="_blank">
                      {data.title}
                    </a>
                    <span>
                      <img
                        src="/right-arrow.png"
                        width={18}
                        height={18}
                        alt="external-link"
                      />
                    </span>
                  </WorkTitle>
                  <WorkDescription>{data.description}</WorkDescription>
                  <WorkExtra>{data.extra}</WorkExtra>
                </WorkSectionContainer>
              );
            })}
        </section>
        <section id="profiles">
          <SectionTitle>
            <span className="accent-line">Online Presence</span>
          </SectionTitle>
          <ProfilesSectionContainer>
            {PROFILES &&
              PROFILES.map((profile) => {
                return (
                  <ProfileItem key={profile.title + profile.link}>
                    <a href={profile.link} target="_blank">
                      {profile.title}
                    </a>
                  </ProfileItem>
                );
              })}
          </ProfilesSectionContainer>
        </section>
      </Container>
    </>
  );
}
