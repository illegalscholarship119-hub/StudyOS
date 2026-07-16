type Note = {
  id: number;
  title: string;
  type: string;
  content: string;
  createdAt: string;
};

type NotesListProps = {
  notes: Note[];
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
};

function NotesList({
  notes,
  onDelete,
  onEdit,
}: NotesListProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10">
      <h2 className="mb-6 text-3xl font-bold">
        Notes
      </h2>

      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">

              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  {note.title}
                </h3>

                <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm">
                  {note.type}
                </span>

                <p className="mt-4 text-gray-600">
                  {note.content}
                </p>

                <p className="mt-4 text-sm text-gray-400">
                  {note.createdAt}
                </p>
              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => onEdit(note)}
                  className="rounded-lg px-3 py-2 hover:bg-blue-50"
                >
                  ✏️
                </button>

                <button
                  onClick={() => onDelete(note.id)}
                  className="rounded-lg px-3 py-2 hover:bg-red-50"
                >
                  🗑️
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NotesList;