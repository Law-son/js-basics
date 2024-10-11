const mongoose = require('mongoose');

const connection = mongoose.createConnection(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).on('error', (error) => {
    console.log(error);
})

module.exports = connection