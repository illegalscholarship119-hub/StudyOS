import { useNavigate } from "react-router-dom";
import { topics } from "../../data/topics";

function RevisionDue() {
  const navigate = useNavigate();

  const revisions = [...topics]
    .sort((a, b) => a.progress - b.progress)
    .slice(0, 3)
    .map((topic) => ({
      ...topic,
      status:
        topic.progress < 40
          ? "Overdue"
          : topic.progress < 70
          ? "Due Today"
          : "In 3 Days",
      color:
        topic.progress < 40
          ? "bg-red-500"
          : topic.progress < 70
          ? "bg-yellow-500"
          : "bg-green-500",
    }));

  return (
    <section className="mx-auto max-w-7xl px-8 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold">
          📅 Revision Due
        </h2>

        <button className="font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        {revisions.map((item) => (
          <div
            key={item.slug}
            className="flex items-center justify-between border-b p-6 transition last:border-b-0 hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-3 w-3 rounded-full ${item.color}`}
              />

              <div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.status}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate(`/topic/${item.slug}`)}
              className="rounded-full border border-gray-200 px-5 py-2 transition hover:bg-gray-100"
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RevisionDue;