import { Navigate, Route, Routes } from "react-router";
import SiteLayout from "../components/SiteLayout";
import EducationPage from "../pages/EducationPage";
import ExploringTheCityPage from "../pages/ExploringTheCityPage";
import HobbiesPage from "../pages/HobbiesPage";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import ResumePage from "../pages/ResumePage";
import WorkExperiencePage from "../pages/WorkExperiencePage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="work-experience" element={<WorkExperiencePage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="hobbies" element={<HobbiesPage />} />
        <Route path="exploring-the-city" element={<ExploringTheCityPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
