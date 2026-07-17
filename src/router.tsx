import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import SubjectPage from "./pages/SubjectPage";
import TopicPage from "./pages/TopicPage";
import LessonPage from "./pages/LessonPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        <Route
          path="/subject/:subjectSlug"
          element={<SubjectPage />}
        />

        <Route
          path="/topic/:slug"
          element={<TopicPage />}
        />

        <Route
          path="/lesson/:slug"
          element={<LessonPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;