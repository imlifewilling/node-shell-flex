const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const date = require('./date')
const echo = require('./echo')
const head = require('./head')
const tail = require('./tail')
const sort = require('./sort')
const find = require('./find')



const done = (data) => {
  process.stdout.write(data);
  process.stdout.write('\nprompt > ');
}
//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd === 'pwd'){
    pwd(done);
  }
  if(cmd === 'ls'){
    ls(done)
  }
  if(cmd.split(' ')[0] === 'cat'){
    cat(cmd.split(' ')[1], done)
  }
  if(cmd === 'date'){
    date(done)
  }
  if(cmd.split(' ')[0] === 'echo'){
    echo(cmd.split(' ')[1], done)
  }
  if(cmd.split(' ')[0] === 'head'){
    head(cmd.split(' ')[1], done)
  }
  if(cmd.split(' ')[0] === 'tail'){
    tail(cmd.split(' ')[1], done)
  }
  if(cmd.split(' ')[0] === 'sort'){
    sort(cmd.split(' ')[1], done)
  }
  if(cmd.split(' ')[0] === 'find'){
    find(cmd.split(' ')[1], done)
  }
});