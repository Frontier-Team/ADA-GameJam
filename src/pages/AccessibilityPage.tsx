import { FaDog, FaParking, FaToiletPaper, FaTree, FaWheelchair } from 'react-icons/fa';
import { Heading, PageContainer, Paragraph } from '../styles/sharedStyles';
import { ConductParagraph, Icon, ValueCard } from './ConductPage.styled';

export const AccessibilityPage = () => {
  return (
    <PageContainer>
      <Heading>
        Accessibility
      </Heading>

      <ConductParagraph>Our aim is to make our event welcoming and accessible for all. We will have members of the team available to assist you on the day.</ConductParagraph>

      {[
        {
          title: 'Parking',
          description:
            'CodeBase does not have a dedicated parking area. There is on-street pay and display parking. There is also the NCP car park on Castle Terrace.',
          icon: <FaParking />,
          aria: 'parking icon',
        },
        {
          title: 'Assistance dogs',
          description:
            'You are welcome to bring guide dogs and other recognised assistance dogs into the venue.',
          icon: <FaDog />,
          aria: 'assistance dogs icon',
        },
        {
          title: 'Access',
          description:
            'Our event will be in the events space on the ground floor. Throughout the building the corridors are wide and it is easy to pass people and other wheelchair users.',
          icon: <FaWheelchair />,
          aria: 'wheelchair access icon',
        },
        {
          title: 'Toilets',
          description:
            'Accessible toilets are available on the ground floor, opposite the event space.',
          icon: <FaToiletPaper />,
          aria: 'toilets icon',
        },
        {
          title: 'Outdoor space',
          description:
            'Whilst the building does not have a dedicated outdoor space, there are several benches next to the building with views of the castle.',
          icon: <FaTree />,
          aria: 'outdoor space icon',
        },
      ].map((item) => (
        <ValueCard key={item.title}>
          <Icon aria-label={item.aria}>{item.icon}</Icon>
          <div>
            <h2>{item.title}</h2>
            <Paragraph>{item.description}</Paragraph>
          </div>
        </ValueCard>
      ))}

    </PageContainer>



  );
};
