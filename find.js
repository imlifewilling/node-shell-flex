fs = require('fs')
const find = (filename, done) => {
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            throw err;
        } else{
            for (file of files) {
                if (file === filename) {
                    done(filename)
                } 
            }
        }
    }
    )
}
module.exports = find;

