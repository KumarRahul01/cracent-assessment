import fs from "fs/promises";
const path = "./data/notes.json";


export const getNotes = async (req, res) => {
  try {
    const data = await fs.readFile(path, "utf-8");
    const notes = JSON.parse(data);
    return res.status(200).json({ notes });
  } catch (err) {
    console.error("Error in getting note:", err);
    return res.status(500).json({ message: "Server error, failed to get notes" });
  }
}


export const saveNotes = async (req, res) => {
  // Validation logic
  if (req.body.title === "") {
    return res.status(400).json({ message: "Title must be required" });
  }

  if (req.body.content.length < 10) {
    return res.status(400).json({ message: "Content must be greater than 10 characters" });
  }

  const newNote = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
  };

  try {
    let existingNotes = [];

    // Check if the file exists and read the existing notes asynchronously
    try {
      const fileContent = await fs.readFile(path, "utf-8");
      existingNotes = fileContent ? JSON.parse(fileContent) : [];
    } catch (err) {
      if (err.code === "ENOENT") {
        existingNotes = [];
      } else {
        console.error("Error in reading file", err);
        return res.status(500).json({ message: "Server error, failed to read existing notes" });
      }

    }

    // Append the new note
    existingNotes.push(newNote);

    // Write the updated notes array back to the file
    await fs.writeFile(path, JSON.stringify(existingNotes, null, 2), "utf-8");

    // Return success message with the updated notes
    return res.status(200).json({ message: "Note saved successfully!", notes: existingNotes });
  } catch (err) {
    console.error("Error saving note:", err);
    return res.status(500).json({ message: "Server error, failed to save note" });
  }
};



export const deleteNote = async (req, res) => {

  const id = parseInt(req.params.id);

  try {
    const fileContent = await fs.readFile(path, "utf-8");
    const allNotes = fileContent ? JSON.parse(fileContent) : [];

    // Find the note to be deleted
    const noteToDelete = allNotes.find(note => note.id === id);

    // If the note is not found
    if (!noteToDelete) {
      return res.status(404).json({ message: "Note not found" });
    }

    const remainingNotes = allNotes.filter((note) => note.id !== id);

    await fs.writeFile(path, JSON.stringify(remainingNotes, null, 2));

    return res.status(200).json({ message: `Note with id ${id} deleted successfully!`, deletedNote: noteToDelete, allNotes: remainingNotes });
  } catch (err) {
    console.error("Error in deleting note:", err);
    return res.status(500).json({ message: "Server error, failed to delete note" })
  }
}


export const updateNote = async (req, res) => {
  const id = parseInt(req.params.id);
  const updateTitle = req.body.title;
  const updatedContent = req.body.content;

  try {

    const fileContent = await fs.readFile(path, "utf-8");
    const allNotes = fileContent ? JSON.parse(fileContent) : [];

    const noteIndex = allNotes.findIndex(note => note.id === parseInt(id));
    if (noteIndex === -1) {
      return res.status(400).json({ message: `Note with ID ${id} not found.` });
    }

    // Update the note content
    if (updateTitle) {
      allNotes[noteIndex].title = updateTitle;
    }

    if (updatedContent) {
      allNotes[noteIndex].content = updatedContent;
    }

    // Write the updated notes array back to the file
    await fs.writeFile(path, JSON.stringify(allNotes, null, 2), "utf-8");

    return res.status(200).json({ message: `Note with id ${id} updated successfully`, updatedNote: allNotes[noteIndex], allNotes: allNotes });

  } catch (err) {
    console.error("Error in updating note", err);
    return res.status(500).json({ message: "Server error, failed to update note" });
  }
}