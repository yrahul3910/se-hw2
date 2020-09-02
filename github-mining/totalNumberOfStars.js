const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `20f3225869549c231e065983a1a6a28943695436` });

(async () => {
	let results = await octokit.request('GET /users/{username}/repos',
	{
  		username: 'yrahul3910',
	});


    results = results["data"];
	let repos = results.map(x => x.name)
	let count = 0;
	for (const repo of repos) {
		let result = await octokit.request('GET /repos/{owner}/{repo}/stargazers', {
			owner: 'yrahul3910',
			repo
        });
        result = result["data"];
        count = count + result.map(x => x.login).length
	}
	console.log(count);
})();