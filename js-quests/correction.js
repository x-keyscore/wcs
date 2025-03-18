/*/
A soccer match took place between 2 teams. You are given the list of goals scored in a table of numbers: each number represents a goal of one of the teams:
- 1 for a team 1 goal
- 2 for a team 2 goal

Create a function `getScore` which returns the string of the current scores and the winning team.
Example:
* points: [1, 1, 1], result: "3-0: team 1 wins the game"
* points: [2, 1, 2, 2], result: "1-3: team 2 wins the game"
* points: [1, 2, 1, 2], result: "2-2: draw"
* points: [], result: "0-0: draw"

If the argument is null, return "Illegal argument".

If a value of the argument is not 1 or 2, return "Illegal argument"
*/

/**
 * @param {number[]} goalArray
 */
function getScore(teamGoals) {
	if (teamGoals === null || !Array.isArray(teamGoals)) return ("Illegal argument");
	const teamScores = [0, 0];

	for (let i = 0; i < teamGoals.length; i++) {
		const goalTeam = teamGoals[i];
		if (goalTeam < 1 || goalTeam > 2) return ("Illegal argument");
		teamScores[goalTeam - 1]++;
	}

	if (teamScores[0] > teamScores[1]) {
		console.log(`result: ${teamScores[0]}-${teamScores[1]}: team 1 wins the game`);
	} else if (teamScores[0] < teamScores[1]) {
		console.log(`result: ${teamScores[0]}-${teamScores[1]}: team 2 wins the game`);
	} else {
		console.log(`result: ${teamScores[0]}-${teamScores[1]}: draw`);
	}
}

getScore(null)
getScore([])
getScore([1, 1, 1])
getScore([2, 2, 2])
getScore([1, 1, 2, 2])
getScore([1, 2, 1, 3, 1, 2])
getScore(["1", "2"])