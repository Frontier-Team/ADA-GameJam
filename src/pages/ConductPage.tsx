import { FaHandshake, FaHeart, FaRecycle, FaRocket, FaUsers } from 'react-icons/fa';
import { Heading, Paragraph } from '../styles/sharedStyles';
import {
  BottomParagraph,
  ConductParagraph,
  Content,
  Icon,
  Section,
  SubTitle,
  ValueCard,
} from './ConductPage.styled';

export const ConductPage: React.FC = () => {
  return (
    <Content>
      <Section>
        <Heading>Code of Conduct</Heading>

        <ConductParagraph>
          We aim to provide a friendly and supportive environment for all
          attendees. Please follow this Code of Conduct to ensure everyone
          gets the most from the day.
        </ConductParagraph>

        <SubTitle>Please follow the Lloyds Banking Group values</SubTitle>

        <ValueCard>
          <Icon aria-label='people icon'><FaUsers /></Icon>
          <div>
            <h2>Inclusive</h2>
            <Paragraph>
              Be inclusive in your actions and language. Help us make the event something for everyone to benefit from
            </Paragraph>
          </div>
        </ValueCard>

        <ValueCard>
          <Icon aria-label='reduce, reuse, recycle icon'><FaRecycle /></Icon>
          <div>
            <h2>Sustainable</h2>
            <Paragraph>
              Don't throw away reusable giveaway items - if you don't need or want it, don't accept it.
            </Paragraph>
          </div>
        </ValueCard>

        <ValueCard>
          <Icon aria-label='handshake icon'><FaHandshake /></Icon>
          <div>
            <h2>Trust</h2>
            <Paragraph>
              Assume people are working in our best interests and trust them in their endeavours.
            </Paragraph>
          </div>
        </ValueCard>

        <ValueCard>
          <Icon aria-label='rocket icon'><FaRocket /></Icon>
          <div>
            <h2>Bold</h2>
            <Paragraph>
              Be prepared to meet new people, learn new things and experiment with technology.
            </Paragraph>
          </div>
        </ValueCard>

        <ValueCard>
          <Icon aria-label='heart icon'><FaHeart /></Icon>
          <div>
            <h2>People First</h2>
            <Paragraph>
              Treat each other with respect and go the extra mile to support each other.
            </Paragraph>
          </div>
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
