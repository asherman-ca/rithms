// 4
const merger = (arr1, arr2) => {
	let resArr = []
	while (arr1.length || arr2.length) {
		if (arr1[0] < arr2[0]) {
			resArr.push(arr1.shift())
		} else {
			resArr.push(arr2.shift())
		}
	}
	return resArr
}

console.log(merger([1, 2, 5], [4, 7, 8]))
