const fs = require('fs')

const sort = (filename, done) => {
    fs.readFile(filename, (err, data) => {
        if (err) {
            throw err
        } else{
            done(data.toString().split('\n').sort().join('\n'))
        }
    })
}

module.exports = sort