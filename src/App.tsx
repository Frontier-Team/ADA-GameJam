import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { ConductPage } from "./pages/ConductPage";
import { HomePage } from "./pages/HomePage";
import { JammerPage } from "./pages/JammerPage";
import { AppThemeProvider } from "./providers/ThemeProvider";
import ResourcesPage from "./pages/ResourcesPage";
import { TalkAgendaPage } from "./pages/TalkAgendaPage";

export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/conduct" element={<ConductPage />} />
          <Route path="/schedule" element={<TalkAgendaPage />} />
          <Route path="/jammers" element={<JammerPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/conduct" element={<ConductPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />  
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};
