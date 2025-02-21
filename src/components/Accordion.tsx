import styled from "@emotion/styled";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { StyledCard } from "../styles/sharedStyles";

const AccordionSection = styled(StyledCard)`
  margin-bottom: 1rem;
  overflow: hidden;
`;

const AccordionTitle = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Pixelify Sans", sans-serif;
  background: ${({ theme }) => theme.colors.grey};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  transition: background 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.lilac};

    svg {
      color: ${({ theme }) => theme.colors.lilac};
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    flex-shrink: 0;
    opacity: 0.5;
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0 1rem")};
  background: ${({ theme }) => theme.colors.grey};
`;

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionSection>
      <AccordionTitle
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
        id={`accordion-title-${title}`}
      >
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </AccordionTitle>
      <AccordionContent
        isOpen={isOpen}
        id={`accordion-content-${title}`}
        aria-labelledby={`accordion-title-${title}`}
      >
        {children}
      </AccordionContent>
    </AccordionSection>
  );
};

export default Accordion;
