const {Octokit} = require("@octokit/core");
const octokit = new Octokit({ auth: "c0364bbf1afdd771b0ae1486e78cd1036d7c7402" });

(async () => {
	let results = await octokit.request('GET /users/{owner}/repos', 
	{
  		owner: 'roadhog666',
		type: 'all'
	});

	results = results["data"];
	let count = 0
	for (let repo of results) {
		if (repo.fork) {
			try {
				let forks = await octokit.request('GET /repos/{owner}/{repo}/events', {
					owner: 'roadhog666',
					repo: repo.name
				});

				if (forks.data.length > 0) count++
			} catch (e) { }
		}
	}
	console.log(count);
})();
