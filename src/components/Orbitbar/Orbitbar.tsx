const subjects = [
  {
    name: "DSA",
    color: "bg-teal-200",
    active: true,
  },
  {
    name: "Java",
    color: "bg-orange-200",
    active: false,
  },
  {
    name: "DBMS",
    color: "bg-yellow-200",
    active: false,
  },
  {
    name: "AWS",
    color: "bg-purple-200",
    active: false,
  },
  {
    name: "+",
    color: "bg-gray-100",
    active: false,
  },
];

function OrbitBar() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-6">
      <div className="flex gap-8">

        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div
              className={`
                w-20 h-20 rounded-full
                ${subject.color}
                flex items-center justify-center
                transition-all duration-300
                hover:scale-105
                ${
                  subject.active
                    ? "ring-4 ring-blue-500 shadow-lg"
                    : "hover:ring-2 hover:ring-gray-300"
                }
              `}
            >
              <span className="font-semibold text-gray-700">
                {subject.name}
              </span>
            </div>

            <span
              className={`mt-3 text-sm ${
                subject.active
                  ? "font-semibold text-black"
                  : "text-gray-500"
              }`}
            >
              {subject.name}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}

export default OrbitBar;