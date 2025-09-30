import styled from "@emotion/styled";

export const PrizesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const JudgingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: -0.5rem;
  margin-bottom: 2rem;
`;
