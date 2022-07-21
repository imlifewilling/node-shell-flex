<<<<<<< HEAD
const fs = require('fs')

const ls = (done) => {
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            throw err;
        } else{
            done(files.join('\n'))
        }
    }
    )
}

module.exports = ls;
=======
const fs = require('fs');
function ls() {

fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join('\n'));
    process.stdout.write('prompt > ');
  }
});

}

module.exports = function () {
  ls()
};
>>>>>>> 70fa1446fb907f2cab78227f94e9b7db4777fe69
