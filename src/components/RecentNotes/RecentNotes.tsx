import { recentNotes } from "../../data/notes";

function RecentNotes() {
  return (
    <section className="px-8 mt-10 mb-20">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">
          📚 Recent Notes
        </h2>

        <button className="text-blue-600 font-semibold">
          See All
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-md divide-y">
        {recentNotes.map((note) => (
          <div
            key={note.title}
            className="flex items-center gap-4 p-5 hover:bg-gray-50 transition"
          >
            <div className="text-3xl">
              {note.icon}
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                {note.title}
              </h3>

              <p className="text-gray-500">
                {note.subject} • {note.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentNotes;