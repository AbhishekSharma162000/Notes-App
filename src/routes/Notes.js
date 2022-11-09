const express = require('express');
const router = express.Router();

const Note = require('../model/Note');

router.post('/list', async (req, res)=>{
    var notes = await Note.find({userid: req.body.userid}); 
    res.json(notes);
});

router.post('/add', async (req, res)=>{

    await Note.deleteOne({id:req.body.id});

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    }); 
    await newNote.save();

    const respone = { message: "New Note Created!" + `id: ${req.body.id}` };
    res.json(respone);
});

router.post("/delete", async (req, res)=>{
    await Note.deleteOne({id:req.body.id});
    const respone = { message: "Note Deleted!" + `id: ${req.body.id}` };
    res.json(respone);
});

module.exports = router;