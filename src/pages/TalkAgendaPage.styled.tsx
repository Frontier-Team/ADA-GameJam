import styled from '@emotion/styled';

export const DayButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const DayButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 999px;
  cursor: pointer;
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.teal : theme.colors.grey};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.teal};
  box-shadow: ${({ active }) =>
    active ? "0 6px 14px rgba(0,0,0,0.08)" : "0 4px 8px rgba(0,0,0,0.05)"};
  transition: all 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 8px 16px rgba(0,0,0,0.12);
  }
`;

export const DayButtonText = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

