import React, { useMemo } from "react";

export default function FilteredNotes({ notesArray }) {
  return (
    <>
      {useMemo(() => {
        return notesArray
          .filter((note) => note.title.toLowerCase().includes("js"))
          .map((note, index) => {

            console.log("note", note);

            return (
              <h2 key={note.id}>
                {index + 1} - {note.title}
              </h2>
            );
          });
      }, [notesArray])}
    </>
  );
}
