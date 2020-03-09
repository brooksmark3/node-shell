const pwd = require('./pwd');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
	pwd(data);
	// const cmd = process.cwd();
	// process.stdout.write(cmd);
	// process.stdout.write('\nprompt > ');
	// if (data.toString().trim() === 'pwd') {
	// 	const cmd = process.cwd();
	// 	process.stdout.write(cmd);
	// 	process.stdout.write('\nprompt > ');
	// }
});
