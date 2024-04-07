import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import Sidebar from "./Scenes/global/Sidebar";
import Dashboard from "./Scenes/dashboard";
import Team from "./Scenes/team";
import Invoices from "./Scenes/invoices";
import Contacts from "./Scenes/contacts";
import Bar from "./Scenes/bar";
import Form from "./Scenes/form";
import Line from "./Scenes/line";
import Pie from "./Scenes/pie";
import Geography from "./Scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./Scenes/calendar";
import Analysis from "./Scenes/analysis/index";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} /> 
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/analysis" element={<Analysis/>} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;