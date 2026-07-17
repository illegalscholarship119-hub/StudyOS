import { useNavigate } from "react-router-dom";
import { notes } from "../../data/notes";
import { topics } from "../../data/topics";

function RecentNotes() {
  const navigate = useNavigate();

  const recentNotes = notes.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-8 py-8 pb-36">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold">
          📚 Recent Notes
        </h2>

        <button className="font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        {recentNotes.map((note) => {
          const topic = topics.find(
            (t) => t.slug === note.topicSlug
          );

          const icon =
            note.type === "note"
              ? "📝"
              : note.type === "pdf"
              ? "📄"
              : note.type === "image"
              ? "🖼️"
              : "🎥";

          return (
            <div
              key={note.id}
              className="flex items-center justify-between border-b p-6 transition last:border-b-0 hover:bg-gray-50"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
                  {icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {note.title}
                  </h3>

                  <p className="text-gray-500">
                    {topic?.subject ?? "General"} • {note.createdAt}
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  topic && navigate(`/topic/${topic.slug}`)
                }
                className="rounded-full border border-gray-200 px-5 py-2 transition hover:bg-gray-100"
              >
                Open
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RecentNotes;