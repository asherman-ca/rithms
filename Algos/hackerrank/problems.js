const sherlockAndAnagrams = (s) => {
	let matches = 0
	let substrings = []

	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j <= s.length; j++) {
			if (i == 0 && j == s.length) {
				continue
			}
			substrings.push(s.slice(i, j))
		}
	}

	for (let k = 0; k < substrings.length; k++) {
		for (let l = k + 1; l < substrings.length; l++) {
			if (
				substrings[l].split('').sort().join('') ==
				substrings[k].split('').sort().join('')
			) {
				matches++
			}
		}
	}

	return matches
}

function generateSubstrs(input) {
	var substrings = []
	for (var i = 0; i < input.length; i++) {
		for (var j = 1; i + j <= input.length; j++) {
			//3N operations on current substring
			substrings.push(input.substr(i, j).split('').sort())
		}
		console.log('next')
	}
	// O(nlogn) preprocessing step to help figure out anagram pairs
	substrings.sort()
	return substrings.map(function (el) {
		return el.join('')
	})
}

const sherlockAndAnagrams2 = (s) => {
	const subs = generateSubstrs(s)
	console.log('subs', subs)
	var k = 0
	var count = 0
	// O(N^2) iteration through all substrings.
	while (k < subs.length) {
		var z = k + 1
		while (subs[k] === subs[z]) {
			count++
			z++
		}
		k++
	}
	return count
}

console.log(sherlockAndAnagrams2('mom'))
// console.log(
// 	sherlockAndAnagrams2(
// 		'ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel'
// 	)
// )
