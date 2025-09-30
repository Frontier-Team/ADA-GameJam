import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import { Paragraph } from "../styles/sharedStyles";

export const HomePage: React.FC = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const closePopover = () => setMapOpen(false);
  const togglePopover = () => setMapOpen((o) => !o);


  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMapOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (!mapOpen) return;
      const target = e.target as Node;
      if (
        popoverRef.current &&
        !popoverRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setMapOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [mapOpen]);


  useEffect(() => {
    if (mapOpen) {

      const closeBtn = popoverRef.current?.querySelector<HTMLButtonElement>(
        "button[data-close]"
      );
      closeBtn?.focus();
    } else {

      triggerRef.current?.focus();
    }
  }, [mapOpen]);
  return (
    <Wrapper>
      <HeroComponent />
      <Content>
        <ContentBody>
          <Section>
            <Subtitle>
              We are thrilled to welcome all participants to the Game Jam event!
            </Subtitle>
          </Section>
          <Section>
            <Subtitle>What you can expect of the day?</Subtitle>
            <Paragraph>

            </Paragraph>
            <Paragraph>
              A Game Jam is a fast-paced, creative sprint where developers, designers, and innovators come together to prototype bold new ideas in game design. It’s a chance to experiment with fresh mechanics, art styles, and concept all with the added fun of time pressure.
            </Paragraph>
            <Paragraph>
              You will join Seventy-two brilliant women and non-binary students to form teams of up to six to take on a real-world business challenge.
              Your team will have just 48 hours to brainstorm, design, build and pitch a playable game prototype from scratch.
            </Paragraph>
            <Paragraph>
              There will be volunteers and mentors available throughout the event to provide guidance and support.
            </Paragraph>


          </Section>
          <Section>
            <Subtitle>Getting here</Subtitle>
            <Paragraph>
              <MapHover>
                <MapToggleButton
                  ref={triggerRef}
                  id="map-toggle"
                  aria-controls="map-popover"
                  aria-expanded={mapOpen}
                  aria-haspopup="dialog"
                  onClick={togglePopover}
                  title="Show map"
                >
                  <strong>CodeBase Edinburgh</strong>
                </MapToggleButton>
                <MapPopover
                  ref={popoverRef}
                  role="dialog"
                  id="map-popover"
                  aria-label="Map to CodeBase Edinburgh"
                  aria-labelledby="map-toggle"
                  data-open={mapOpen}
                >
                  <PopoverHeader>
                    <span>CodeBase Edinburgh</span>
                    <CloseButton
                      type="button"
                      data-close
                      aria-label="Close map"
                      onClick={closePopover}
                    >
                      ×
                    </CloseButton>
                  </PopoverHeader>
                  <MapFrame
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.472922960234!2d-3.2010466480452937!3d55.947219646571654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c7991a24de13%3A0x5727e05b4321b9f6!2sCodeBase!5e0!3m2!1sen!2suk!4v1759229636062!5m2!1sen!2suk"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google map showing CodeBase Edinburgh"
                  />
                </MapPopover>
              </MapHover>{" "}
              37a Castle Terrace,
              Edinburgh,
              EH1 2EL
            </Paragraph>
          </Section>

          <Section>
            <Subtitle>CodeBase wifi</Subtitle>
            <Paragraph>
              Please connect to the Wi-Fi network using the credentials below.
              <br></br>
              <strong>Network Name: </strong>Visitor-Codebase
              <br></br>
              <strong>Password: </strong>castleterrace
            </Paragraph>
          </Section>
        </ContentBody>
        <Footer>
          <FooterContent>
            <Paragraph>
              If you need to make any adjustments or have any specific requests,
              please contact us at:{" "}
              <a href="mailto:IPIEvents@lloydsbanking.com">
                IPIEvents@lloydsbanking.com
              </a>
            </Paragraph>
          </FooterContent>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 1300px) {
    margin-top: 0;
    padding: 0;

  }

  p {
    line-height: 1.8;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 0;
  text-align: left;
  margin: 2rem auto 0;
  width: 100%;
  box-sizing: border-box;
`;

const ContentBody = styled.div`
  padding: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-inline: clamp(1rem, 6vw, 1.5rem);
  }
`;

const Section = styled.div``;

const Subtitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const MapPopover = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-0.25rem);
  transition: opacity 150ms ease, transform 150ms ease, visibility 150ms ease;

  &[data-open='true'] {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    position: fixed;
    top: 1rem;
    left: 10%;
    transform: translate(-50%, 0);

    max-width: none;
  }
`;

const MapHover = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;

  strong {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 2px;
  }
`;

const MapToggleButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
    border-radius: 0.25rem;
  }
`;

const PopoverHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.25rem 0.25rem 0.5rem 0.25rem;
  color: #333;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.teal};
    outline-offset: 2px;
  }
`;

const MapFrame = styled.iframe`
  width: 400px;
  height: 300px;
  max-width: 80vw;
  border: 0;
  border-radius: 8px;

  @media (max-width: 480px) {
    width: 100%;
    height: 260px;
  }
`;

export const Footer = styled.div`
  display: flex;
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.teal};
  border-radius: 10px;
  margin-top: 1rem;
`;

export const FooterContent = styled.div`
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;
