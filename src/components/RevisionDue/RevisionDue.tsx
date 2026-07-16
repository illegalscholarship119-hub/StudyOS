const revisions = [
  {
    topic: "VPC Peering",
    status: "Overdue",
    color: "bg-red-500",
  },
  {
    topic: "Stacks",
    status: "Due Today",
    color: "bg-yellow-500",
  },
  {
    topic: "OOP",
    status: "In 3 Days",
    color: "bg-gray-400",
  },
];

function RevisionDue() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">
          📅 Revision Due
        </h2>

        <button className="text-blue-600 hover:underline font-medium">
          View All
        </button>
      </div>

      <div className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm">

        {revisions.map((item) => (
          <div
            key={item.topic}
            className="
              flex
              items-center
              justify-between
              p-6
              border-b
              last:border-b-0
              hover:bg-gray-50
              transition
            "
          >
            <div className="flex items-center gap-4">

              <div
                className={`w-3 h-3 rounded-full ${item.color}`}
              ></div>

              <div>
                <h3 className="text-xl font-semibold">
                  {item.topic}
                </h3>

                <p className="text-gray-500">
                  {item.status}
                </p>
              </div>

            </div>

            <button className="rounded-full border border-gray-200 px-5 py-2 hover:bg-gray-100 transition">
              Open
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}

export default RevisionDue;