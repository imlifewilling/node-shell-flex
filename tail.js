const fs = require('fs')
const tail = (filename, done) => {
    fs.readFile(filename, (err, data) =>{
        if (err){
          throw err;
        } else{
          const arr = data.toString().split('\n')
          const tailtext = arr.slice(-10)
          done(tailtext.join('\n'))
        }
      })
}
module.exports = tail