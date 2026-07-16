const topics = [
  {
    title: "Stacks",
    notes: 12,
    progress: 85,
    color: "bg-teal-100 text-teal-700",
  },
  {
    title: "Queues",
    notes: 8,
    progress: 65,
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Linked List",
    notes: 15,
    progress: 40,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Trees",
    notes: 10,
    progress: 25,
    color: "bg-yellow-100 text-yellow-700",
  },
];

function TopicGrid() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">Topics</h2>

        <button className="text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {topics.map((topic) => (
          <div
            key={topic.title}
            onClick={() => alert(`Opening ${topic.title}...`)}
            className="
              cursor-pointer
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-7
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              active:scale-95
            "
          >
            <span
              className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${topic.color}`}
            >
              Topic
            </span>

            <h3 className="mt-6 text-3xl font-bold">
              {topic.title}
            </h3>

            <p className="mt-3 text-gray-500">
              {topic.notes} Notes
            </p>

            <div className="mt-6 h-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-700"
                style={{
                  width: `${topic.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopicGrid;