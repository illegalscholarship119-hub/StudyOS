import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import SubjectPage from "./pages/SubjectPage";
import TopicPage from "./pages/TopicPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/subject" element={<SubjectPage />} />
        <Route path="/topic" element={<TopicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;