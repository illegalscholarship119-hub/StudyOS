const cards = [
  {
    subject: "DSA",
    title: "Stacks",
    time: "Opened 2h ago",
    progress: 68,
    color: "bg-teal-100 text-teal-700",
  },
  {
    subject: "Java",
    title: "OOP",
    time: "Opened Yesterday",
    progress: 55,
    color: "bg-orange-100 text-orange-700",
  },
  {
    subject: "AWS",
    title: "VPC Peering",
    time: "Opened 3 days ago",
    progress: 78,
    color: "bg-purple-100 text-purple-700",
  },
];

function ContinueCards() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-8">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">
          Continue Studying
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          See all
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-7
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <span
              className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${card.color}`}
            >
              {card.subject}
            </span>

            <h3 className="mt-7 text-4xl font-bold">
              {card.title}
            </h3>

            <p className="mt-3 text-lg text-gray-500">
              {card.time}
            </p>

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-500 transition-all duration-700"
                style={{
                  width: `${card.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ContinueCards;