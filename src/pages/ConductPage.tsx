import { Heading, Paragraph } from '../styles/sharedStyles';
import {
  Content,
  Highlight,
  Section,
  SubTitle,
  ValueCard,
  Icon,
  ConductParagraph,
  BottomParagraph,
} from './ConductPage.styled';
import { FaUsers, FaRecycle, FaHandshake, FaRocket, FaHeart } from 'react-icons/fa';

export const ConductPage: React.FC = () => {
  return (
    <Content>
      <Section>
        <Heading>Code of Conduct</Heading>

        <Paragraph>
          We aim to provide a friendly and supportive environment for all 
          attendees. Please follow this Code of Conduct to ensure everyone 
          gets the most from the day.
        </Paragraph>

        <SubTitle>Please follow the Lloyds Banking Group values</SubTitle>

        <ValueCard>
          <Icon aria-label='people icon'><FaUsers/></Icon>
          <ConductParagraph>
            <Highlight>Inclusive</Highlight> Be inclusive in your actions and language. 
            Help us make the event something for everyone to benefit from
          </ConductParagraph>
        </ValueCard>

        <ValueCard>
          <Icon aria-label='reduce, reuse, recycle icon'><FaRecycle /></Icon>
          <ConductParagraph>
            <Highlight>Sustainable</Highlight> 
            Don't throw away reusable giveaway items - if you don't need or want it,
            don't accept it.
          </ConductParagraph>
        </ValueCard>

        <ValueCard>
          <Icon aria-label='handshake icon'><FaHandshake /></Icon>
          <ConductParagraph>
            <Highlight>Trust</Highlight>  
            Assume people are working in our best interests and trust them in their 
            endeavours.
          </ConductParagraph>
        </ValueCard>

        <ValueCard>
          <Icon aria-label='rocket icon'><FaRocket /></Icon>
          <ConductParagraph>
            <Highlight>Bold</Highlight> 
            Be prepared to meet new people, learn new things and experiment with technology.
          </ConductParagraph>
        </ValueCard>

        <ValueCard>
          <Icon aria-label='heart icon'><FaHeart /></Icon>
          <ConductParagraph>
            <Highlight>People First</Highlight> 
            Treat each other with respect and go the extra mile to support each other.
          </ConductParagraph>
        </ValueCard>
      </Section>

      <Section>
        <BottomParagraph>
          If you see or experience inappropriate behaviour, ask respectfully 
          for it to stop or speak to one of the organisers.
        </BottomParagraph>
      </Section>
    </Content>
  );
};
