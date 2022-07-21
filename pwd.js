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