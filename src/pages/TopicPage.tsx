import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header/Header";
import TopicHeader from "../components/TopicHeader/TopicHeader";
import LessonCard from "../components/LessonCard/LessonCard";
import NotesList from "../components/NotesList/NotesList";
import AddNoteModal from "../components/AddNoteModal/AddNoteModal";
import Button from "../components/Button/Button";

import { notes as initialNotes } from "../data/notes";
import { topics } from "../data/topics";
import useSearch from "../hooks/useSearch";
import { fileToBase64 } from "../lib/utils";

type ResourceType = "note" | "pdf" | "image" | "video";

type Note = {
  id: number;
  title: string;
  type: ResourceType;
  content: string;
  createdAt: string;
  topicSlug?: string;

  startTime?: string;
  endTime?: string;
};

function TopicPage() {
  const { slug } = useParams();

  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <MainLayout>
        <div className="flex h-screen items-center justify-center text-3xl font-bold">
          Topic Not Found
        </div>
      </MainLayout>
    );
  }

  const storageKey = `studyos-notes-${slug}`;

  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      return JSON.parse(saved);
    }

    return (initialNotes as Note[]).filter(
      (note) => note.topicSlug === slug
    );
  });

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setNotes(JSON.parse(saved));
    } else {
      setNotes(
        (initialNotes as Note[]).filter(
          (note) => note.topicSlug === slug
        )
      );
    }
  }, [slug]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(notes));
  }, [notes, storageKey]);

  const { query, setQuery, filteredItems } = useSearch(
    notes,
    (note) => `${note.title} ${note.content}`
  );

  function handleSave(
  title: string,
  content: string,
  type: "note" | "pdf" | "image" | "video",
  startTime?: string,
  endTime?: string
) {
    if (editingNote) {
      setNotes(
        notes.map((note) =>
          note.id === editingNote.id
            ? {
  ...note,
  title,
  content,
  type,
  startTime,
  endTime,
}
            : note
        )
      );

      setEditingNote(null);
    } else {
      const newResource: Note = {
  id: Date.now(),
  topicSlug: slug,
  title,
  content,
  type,
  startTime,
  endTime,
  createdAt: "Just now",
};

      setNotes((prev) => [newResource, ...prev]);
    }

    setShowModal(false);
  }

  function handleDelete(id: number) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  function handleEdit(note: Note) {
    setEditingNote(note);
    setShowModal(true);
  }

  async function handlePaste(
    e: React.ClipboardEvent<HTMLDivElement>
  ) {
    const items = e.clipboardData.items;

    for (const item of items) {
      if (item.type.startsWith("image/")) {
        e.preventDefault();

        const file = item.getAsFile();

        if (!file) return;

        const base64 = await fileToBase64(file);

        const newImage: Note = {
          id: Date.now(),
          topicSlug: slug,
          title: `Screenshot ${new Date().toLocaleTimeString()}`,
          type: "image",
          content: base64,
          createdAt: "Just now",
        };

        setNotes((prev) => [newImage, ...prev]);

        alert("✅ Screenshot added!");

        return;
      }
    }
  }

  return (
    <div
      tabIndex={0}
      onPaste={handlePaste}
      className="outline-none"
    >
      <MainLayout>
        <Header />

        <TopicHeader
          subject={topic.subject}
          title={topic.title}
          description={topic.description}
          notes={topic.notes}
          progress={topic.progress}
          color={topic.color}
        />

        <section className="mx-auto max-w-7xl px-8 pb-10">
          <h2 className="mb-6 text-3xl font-bold">
            Lessons
          </h2>

          <div className="space-y-4">
            {topic.lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                slug={lesson.slug}
                title={lesson.title}
                duration={lesson.duration}
                completed={lesson.completed}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              Resources
            </h2>

            <Button
              onClick={() => {
                setEditingNote(null);
                setShowModal(true);
              }}
            >
              + Add Resource
            </Button>
          </div>

          <p className="mb-4 rounded-xl bg-blue-50 p-4 text-blue-700">
            📸 Tip: Press <b>Ctrl + V</b> anywhere on this page after taking a
            screenshot (Win + Shift + S) to instantly add it as an Image
            Resource.
          </p>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources..."
            className="mb-8 w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-blue-500"
          />

          <NotesList
            notes={filteredItems}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </section>

        {showModal && (
          <AddNoteModal
            onClose={() => {
              setEditingNote(null);
              setShowModal(false);
            }}
            onSave={handleSave}
            editingNote={editingNote}
          />
        )}
      </MainLayout>
    </div>
  );
}

export default TopicPage;