<<<<<<< HEAD
// The stdin 'data' event fires after a user types in a line
function pwd(){
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim(); //remove the newline
        if(cmd === 'pwd'){
          process.stdout.write(process.cwd());
        }
        process.stdout.write('\nprompt > ');
      });
}
module.exports = pwd;
=======
function pwd() {

process.stdout.write(process.cwd());

process.stdout.write('\nprompt > ');

}

module.exports = function () {
  pwd()
};
>>>>>>> 70fa1446fb907f2cab78227f94e9b7db4777fe69
