const fs = require('fs')

const cat = (filename, done) => {
    fs.readFile(filename, (err, data) => {
        if (err) {
            throw err;
        } else{
            done(data);
        }
    }
    )
}

module.exports = cat;

