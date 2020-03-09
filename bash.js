const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  pwd(data);
  ls(data);
  cat(data);
  // const cmd = process.cwd();
  // process.stdout.write(cmd);
  // process.stdout.write('\nprompt > ');
  // if (data.toString().trim() === 'pwd') {
  // 	const cmd = process.cwd();
  // 	process.stdout.write(cmd);
  // 	process.stdout.write('\nprompt > ');
  // }
});
