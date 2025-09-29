import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { AuctionPage } from "./pages/AuctionPage";
import { ConductPage } from "./pages/ConductPage";
import { GamePage } from "./pages/GamePage";
import { HomePage } from "./pages/HomePage";
import { JammerPage } from "./pages/JammerPage";
import MapPage from "./pages/MapPage";
import { SchedulePage } from "./pages/SchedulePage";
import { TalkAgendaPage } from "./pages/TalkAgendaPage";
import { AppThemeProvider } from "./providers/ThemeProvider";
import ResourcesPage from "./pages/ResourcesPage";
import { ExpoPage } from "./pages/ExpoPage";

export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/conduct" element={<ConductPage />} /> 
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/speakers" element={<TalkAgendaPage />} />
          <Route path="/expo" element={<ExpoPage />} />
          <Route path="/auction" element={<AuctionPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/people-adventure" element={<GamePage />} />
          <Route path="/jammers" element={<JammerPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};
