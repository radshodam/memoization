import React, { memo } from "react";

const FilteredNotes2 = memo(({ notesArray }) => {
  console.log("use memo dont work in top level . fix by memo");
  return (
    <>
      {notesArray
        .filter((note) => note.title.toLowerCase().includes("js"))
        .map((note, index) => {
          console.log("note", note);

          return (
            <h2 key={note.id}>
              {index + 1} - {note.title}
            </h2>
          );
        })}
    </>
  );
});

export default FilteredNotes2;
