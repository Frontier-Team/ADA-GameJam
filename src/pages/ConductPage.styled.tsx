import styled from '@emotion/styled';

export const Content = styled.div`
  line-height: 1.6;
  max-width: 1000px;
  margin: auto;
  padding: 2.5rem;
`;

export const Section = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
    margin-bottom: 5rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

export const SubTitle = styled.h2`
  margin-top: 1.3rem;
  margin-bottom: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

export const ConductParagraph = styled.p`
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

export const BottomParagraph = styled(ConductParagraph)`
  margin: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const Highlight = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lavenderPurple};
`;

export const ValueCard = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey}; 
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;


  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.08);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
  }
`;

export const Icon = styled.div`
  font-size: 2.5rem;
  margin-right: 1.5rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.lavenderPurple};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 3rem;
  }
`;
