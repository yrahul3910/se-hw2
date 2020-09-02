const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: "c0364bbf1afdd771b0ae1486e78cd1036d7c7402" });

(async () => {
	let results = await octokit.request('GET /users/{username}/repos',
	{
  		username: 'roadhog666',
	});


    results = results["data"];
	let repos = results.map(x => x.name)
	let count = 0;
	for (const repo of repos) {
		let result = await octokit.request('GET /repos/{owner}/{repo}/stargazers', {
			owner: 'roadhog666',
			repo
        });
        result = result["data"];
        count = count + result.map(x => x.login).length
	}
	console.log(count);
})();