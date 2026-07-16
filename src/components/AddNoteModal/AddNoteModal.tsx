import { useEffect, useState } from "react";

type Note = {
  id: number;
  title: string;
  type: string;
  content: string;
  createdAt: string;
};

type AddNoteModalProps = {
  onClose: () => void;
  onSave: (title: string, content: string) => void;
  editingNote?: Note | null;
};

function AddNoteModal({
  onClose,
  onSave,
  editingNote,
}: AddNoteModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

 function handleSave() {
  if (!title.trim() || !content.trim()) return;

  onSave(title, content);

  setTitle("");
  setContent("");
}

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30">

      <div className="w-[550px] rounded-3xl bg-white p-8 shadow-2xl">

        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            {editingNote ? "Edit Note" : "Add Note"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mt-8 w-full rounded-xl border p-4"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your notes..."
          className="mt-4 h-40 w-full rounded-xl border p-4"
        />

        <button
          onClick={handleSave}
          className="mt-6 w-full rounded-xl bg-blue-500 p-4 text-white hover:bg-blue-600"
        >
          {editingNote ? "Update Note" : "Save Note"}
        </button>

      </div>

    </div>
  );
}

export default AddNoteModal;