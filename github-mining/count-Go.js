const {Octokit} = require("@octokit/core");
const octokit = new Octokit({ auth: "c0364bbf1afdd771b0ae1486e78cd1036d7c7402" });

var owner = 'roadhog666';

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
		if (lang.data.hasOwnProperty("Go")) count++;
	}
	console.log(count);
})();
