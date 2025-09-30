import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { FaChartLine, FaCode, FaFolderOpen, FaGamepad, FaPalette, FaPiggyBank, FaToolbox } from "react-icons/fa";
import Accordion from "../components/Accordion";
import data from "../db.json";
import { Heading, pageContainerStyles, Paragraph, StyledCard } from "../styles/sharedStyles";

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter: SetStateAction<string>) => {
    setActiveFilter(filter);
  };

  const filteredTutorials = data.tutorials.filter((tutorial) => {
    if (activeFilter === "all") return true;
    return tutorial.type === activeFilter;
  });

  const resourceTypes = Array.from(
    new Set(data.resources.map((resource) => resource.type))
  );

  const typeIconMap: Record<string, JSX.Element> = {
    "Games tools": <FaGamepad />,
    "Design tools": <FaPalette />,
    "IDE's": <FaCode />,
    "Additional tools": <FaToolbox />,
  };

  return (
    <PageContainer>
      <Wrapper>
        <Heading>Resources</Heading>

        <Section>
          <SubTitle>Here are some tools you may wish to consider using</SubTitle>

          <ResourcesWrapper>
            {resourceTypes.map((type) => (
              <ResourceWrapper key={type}>
                <TypeHeader>
                  <TypeIcon aria-label={`${type} icon`}>
                    {typeIconMap[type] ?? <FaFolderOpen />}
                  </TypeIcon>
                  <CardTitle>{type}</CardTitle>
                </TypeHeader>
                <ResourceContainer>
                  {data.resources
                    .filter((resource) => resource.type === type)
                    .map((resource, index) => (
                      <Resource key={index}>
                        <ResourceTitle
                          href={resource.link}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {resource.title}
                        </ResourceTitle>
                        <ResourceDescription>
                          {resource.description}
                        </ResourceDescription>
                      </Resource>
                    ))}
                </ResourceContainer>
              </ResourceWrapper>
            ))}
          </ResourcesWrapper>
        </Section>

        <Section>
          <TemplateSection>
            <SubTitle>Template Repo</SubTitle>
            <Paragraph>
              We have put together a{" "}
              <strong>template Github repo </strong>
              for a Unity project to help you get started!{" "}
            </Paragraph>

            <TemplateRepoButton
              href='https://github.com/ross-kirk/gamejam-template'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Template Repo
            </TemplateRepoButton>
          </TemplateSection>
        </Section>

        <Section>
          <SubTitle>The Gender Gap</SubTitle>
          <ResourcesWrapper>
            <ResourceWrapper>
              <TypeHeader>
                <TypeIcon aria-label='Pensions icon'>
                  <FaPiggyBank />
                </TypeIcon>
                <CardTitle>Pensions</CardTitle>
              </TypeHeader>
              <ResourceContainer>
                {data.genderGap?.pensions?.map((item, idx) => (
                  <Resource key={idx}>
                    <ResourceTitle href={item.link} target='_blank' rel='noopener noreferrer'>
                      {item.title}
                    </ResourceTitle>
                  </Resource>
                ))}
              </ResourceContainer>
            </ResourceWrapper>
            <ResourceWrapper>
              <TypeHeader>
                <TypeIcon aria-label='Investing icon'>
                  <FaChartLine />
                </TypeIcon>
                <CardTitle>Investing</CardTitle>
              </TypeHeader>
              <ResourceContainer>
                {data.genderGap?.investing?.map((item, idx) => (
                  <Resource key={idx}>
                    <ResourceTitle href={item.link} target='_blank' rel='noopener noreferrer'>
                      {item.title}
                    </ResourceTitle>
                  </Resource>
                ))}
              </ResourceContainer>
            </ResourceWrapper>
          </ResourcesWrapper>
        </Section>

        <Section>
          <SubTitle>Investments & Pensions</SubTitle>
          <Paragraph>
            Here are some useful links and resources to help you learn more about pensions and investments.
          </Paragraph>
          <TopicsGrid>
            {data.topics.map((topic) => (
              <Accordion key={topic.id} title={topic.title}>
                <LinksList>
                  {topic.links.map((link, linkIndex) => (
                    <LinkItem key={linkIndex}>
                      <a
                        href={link.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {link.title}
                      </a>
                    </LinkItem>
                  ))}
                </LinksList>
              </Accordion>
            ))}
          </TopicsGrid>
        </Section>

        <Section>
          <SubTitle>Scottish Widows Be Money Well Hub</SubTitle>
          <Paragraph>
            There's lots of educational content on the{" "}
            <Link
              href='https://www.scottishwidowsbemoneywell.co.uk/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Scottish Widows Be Money Well Hub
            </Link>
            .
          </Paragraph>
        </Section>

        <Section>
          <SubTitle>Links to Tutorials</SubTitle>
          <FilterButtons>
            <FilterButton
              active={activeFilter === "all"}
              onClick={() => handleFilterChange("all")}
            >
              All
            </FilterButton>
            <FilterButton
              active={activeFilter === "react"}
              onClick={() => handleFilterChange("react")}
            >
              React
            </FilterButton>
            <FilterButton
              active={activeFilter === "javascript"}
              onClick={() => handleFilterChange("javascript")}
            >
              JavaScript
            </FilterButton>
          </FilterButtons>
          <Paragraph>
            Use the following tutorials to learn how to make a simple game.
          </Paragraph>
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id}>
              <TutorialTitle
                href={tutorial.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {tutorial.title}
              </TutorialTitle>
            </TutorialCard>
          ))}
        </Section>
      </Wrapper>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  ${() => pageContainerStyles()}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  margin: auto;
`;

export const TemplateSection = styled.div`
  padding: 2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.teal};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;
  max-width: 500px;
  margin: auto;

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: white;
    margin-bottom: 1.5rem;
  }
`;

export const TemplateRepoButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.lilacShade};
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lavenderPurple};
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const ResourcesWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TypeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const TypeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.teal};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const ResourceWrapper = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: stretch;
`;

const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`;

const Resource = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0.25rem 0;
  padding-right: 0;

  &:not(:first-of-type) {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding-top: 0.75rem;
  }
`;

const ResourceTitle = styled.a`
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.teal};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.lavenderPurple};
    text-decoration: underline;
    cursor: pointer;
  }
`;
const TutorialTitle = styled.a`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.teal};
  text-decoration: none;

  &:hover {

    cursor: pointer;
      color: ${({ theme }) => theme.colors.lavenderPurple};
  }
`;

const ResourceDescription = styled.p`
  font-size: 1.1rem;
  margin: 0;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.lilac : theme.colors.teal};
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lilac};
  }
`;

const TopicsGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin: auto;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;

  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.lavenderPurple};
      text-decoration: underline;
    }
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.teal};
  text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.lavenderPurple};
      text-decoration: underline;
    }
`;

const TutorialCard = styled(StyledCard)`
  margin-bottom: 1rem;
`;

const Section = styled.div`
  padding: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
    margin-bottom: 5rem;
  }
`;

const SubTitle = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.3rem;
    overflow: hidden;
  }
`;

