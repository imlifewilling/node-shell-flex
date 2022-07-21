<<<<<<< HEAD
const pwd = require("./pwd");
=======
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat')
const fs = require('fs');
>>>>>>> 70fa1446fb907f2cab78227f94e9b7db4777fe69

//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
<<<<<<< HEAD
pwd()
=======
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd === 'pwd'){
    pwd();
  }
  if(cmd === 'ls'){
    ls();
  }
  if(cmd.split(' ')[0] === 'cat'){
    cat(cmd.split(' ')[1]);
  }
  process.stdout.write('\nprompt > ');
});
>>>>>>> 70fa1446fb907f2cab78227f94e9b7db4777fe69
