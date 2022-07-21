const fs = require('fs')

const head = (filename, done) => {
    fs.readFile(filename, (err, data) =>{
        if (err){
          throw err;
        } else{
          const headtext = []
          const arr = data.toString().split('\n')
          for (let i = 0; i < 10; i++){
            headtext.push(arr[i])
          }
          done(headtext.join('\n'))
        }
      })
}
module.exports = head