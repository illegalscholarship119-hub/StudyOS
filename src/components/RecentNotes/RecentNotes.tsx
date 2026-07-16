const notes = [
  {
    icon: "📝",
    title: "Stack using Array",
    subject: "DSA",
    time: "12 min ago",
  },
  {
    icon: "📄",
    title: "OOP Constructors",
    subject: "Java",
    time: "1 hour ago",
  },
  {
    icon: "📷",
    title: "VPC Peering Diagram",
    subject: "AWS",
    time: "Yesterday",
  },
];

function RecentNotes() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-8 pb-36">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold">
          📚 Recent Notes
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm">

        {notes.map((note) => (
          <div
            key={note.title}
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
            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-2xl">
                {note.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  {note.title}
                </h3>

                <p className="text-gray-500">
                  {note.subject} • {note.time}
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

export default RecentNotes;