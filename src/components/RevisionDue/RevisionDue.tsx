function RevisionDue() {
  const revisions = [
    {
      topic: "VPC Peering",
      status: "Overdue 2 days",
      color: "bg-red-500",
    },
    {
      topic: "Stack",
      status: "Due Today",
      color: "bg-yellow-400",
    },
    {
      topic: "OOP",
      status: "Due in 3 days",
      color: "bg-gray-400",
    },
  ];

  return (
    <section className="px-8 mt-10">
      <h2 className="text-2xl font-bold mb-5">
        📅 Revision Due
      </h2>

      <div className="bg-white rounded-2xl shadow-md p-6">
        {revisions.map((item) => (
          <div
            key={item.topic}
            className="flex items-center justify-between py-4 border-b last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>

              <div>
                <h3 className="font-semibold">
                  {item.topic}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RevisionDue;