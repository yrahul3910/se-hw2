const {Octokit} = require("@octokit/core");
const octokit = new Octokit({ auth: `74dddb28da909c7e46f90444cf3002cf18f884c3` });

var owner = 'gfx-rs';

(async () => {
	let results = await octokit.request('GET /users/{owner}/repos',
	{
  		owner
	});
	results = results["data"];
	let repos = results.map(x => x.name)
	let count = 0;
	for (const repo of repos) {
		const lang = await octokit.request('GET /repos/{owner}/{repo}/languages', {
			owner,
			repo
        });
		if (lang.data.hasOwnProperty("Rust")) count++;
	}
	console.log(count);
})();