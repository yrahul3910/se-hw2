const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `74dddb28da909c7e46f90444cf3002cf18f884c3` });

var owner = 'yrahul3910';

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
