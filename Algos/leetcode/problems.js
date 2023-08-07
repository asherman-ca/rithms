let isoStrings = (s, t) => {
	let map = {};

	for (let i = 0; i < s.length; i++) {
		if (!map[s[i]]) {
			if (Object.values(map).includes(t[i])) {
				return false;
			}
			map[s[i]] = t[i];
		}
	}

	s = s
		.split('')
		.map((el) => {
			return map[el];
		})
		.join('');

	return s === t;
};

// console.log(isoStrings('egcd', 'adfd') === false);
// console.log(isoStrings('paper', 'title') === true);
// console.log(isoStrings('a', 'a') === true);
// console.log(isoStrings('badc', 'baba') === false);
// console.log(isoStrings('abab', 'baba') === true);

// let subSequence = (s, t) => {
// 	let filtered = t.split('').filter((letter) => s.includes(letter));

// 	console.log('filtered', filtered);

// 	for (let i = 0; i <= filtered.length - s.length; i++) {
// 		if (filtered.slice(i, i + s.length).join('') === s) {
// 			return true;
// 		}
// 	}

// 	return false;
// };

let subSequence = (s, t) => {
	for (let i = 0; i < t.length; i++) {
		if (s[0] === t[i]) {
			s = s.slice(1);
		}
	}

	if (s.length === 0) {
		return true;
	} else {
		return false;
	}
};

console.log(subSequence('abc', 'ahbgdc') === true);
console.log(subSequence('ab', 'baab') === true);
