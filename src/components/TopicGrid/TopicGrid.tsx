import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Card from "../Card/Card";
import { topics } from "../../data/topics";

type TopicGridProps = {
  subject?: string;
};

function TopicGrid({ subject }: TopicGridProps) {
  const navigate = useNavigate();

  const filteredTopics = subject
    ? topics.filter(
        (topic) => topic.subject.toLowerCase() === subject.toLowerCase()
      )
    : topics;

  return (
    <section className="mx-auto max-w-7xl px-8 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold">Topics</h2>

        <Button variant="outline">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {filteredTopics.map((topic) => (
          <Card
            key={topic.slug}
            className="cursor-pointer p-7"
            onClick={() => navigate(`/topic/${topic.slug}`)}
          >
            <span
              className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${topic.color}`}
            >
              {topic.subject}
            </span>

            <h3 className="mt-6 text-3xl font-bold">
              {topic.title}
            </h3>

            <p className="mt-3 text-gray-500">
              {topic.notes} Notes
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-700"
                style={{
                  width: `${topic.progress}%`,
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default TopicGrid;