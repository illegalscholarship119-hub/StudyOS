import { useNavigate } from "react-router-dom";

import { topics } from "../../data/topics";

function PinnedTopics() {
  const navigate = useNavigate();

  const pinnedTopics = topics.filter((topic) => topic.progress >= 60);

  return (
    <section className="max-w-7xl mx-auto px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">
          ⭐ Pinned Topics
        </h2>

        <button className="text-blue-600 hover:underline font-medium">
          See all
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {pinnedTopics.map((topic) => (
          <div
            key={topic.slug}
            onClick={() => navigate(`/topic/${topic.slug}`)}
            className="
              cursor-pointer
              bg-white
              rounded-3xl
              border
              border-gray-100
              p-7
              shadow-sm
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div
              className={`w-16 h-16 rounded-full ${topic.color}`}
            ></div>

            <h3 className="mt-7 text-3xl font-bold">
              {topic.title}
            </h3>

            <p className="mt-2 text-lg text-gray-500">
              {topic.notes} Notes
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PinnedTopics;