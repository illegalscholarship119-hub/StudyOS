import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header/Header";
import AddNoteModal from "../components/AddNoteModal/AddNoteModal";
import NotesList from "../components/NotesList/NotesList";
import { notes as initialNotes } from "../data/notes";

type Note = {
  id: number;
  title: string;
  type: string;
  content: string;
  createdAt: string;
};

function TopicPage() {
  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [notes, setNotes] = useState(initialNotes);

  function handleAddNote(title: string, content: string) {
    if (editingNote) {
      setNotes(
        notes.map((note) =>
          note.id === editingNote.id
            ? {
                ...note,
                title,
                content,
              }
            : note
        )
      );

      setEditingNote(null);
    } else {
      const newNote: Note = {
        id: Date.now(),
        title,
        type: "note",
        content,
        createdAt: "Just now",
      };

      setNotes([newNote, ...notes]);
    }

    setShowModal(false);
  }

  function handleDeleteNote(id: number) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function handleEditNote(note: Note) {
    setEditingNote(note);
    setShowModal(true);
  }

  return (
    <MainLayout>
      <Header />

      <section className="max-w-7xl mx-auto px-8 py-10">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          DSA
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Stacks
        </h1>

        <p className="mt-4 text-lg text-gray-500">
          {notes.length} Notes
        </p>

        <button
          onClick={() => {
            setEditingNote(null);
            setShowModal(true);
          }}
          className="mt-8 rounded-full bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
        >
          + Add Content
        </button>
      </section>

      <NotesList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />

      {showModal && (
        <AddNoteModal
          onClose={() => {
            setShowModal(false);
            setEditingNote(null);
          }}
          onSave={handleAddNote}
          editingNote={editingNote}
        />
      )}
    </MainLayout>
  );
}

export default TopicPage;