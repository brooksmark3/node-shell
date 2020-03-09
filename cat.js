const fs = require('fs');

function cat(data) {
  if (
    data
      .toString()
      .trim()
      .split(' ')[0] === 'cat'
  ) {
    const cmd = data
      .toString()
      .trim()
      .split(' ')[1];
    fs.readFile(`./${cmd}`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(data);
        process.stdout.write('\nprompt > ');
      }
    });
  }
}

module.exports = cat;
