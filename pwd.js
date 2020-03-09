function pwd(data) {
	if (data.toString().trim() === 'pwd') {
		const cmd = process.cwd();
		process.stdout.write(cmd);
		process.stdout.write('\nprompt > ');
	}
}
module.exports = pwd;
