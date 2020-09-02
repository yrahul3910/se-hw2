const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `20f3225869549c231e065983a1a6a28943695436` });

(async () => {
	let results = await octokit.request('GET /users/{username}/repos',
	{
  		username: 'yrahul3910',
	});
    results = results["data"].map(x => x.stargazers_count);
    console.log(results.reduce((a, b) => Math.max(a,b)));
})();