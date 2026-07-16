import { pinnedTopics } from "../../data/pinned";

function PinnedTopics() {
  return (
    <section className="px-8 mt-10">
      <h2 className="text-2xl font-bold mb-5">
        ⭐ Pinned Topics
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {pinnedTopics.map((topic) => (
          <div
            key={topic.name}
            className="bg-white rounded-2xl shadow-md p-5"
          >
            <div
              className={`w-12 h-12 rounded-full ${topic.color} mb-4`}
            ></div>

            <h3 className="text-xl font-bold">
              {topic.name}
            </h3>

            <p className="text-gray-500">
              {topic.items} Items
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PinnedTopics;