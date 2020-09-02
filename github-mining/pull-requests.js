const { Octokit } = require("@octokit/core");
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
	    const pull_request = await octokit.request('GET /repos/{owner}/{repo}/pulls',
	    {
  	    owner,
        repo,
        state: 'all'
        });
        //console.log(pull_request['data'].map(x => x.title))
        count += pull_request['data'].length;
	}

    console.log(count);
})();
