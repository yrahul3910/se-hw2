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
* The subject is given a token at the end of the session.
* The languages used were Rust, Ruby, Go

## After the study

* The GitHub profiles of the subjects are mined for several data points to obtain information about the experience and significance of the subject's prior work, as measured by forks and stars. Basic experience with tooling and experimental programming is checked by measuring the number of repos that are forks, that the subject has pushed commits to.
* These are combined with the notes taken during the sessions into a spreadsheet, and the names of the subjects are discarded.
* Some preliminary analysis of the data is done.

# Materials

* Docker
* Compilers for Rust, Ruby, Swift
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
* Most subjects did not appear to have prior experience in any of the languages used; however, it seems universal from the reactions of the subjects that they had difficulty understanding the Rust syntax. In contrast, Ruby syntax seemed easier for subjects. Many subjects did not attempt to debug the Go code.

# Conclusions

* Based on user reactions, a fairly universal answer emerges: Rust is harder to debug than Ruby.
    * A hypothesis for this is that Rust is intended to be a type-safe version C, and is used by Mozilla for low-level code. Ruby, on the other hand, has syntax closer to Python, and is used in higher-level code, such as HomeBrew recipes for macOS.
* Most subjects were clearly unfamiliar with Docker and terminal editors, and did not know some vim commands, such as showing line numbers. 
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

