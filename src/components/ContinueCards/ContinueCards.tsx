import { useNavigate } from "react-router-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";
import { topics } from "../../data/topics";

function ContinueCards() {
  const navigate = useNavigate();

  // Top 3 topics with highest progress
  const continueTopics = [...topics]
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold">
          Continue Studying
        </h2>

        <Button variant="outline">
          See All
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {continueTopics.map((topic) => (
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

            <h3 className="mt-7 text-4xl font-bold">
              {topic.title}
            </h3>

            <p className="mt-3 text-lg text-gray-500">
              {topic.progress}% Completed
            </p>

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-gray-200">
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

export default ContinueCards;