import { useState } from "react";
import { Table } from "../components/Table";
import { PageContainer, CenteredParagraph, Heading } from "../styles/sharedStyles";
import { DayButton, DayButtonText, DayButtonWrapper } from "./TalkAgendaPage.styled";

type AgendaSlot = {
  start: string;
  end?: string;
  title: string;
  speaker: string;
};

type AgendaDay = {
  date: string;
  slots: AgendaSlot[];
};

const agenda: Record<string, AgendaDay> = {
  Thursday: {
    date: "Oct 2, 2025",
    slots: [
      { start: "10:00", end: "10:30", title: "Arrival, Registration, Refreshments", speaker: "All Attendees" },
      { start: "10:30", end: "10:45", title: "Introduce ADA Festival & LBG", speaker: "Matt Barr and Derek Shanks" },
      { start: "10:45", end: "11:15", title: "Game Jam Briefing", speaker: "Rose Ulldemolins & Amy Rodgers" },
      { start: "11:15", end: "12:30", title: "Let the Games Begin!", speaker: "Participants" },
      { start: "12:30", end: "13:15", title: "Lunch & Networking", speaker: "All Attendees" },
      { start: "13:15", end: "14:00", title: "Games Continue", speaker: "Participants" },
      { start: "14:00", end: "14:15", title: "Break & Networking", speaker: "All Attendees" },
      { start: "14:15", end: "16:30", title: "Games Continue", speaker: "Participants" },
      { start: "16:30", end: "16:35", title: "Day Ends", speaker: "Rose Ulldemolins" },
    ],
  },
  Friday: {
    date: "Oct 3, 2025",
    slots: [
      { start: "09:30", end: "12:00", title: "Arrival, Refreshments, Games Continue", speaker: "All Attendees" },
      { start: "12:00", end: "12:30", title: "Lunch & Networking", speaker: "All Attendees" },
      { start: "12:30", end: "13:00", title: "Presenting back to Coaches", speaker: "Participants" },
      { start: "13:00", end: "13:15", title: "Coaches Deliberate", speaker: "Coaches" },
      { start: "13:15", end: "14:00", title: "Shortlist Announced & Preparing Pitches", speaker: "Shortlisted Jammers" },
      { start: "14:00", end: "14:45", title: "Break & Networking", speaker: "All Other Attendees" },
      { start: "14:45", end: "15:15", title: "Pitches to Judges", speaker: "Participants" },
      { start: "15:15", end: "15:45", title: "Judges Deliberate", speaker: "Judges" },
      { start: "15:45", end: "16:00", title: "Winners Announced & Close", speaker: "Judges" },
      { start: "16:00", title: "Optional Networking", speaker: "—" },
    ],
  },
};

export const TalkAgendaPage = () => {
  const [activeDay, setActiveDay] = useState<keyof typeof agenda>("Thursday");

  const headers = ["Time", "Title", "Speaker"];
  const rows = agenda[activeDay].slots.map((slot) => ({
    time: slot.end ? `${slot.start} - ${slot.end}` : slot.start,
    title: slot.title,
    speaker: slot.speaker,
  }));

  return (
    <PageContainer>
      <Heading>Agenda</Heading>
      <CenteredParagraph>
        The ADA Festival Game Jam runs across two days. Use the tabs 
        below to view the schedule for each day and plan your arrival, 
        lunch breaks and final pitches.
      </CenteredParagraph>

      <DayButtonWrapper>
        {Object.entries(agenda).map(([day, { date }]) => (
          <DayButton
            key={day}
            active={activeDay === day}
            onClick={() => setActiveDay(day as keyof typeof agenda)}
          >
            <DayButtonText>{day} • {date}</DayButtonText>
          </DayButton>
        ))}
      </DayButtonWrapper>

      <Table
        heading=""
        headers={headers}
        rows={rows}
        fieldsToDisplay={["time", "title", "speaker"]}
      />
    </PageContainer>
  );
};
