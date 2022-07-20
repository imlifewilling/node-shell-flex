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