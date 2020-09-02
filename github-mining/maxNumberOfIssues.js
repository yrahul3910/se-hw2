const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: "c0364bbf1afdd771b0ae1486e78cd1036d7c7402" });

(async () => {
	let results = await octokit.request('GET /users/{owner}/repos',
	{
  		owner: 'roadhog666',
	});
	results = results["data"];
	let repos = results.map(x => x.name)
    let count = 0;
    let max = 0;
	for (const repo of repos) {
		let result = await octokit.request('GET /repos/{owner}/{repo}/issues', {
			owner: 'roadhog666',
			repo
        });
        result = result["data"];
        if ( max < result.map(x => x.state).filter(x => x == "open").length) max = result.map(x => x.state).filter(x => x == "open").length
	}
	console.log(max);
})();