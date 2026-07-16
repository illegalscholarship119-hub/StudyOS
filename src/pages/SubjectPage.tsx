import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header/Header";
import OrbitBar from "../components/OrbitBar/OrbitBar";
import TopicGrid from "../components/TopicGrid/TopicGrid";

function SubjectPage() {
  return (
    <MainLayout>
      <Header />
      <OrbitBar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-10">
        <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700">
          Semester 3
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Data Structures & Algorithms
        </h1>

        <p className="mt-4 text-lg text-gray-500">
          12 Topics • 41 Notes • 18 Screenshots • 5 PDFs
        </p>
      </section>

      {/* Topics */}
      <TopicGrid />
    </MainLayout>
  );
}

export default SubjectPage;