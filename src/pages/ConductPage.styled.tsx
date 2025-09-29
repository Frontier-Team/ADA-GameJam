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
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  font-weight: bold;
`;

export const Highlight = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lilacShade};
`;
