<<<<<<< HEAD
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

=======
const fs = require('fs');
function cat(fileName) {

fs.readFile('./', 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(data.toString());
    process.stdout.write('prompt > ');
  }
});

}

module.exports = function (fileName) {
  cat(fileName)
};
>>>>>>> 70fa1446fb907f2cab78227f94e9b7db4777fe69
