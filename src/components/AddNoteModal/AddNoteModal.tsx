import { useEffect, useState } from "react";
import { fileToBase64 } from "../../lib/utils";

type Note = {
  id: number;
  title: string;
  type: "note" | "pdf" | "image" | "video";
  content: string;
  createdAt: string;

  startTime?: string;
  endTime?: string;
};

type AddNoteModalProps = {
  onClose: () => void;
 onSave: (
  title: string,
  content: string,
  type: "note" | "pdf" | "image" | "video",
  startTime?: string,
  endTime?: string
) => void;
  editingNote?: Note | null;
};

function AddNoteModal({
  onClose,
  onSave,
  editingNote,
}: AddNoteModalProps) {
 const [resourceType, setResourceType] = useState<
  "note" | "pdf" | "image" | "video"
>("note");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setStartTime(editingNote.startTime ?? "");
      setEndTime(editingNote.endTime ?? "");

      if (
  editingNote.type === "note" ||
  editingNote.type === "pdf" ||
  editingNote.type === "image" ||
  editingNote.type === "video"
) {
  setResourceType(editingNote.type);
}
    }
  }, [editingNote]);

  async function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setLoading(true);

      const base64 = await fileToBase64(file);

      setTitle(file.name);
      setContent(base64);
    } catch (err) {
      console.error(err);
      alert("Failed to read file.");
    } finally {
      setLoading(false);
    }
  }

  function handleSave() {
    if (resourceType === "video") {
  const url = content.trim();

  if (
    !url.includes("youtube.com") &&
    !url.includes("youtu.be")
  ) {
    alert("Please enter a valid YouTube URL.");
    return;
  }
}
   onSave(
  title,
  content,
  resourceType,
  startTime,
  endTime
);

    setTitle("");
    setContent("");
    setResourceType("note");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <div className="w-[600px] rounded-3xl bg-white p-8 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            {editingNote ? "Edit Resource" : "Add Resource"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setResourceType("note")}
            className={`rounded-xl px-4 py-2 ${
              resourceType === "note"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            📝 Note
          </button>

          <button
            onClick={() => setResourceType("pdf")}
            className={`rounded-xl px-4 py-2 ${
              resourceType === "pdf"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            📄 PDF
          </button>

          <button
            onClick={() => setResourceType("image")}
            className={`rounded-xl px-4 py-2 ${
              resourceType === "image"
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            🖼 Image
          </button>

          <button
  onClick={() => setResourceType("video")}
  className={`rounded-xl px-4 py-2 ${
    resourceType === "video"
      ? "bg-blue-600 text-white"
      : "bg-gray-100"
  }`}
>
  🎥 Video
</button>

        </div>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mt-6 w-full rounded-xl border p-4"
        />

        {resourceType === "note" ? (
  <textarea
    value={content}
    onChange={(e) => setContent(e.target.value)}
    placeholder="Write your notes..."
    className="mt-4 h-40 w-full rounded-xl border p-4"
  />
) : resourceType === "video" ? (
  <>
    <input
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Paste YouTube URL..."
      className="mt-4 w-full rounded-xl border p-4"
    />

    <div className="mt-4 grid grid-cols-2 gap-4">
      <input
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        placeholder="Start (e.g. 10:32)"
        className="rounded-xl border p-4"
      />

      <input
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        placeholder="End (e.g. 13:48)"
        className="rounded-xl border p-4"
      />
    </div>
  </>
) : (
  <div className="mt-4 rounded-xl border-2 border-dashed border-gray-300 p-6">
    <input
      type="file"
      accept={resourceType === "pdf" ? ".pdf" : "image/*"}
      onChange={handleFileChange}
    />

    {loading && (
      <p className="mt-4 text-sm text-blue-600">
        Reading file...
      </p>
    )}

    {!loading && content && (
      <p className="mt-4 text-sm text-green-600">
        ✅ File loaded successfully
      </p>
    )}
  </div>
)}

        <button
          onClick={handleSave}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-blue-500 p-4 text-white hover:bg-blue-600 disabled:opacity-50"
        >
          {editingNote ? "Update Resource" : "Save Resource"}
        </button>
      </div>
    </div>
  );
}

export default AddNoteModal;