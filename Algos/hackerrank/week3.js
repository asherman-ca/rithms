// Given an array of  distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order and the last  elements are in decreasing order, where . You need to find the lexicographically smallest zig zag sequence of the given array.

const zigZagSequence = (arr) => {
	const sorted = arr.sort()
	const midIdx = Math.floor(arr.length / 2)
	return [
		...sorted.slice(0, midIdx),
		...sorted.slice(midIdx, sorted.length).reverse(),
	]
}

console.log(zigZagSequence([1, 2, 3, 4, 5, 6, 7]))
