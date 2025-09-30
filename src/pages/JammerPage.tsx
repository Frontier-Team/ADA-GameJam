import React from "react";
import Accordion from "../components/Accordion";
import db from "../db.json";
import {
  CenteredParagraph,
  Heading,
  PageContainer,
  Paragraph,
  StyledCard,
  SubHeading,
} from "../styles/sharedStyles";
import { JudgingContainer, PrizesContainer } from "./JammerPage.styled";
import { TemplateRepoButton, TemplateSection } from "./ResourcesPage";
import scoringPdf from '../assets/GameJamScoring.pdf';

export const JammerPage: React.FC = () => {
  const jammer = db.jammers[0];

  return (
    <PageContainer>
      <>
        <Heading>{jammer.welcome}</Heading>
        <CenteredParagraph>{jammer.welcomeDescription}</CenteredParagraph>

        <h2>{jammer.challengeTitle}</h2>
        <StyledCard>
          <CenteredParagraph>{jammer.challengeDescription}</CenteredParagraph>
        </StyledCard>

        <h2>{jammer.Pitches.title}</h2>
        <Paragraph>{jammer.Pitches.description}</Paragraph>
        <Paragraph>{jammer.Pitches.length}</Paragraph>
        <PrizesContainer>
          <StyledCard>
            <CenteredParagraph>{jammer.Pitches.coachTime}</CenteredParagraph>
          </StyledCard>
          <StyledCard>
            <CenteredParagraph>{jammer.Pitches.judgeTime}</CenteredParagraph>
          </StyledCard>
          <Paragraph>{jammer.Pitches.presentation}</Paragraph>
        </PrizesContainer>

        <h2>{jammer.judgingTitle}</h2>
        <Paragraph>{jammer.judgingDescription}</Paragraph>
        <JudgingContainer>
          {jammer.judgingCriteria.criteria.map((criteria, index) => (
            <Accordion key={index} title={criteria.title}>
              <CenteredParagraph>{criteria.description}</CenteredParagraph>
            </Accordion>
          ))}
        </JudgingContainer>
        <TemplateSection>
          <Paragraph>{jammer.judgingCriteria.criteriaDescription}</Paragraph>
          <TemplateRepoButton href={scoringPdf} target="_blank" rel="noopener noreferrer">
            Download Criteria
          </TemplateRepoButton>
        </TemplateSection>
      </>
      <>
        <h2>Winners</h2>
        <Paragraph>{jammer.Awards.description}</Paragraph>
        <PrizesContainer>
          {jammer.Awards.awards.map((award, index) => (
            <StyledCard key={index}>
              <SubHeading>
                {award.title.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </SubHeading>
              <CenteredParagraph style={{ marginBottom: "0" }}>
                {award.prizes.all}
              </CenteredParagraph>
            </StyledCard>
          ))}
        </PrizesContainer>
      </>
    </PageContainer>
  );
};
