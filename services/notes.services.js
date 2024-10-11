const noteModel = require('../models/note.model');

class NoteServices{
    async getNotes(){
        return await noteModel.find();
    }

    async createNote(title, content){
        const note = new noteModel({
            title: title,
            content: content
        });
        return await note.save();
    }

    async updateNote(id, title, content){
        return await noteModel.findByIdAndUpdate(id, {
            title: title,
            content: content
        });
    }

    async deleteNote(id){
        return await noteModel.findByIdAndDelete(id);
    }
}

module.exports = NoteServices;