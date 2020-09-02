const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `20f3225869549c231e065983a1a6a28943695436` });

(async () => {
	let results = await octokit.request('GET /users/{owner}/repos',
	{
  		owner: 'yrahul3910',
	});
	results = results["data"];
	let repos = results.map(x => x.name)
    let count = 0;
    let max = 0;
	for (const repo of repos) {
		let result = await octokit.request('GET /repos/{owner}/{repo}/issues', {
			owner: 'yrahul3910',
			repo
        });
        result = result["data"];
        if ( max < result.map(x => x.state).filter(x => x == "open").length) max = result.map(x => x.state).filter(x => x == "open").length
	}
	console.log(max);
})();