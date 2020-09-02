const {Octokit} = require("@octokit/core");
const octokit = new Octokit({ auth: `2400d19e5be465d4f8834e8adad71a1b60a74188` });

(async () => {
	let results = await octokit.request('GET /users/{owner}/repos', 
	{
  		owner: 'yrahul3910',
	});

	results = results["data"];
	let repos = results.map(x => x.name)

	let count = 0;
	for (const repo of repos) {
		const lang = await octokit.request('GET /repos/{owner}/{repo}/languages', {
			owner: 'yrahul3910',
			repo
		});

		if (lang.data.hasOwnProperty("C++")) count++;
	}

	console.log(count);
})();

