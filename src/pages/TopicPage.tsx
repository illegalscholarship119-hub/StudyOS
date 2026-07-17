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

type ResourceType = "note" | "pdf" | "image" | "video";

type Note = {
  id: number;
  title: string;
  type: ResourceType;
  content: string;
  createdAt: string;
  topicSlug?: string;
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
    type: "note" | "pdf" | "image"
  ) {
    console.log("========== SAVE ==========");
    console.log("Title:", title);
    console.log("Type:", type);
    console.log("Content starts with:");
    console.log(content.substring(0, 150));

    if (editingNote) {
      setNotes(
        notes.map((note) =>
          note.id === editingNote.id
            ? {
                ...note,
                title,
                content,
                type,
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
        createdAt: "Just now",
      };

      console.log("New Resource:");
      console.log(newResource);

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

  return (
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
  );
}

export default TopicPage;