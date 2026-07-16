import MainLayout from "../layouts/MainLayout";

import Header from "../components/Header/Header";
import OrbitBar from "../components/OrbitBar/OrbitBar";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import ContinueCards from "../components/ContinueCards/ContinueCards";
import PinnedTopics from "../components/PinnedTopics/PinnedTopics";
import RevisionDue from "../components/RevisionDue/RevisionDue";
import RecentNotes from "../components/RecentNotes/RecentNotes";
import CaptureDock from "../components/CaptureDock/CaptureDock";

function DashboardPage() {
  return (
    <MainLayout>
      <Header />
      <OrbitBar />
      <WelcomeSection />
      <ContinueCards />
      <PinnedTopics />
      <RevisionDue />
      <RecentNotes />
      <CaptureDock />
    </MainLayout>
  );
}

export default DashboardPage;