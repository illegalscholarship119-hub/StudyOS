import { useState } from "react";
import ContentCard from "../ContentCard/ContentCard";

export type Note = {
  id: number;
  title: string;
  type: "note" | "pdf" | "image" | "video";
  content: string;
  createdAt: string;

  startTime?: string;
  endTime?: string;
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
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  function openPdf(base64: string) {
    try {
      const base64Data = base64.split(",")[1];

      const byteCharacters = atob(base64Data);

      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      const blob = new Blob([byteArray], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);

      window.open(url, "_blank");
    } catch (err) {
      console.error(err);
      alert("Unable to open PDF.");
    }
  }

  function handleOpen(note: Note) {
    switch (note.type) {
      case "note":
        onEdit(note);
        break;

      case "pdf":
        openPdf(note.content);
        break;

      case "image":
        setPreviewImage(note.content);
        break;

      case "video": {
  let url = note.content;

  if (note.startTime) {
    const parts = note.startTime.split(":").map(Number);

    let seconds = 0;

    if (parts.length === 2) {
      seconds = parts[0] * 60 + parts[1];
    } else if (parts.length === 3) {
      seconds =
        parts[0] * 3600 +
        parts[1] * 60 +
        parts[2];
    }

    url += url.includes("?")
      ? `&t=${seconds}s`
      : `?t=${seconds}s`;
  }

  window.open(url, "_blank");
  break;
}
      default:
        onEdit(note);
    }
  }

  if (notes.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-8 py-10">
        <h2 className="mb-6 text-3xl font-bold">
          Resources
        </h2>

        <div className="rounded-2xl border border-dashed border-gray-300 py-16 text-center text-gray-500">
          No study resources added yet.
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-8 py-10">
        <h2 className="mb-6 text-3xl font-bold">
          Resources
        </h2>

        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="relative"
            >
              <ContentCard
                title={note.title}
                type={note.type}
                createdAt={note.createdAt}
                onOpen={() => handleOpen(note)}
              />

              <div className="absolute right-24 top-5 flex gap-2">
                <button
                  onClick={() => onEdit(note)}
                  className="rounded-lg p-2 transition hover:bg-blue-100"
                  title="Edit"
                >
                  ✏️
                </button>

                <button
                  onClick={() => onDelete(note.id)}
                  className="rounded-lg p-2 transition hover:bg-red-100"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-10"
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-h-full max-w-full rounded-2xl"
          />
        </div>
      )}
    </>
  );
}

export default NotesList;