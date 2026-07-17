import { useNavigate } from "react-router-dom";
import { topics } from "../../data/topics";

function OrbitBar() {
  const navigate = useNavigate();

  const subjects = Array.from(
    new Map(
      topics.map((topic) => [
        topic.subject,
        {
          name: topic.subject,
          color: topic.color,
          slug: topic.subject.toLowerCase(),
        },
      ])
    ).values()
  );

  return (
    <section className="mx-auto max-w-7xl px-8 pt-6">
      <div className="flex gap-8 overflow-x-auto pb-2">
        {subjects.map((subject, index) => (
          <div
            key={subject.name}
            onClick={() => navigate(`/subject/${subject.slug}`)}
            className="group flex cursor-pointer flex-col items-center"
          >
            <div
              className={`
                flex h-20 w-20 items-center justify-center rounded-full
                ${subject.color}
                transition-all duration-300
                hover:scale-105
                ${
                  index === 0
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
                index === 0
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