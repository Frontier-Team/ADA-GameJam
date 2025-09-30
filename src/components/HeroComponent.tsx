import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import logoOptimized from "../assets/ELT.gif";

export default function HeroComponent() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const arrowRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const img = new Image();
    img.src = logoOptimized;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  // hide arrow after scrolling past it
  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setShowArrow(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      if (arrowRef.current) {
        observer.observe(arrowRef.current);
      }

      return () => {
        if (arrowRef.current) {
          observer.unobserve(arrowRef.current);
        }
      };
    } else {
      // Fallback for environments without IntersectionObserver
      const handleScroll = () => {
        if (arrowRef.current) {
          const rect = arrowRef.current.getBoundingClientRect();
          setShowArrow(rect.top >= 0 && rect.bottom <= window.innerHeight);
        }
      };

      if (typeof window !== "undefined") {
        (window as Window).addEventListener("scroll", handleScroll);
        return () =>
          (window as Window).removeEventListener("scroll", handleScroll);
      }
    }
  }, []);

  return (
    <Wrapper>
      <Content>
        <LeftColumn>
          <Title>
            <span className="welcome">Welcome to Game Jam</span>
            <span className="game-jam-dundee">
              powered by ada.scot and Lloyds Banking Group
            </span>
          </Title>
          <Subtitle>

          </Subtitle>
        </LeftColumn>
        <RightColumn>
          <GifImage
            src={logoOptimized}
            alt="Game Jam Animation"
            className={isImageLoaded ? "loaded" : ""}
          />
        </RightColumn>
      </Content>
      {showArrow && <ScrollDownArrow ref={arrowRef}>↓</ScrollDownArrow>}
    </Wrapper>
  );
}

const slideDownWithFade = keyframes`
  from {
    transform: translateY(-40%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lilac};
  padding: 0 2rem;
  min-height: 600px;
  max-width: 1300px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 36px 0px,
    rgba(0, 128, 128, 0.2) 0px 0px 0px 1px;
  position: relative;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;

  @media (max-width: 1300px) {
    margin-top: 0;
    padding: 0;
    border-radius: 0;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
    padding-bottom: 50px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 1rem;
  animation: ${slideDownWithFade} 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s;
  animation-fill-mode: backwards;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margomn-bottom: 0;
  }

  .welcome {
    display: block;
      color: ${({ theme }) => theme.colors.turquoise};
  }

  .game-jam-dundee {
    display: block;
    
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .welcome {
      display: block;
    }

    .game-jam-dundee {
      display: block;
      margin-top: 0.5rem;
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.turquoise};
  animation: ${slideDownWithFade} 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.8s;
  animation-fill-mode: backwards;
`;

const GifImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 900px;
  animation: ${scaleIn} 2s cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-fill-mode: backwards;
  animation-play-state: paused;
  &.loaded {
    animation-play-state: running;
  }
  transition: transform 0.3s ease-in-out;

`;

const ScrollDownArrow = styled.div`
  position: absolute;
  bottom: 50px; 
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.turquoise};
  animation: ${bounce} 1s infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
