import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  PlayCircle,
  FileText,
  Code2,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import { topics } from "../data/topics";

function LessonPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  let lesson:
    | {
        title: string;
        duration: string;
        completed: boolean;
      }
    | undefined;

  let topicTitle = "";
  let subject = "";

  for (const topic of topics) {
    const found = topic.lessons.find((l) => l.slug === slug);

    if (found) {
      lesson = found;
      topicTitle = topic.title;
      subject = topic.subject;
      break;
    }
  }

  if (!lesson) {
    return (
      <MainLayout>
        <Header />

        <div className="mx-auto max-w-7xl px-8 py-20 text-center">
          <h1 className="text-4xl font-bold">
            Lesson Not Found
          </h1>

          <Button
            className="mt-8"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Header />

      <section className="mx-auto max-w-7xl px-8 py-10">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-500 transition hover:text-blue-600"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          {subject}
        </span>

        <h1 className="mt-5 text-5xl font-bold">
          {lesson.title}
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Topic : {topicTitle}
        </p>

        <div className="mt-8 flex gap-8">

          <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-3">
            <Clock size={20} />
            {lesson.duration}
          </div>

          <div
            className={`flex items-center gap-2 rounded-xl px-5 py-3 ${
              lesson.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            <CheckCircle2 size={20} />

            {lesson.completed
              ? "Completed"
              : "Not Completed"}
          </div>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border p-6 transition hover:shadow-xl cursor-pointer">
            <PlayCircle
              className="mb-4 text-blue-600"
              size={42}
            />

            <h2 className="text-2xl font-bold">
              Video Lecture
            </h2>

            <p className="mt-2 text-gray-500">
              Watch complete explanation.
            </p>
          </div>

          <div className="rounded-2xl border p-6 transition hover:shadow-xl cursor-pointer">
            <FileText
              className="mb-4 text-green-600"
              size={42}
            />

            <h2 className="text-2xl font-bold">
              PDF Notes
            </h2>

            <p className="mt-2 text-gray-500">
              Download lesson notes.
            </p>
          </div>

          <div className="rounded-2xl border p-6 transition hover:shadow-xl cursor-pointer">
            <Code2
              className="mb-4 text-purple-600"
              size={42}
            />

            <h2 className="text-2xl font-bold">
              Code Example
            </h2>

            <p className="mt-2 text-gray-500">
              Practice implementation.
            </p>
          </div>

          <div className="rounded-2xl border p-6 transition hover:shadow-xl cursor-pointer">
            <CheckCircle2
              className="mb-4 text-orange-600"
              size={42}
            />

            <h2 className="text-2xl font-bold">
              Quiz
            </h2>

            <p className="mt-2 text-gray-500">
              Test your understanding.
            </p>
          </div>

        </div>

        <Button className="mt-12">
          Mark as Completed
        </Button>

      </section>
    </MainLayout>
  );
}

export default LessonPage;