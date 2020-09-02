const {Octokit} = require("@octokit/core");
const octokit = new Octokit({ auth: `2400d19e5be465d4f8834e8adad71a1b60a74188` });

(async () => {
	let results = await octokit.request('GET /users/{owner}/repos', 
	{
  		owner: 'yrahul3910',
		type: 'all'
	});

	results = results["data"];
	let count = 0
	for (let repo of results) {
		if (repo.fork) {
			try {
				let forks = await octokit.request('GET /repos/{owner}/{repo}/events', {
					owner: 'yrahul3910',
					repo: repo.name
				});

				if (forks.data.length > 0) count++
			} catch (e) { }
		}
	}
	console.log(count);
})();
