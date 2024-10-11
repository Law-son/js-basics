const NoteServices = require('../services/note.services');

exports.getNotes = async (req, res) => {
    try {
        const notes = await NoteServices.getNotes();
        return res.status(200).json({
            success: true,
            data: notes,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


exports.createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = await NoteServices.createNote(title, content);
        return res.status(200).json({
            success: true,
            data: note,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


exports.updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const note = await NoteServices.updateNote(id, title, content);
        return res.status(200).json({
            success: true,
            data: note,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.deleNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await NoteServices.deleteNote(id);
        return res.status(200).json({
            success: true,
            data: note,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};