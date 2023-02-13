//const
const router = require('express').Router();
const {createNewNote, updateDb} = require("../../lib/notes");
const { v4: uuidv4 } = require('uuid');
const {notes} = require("../../db/db.json");

// show all in json data
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

//Post
  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  

//Delete
  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
  });

  module.exports = router;
