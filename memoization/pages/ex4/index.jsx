import FilteredNotes2 from "@/components/FilteredNotes2";
import React, { useMemo, useState } from "react";

export default function Index() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const addNote = () => {
    let newNoteObject = {
      id: notes.length + 1,
      title: newNote,
    };
    setNotes((pervNote) => [...pervNote, newNoteObject]);
    setNewNote("");
  };

  return (
    <div>
      <input
        value={newNote}
        onChange={(e) => setNewNote((perv) => (perv = e.target.value))}
      />

      <button onClick={addNote}>add note</button>
      <hr />

      <h3>all notes :</h3>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}

      <hr />

      <h3>includes js :</h3>
      <FilteredNotes2 notesArray={notes} />
    </div>
  );
}
