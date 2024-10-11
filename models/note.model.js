const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose;


const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
});

const noteModel = db.model('note', noteSchema);

module.exports = noteModel;
