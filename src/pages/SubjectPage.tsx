import { useMemo } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header/Header";
import OrbitBar from "../components/OrbitBar/OrbitBar";
import TopicGrid from "../components/TopicGrid/TopicGrid";
import { topics } from "../data/topics";

function SubjectPage() {
  const { subjectSlug } = useParams();

  const subjectTopics = useMemo(() => {
    return topics.filter(
      (topic) => topic.subject.toLowerCase() === subjectSlug?.toLowerCase()
    );
  }, [subjectSlug]);

  const totalNotes = subjectTopics.reduce(
    (sum, topic) => sum + topic.notes,
    0
  );

  const subjectTitle =
    subjectSlug === "dsa"
      ? "Data Structures & Algorithms"
      : subjectSlug?.toUpperCase() || "Subject";

  return (
    <MainLayout>
      <Header />
      <OrbitBar />

      <section className="max-w-7xl mx-auto px-8 py-10">
        <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700">
          Semester 3
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          {subjectTitle}
        </h1>

        <p className="mt-4 text-lg text-gray-500">
          {subjectTopics.length} Topics • {totalNotes} Notes
        </p>
      </section>

      <TopicGrid subject={subjectSlug} />
    </MainLayout>
  );
}

export default SubjectPage;