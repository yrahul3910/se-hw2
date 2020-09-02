# Methods

## Prior to the study

* Subjects sent detailed instructions on the logistics of the test. Subjects are sent instructions on installing Docker, and are told that sessions will be recorded, but they can opt out if they want. They are explicitly told all their privacy options.
* Subjects can contact us for any help.
* The subject is asked to submit their GitHub id.

## During the study

* A Zoom link is sent to the subject, and the session is recorded, unless the subject opts out.
* The subject is given the Dockerfile, and is given detailed instructions to run the container.
* The subject is allowed access to the Internet, and is free to search for syntax help.
* The subject is given a chance to explore the code and come up with a plan to debug before the timer starts.
* The subject is told that (s)he is free to debug in any order, and as many or few languages as preferred.
* During the session, the proctors take notes on significant events, such as finding a bug, incorrectly labeling a bug, and time taken to find and fix a bug.
* During the session, subjects are free to ask questions about the code structre, test cases constrution, bug types, and language related questions.
* The subject is given a token at the end of the session.
* The languages used were Rust, Ruby, Go

## After the study

* The GitHub profiles of the subjects are mined for several data points to obtain information about the experience and significance of the subject's prior work, as measured by forks and stars. Basic experience with tooling and experimental programming is checked by measuring the number of repos that are forks, that the subject has pushed commits to.
* These are combined with the notes taken during the sessions into a spreadsheet, and the names of the subjects are discarded.
* Some preliminary analysis of the data is done.

# Materials

* Docker
* Compilers for Rust, Ruby, GO
* Zoom
* Slack

# Observations

* All subjects understood the instructions sent prior to the test.
* One subject explored Docker by running the sample containers from the documentation.
* All but one subjects participated; one declined, and no data was collected.
* All subjects complied with submitting their GitHub ids.
* Most subjects had trouble using the editors in the container (vim, emacs, and nano were provided). One subject used online IDEs, and used the container to run tests.
* Most subjects used the Internet to read documentation through standard, direct Google queries (e.g., "Rust `Vec` docs").
* Most subjects only finished one language; a few started on a second one, and one subject nearly finished the second language.
* Most subjects did not appear to have prior experience in any of the languages used; however, it seems universal from the reactions of the subjects that they had difficulty understanding the Rust syntax. In contrast, Ruby syntax seemed easier for subjects. Many subjects who started with rust did not attempt to debug the Go code.
* All subjects starts with GO successfully identified all the bugs in GO.
* The test cases the subjects are given made some differences. Ruby test cases switch between different size of field, which did not seems help the subjects a lot. Rust test cases construct the most basic recursion pattern in GOL, which gave subject a intial sense about how the bug distort the GOL rules and logic. GO test cases are unit test for every basic function used in the GOL, which help subjects identify the root casue of the bug.

# Conclusions
https://github.com/JialinC/se-hw2/blob/master/github-mining/Result%20analysis.ipynb
* Based on user reactions, a fairly universal answer emerges: Rust is harder to debug than Ruby.
    * A hypothesis for this is that Rust is intended to be a type-safe version C, and is used by Mozilla for low-level code. Ruby, on the other hand, has syntax closer to Python, and is used in higher-level code, such as HomeBrew recipes for macOS.
* Most subjects were clearly unfamiliar with Docker and terminal editors, and did not know some vim commands, such as showing line numbers. 
* Based on our data mined from GitHub, we see evidence (using Spearman's correlation coefficient) that people who have used Java in the past would use Go (r = 0.93, p = 0.006) and Ruby (r = 0.9, p = 0.015) in the future. There is no evidence of correlation between C/C++ with any of the languages we tested (p > 0.05).
* We found no correlation between the number of repositories in any of the languages (C, C++, Java, Ruby, Rust, Go) and the time taken to find the first bug.
* There is no evidence that any of the variables collected have any correlation with whether or not participants find a bug (p > 0.05 using the point biserial r correlation test).
* We found strong evidence (Spearman r = 0.95, p = 0.003) that the number of repositories that the subject has forked AND modified (i.e., pushed commits to their forked copy) predicts for the number of issues found (whether or not they were fixed--some subjects found bugs but either ran out of time or did not understand the syntax well enough to fix it).
* Because we only had 6 samples (9 total - 2 declined - 1 went wrong), we could not obtain reliable regression results as we had hoped. However, we did confirm two hypotheses that we had prior to running the linear regression models:
 > The number of repos a subject has forked AND modified has a significant impact on the number of languages completely debugged (95% C.I. = [0.255, 1.381]) and the number of bugs found but not fixed (95% C.I = [0.521, 1.843]).
* However, contrary to our prior beliefs, the number of repos a subject has forked and modified does not have a significant impact on the time taken to find the first bug (95% C.I. = [-9.879, 24.242])
* Lattes are actually really good.


# Threats to Validity (Failures)

## Setup issues

* For one subject, we forgot to add in the bugs. That was a fun little session.
* For another, we forgot to add in some aliases in the Dockerfile. Cue participants scrambling to figure out how to compile. Whoops.
* Some subjects were tea people, and took offense to our container name "latte". We consider this a failure of the universe.

## Scheduling

* We triple-booked people in one slot (intentionally--the idea was to use breakout rooms--since that block was the only time slot they were available). They thought it was funny. They liked each other. Too bad we split them up.

## Note-taking

* We did not have a pre-written set of guidelines on taking notes, so they were less effective than they could have been.
* We did not have a quiz prior to the test asking about the experience. We also did not have a post-test quiz. We figured we'd wing them. We never actually got around to it. What do they say about walking before using your wings?

## Bugs
* We did not introduce the same or similar bugs into 3 language. We argue that if we introduce similar bugs, then the subjects can leran about what kind of bugs to look for from their debuging experience of the 1st language and apply what they just learnt in their 2nd and 3rd language. We think this will distort the results.
* The test cases we give all subjects make big differences in their degub result. The more low level details about the bug our test cases can provide, the faster the subjects can pin point the bug and potentially fix them.
* Bug type matters. In this setting, we have high level constrains, whcih are the rules of the GOL itself. We argue that if someone introduce bugs mainly focus on distorting the logic of GOL rules, then it is hard(or unreasonable) to draw a concludsion about the property of the language. For example, if someone change the resurrection requirement from 3 neighbor cells to 4 neighbors, then what you can say about the language itself? We think the bugs should be carefully designed to reflect the feature of the language.

