const isGloveMatch = (original, other) => {
	const neededMatch = {
		hand: original.hand === "R" ? "L" : "R",
		color: original.color,
	}
	return neededMatch.hand === other.hand && neededMatch.color === other.color
}

function matchGloves1(gloves) {
	let unMatched = []
	let available = [...gloves]
	let colorMatches = []

	while (available.length > 0) {
		const glove = available[0]

		if (unMatched.length > 0) {
			const matchIndex = unMatched.findIndex((secondGlove) =>
				isGloveMatch(glove, secondGlove),
			)

			if (matchIndex >= 0) {
				colorMatches.push(glove.color)
				unMatched.splice(matchIndex, 1)
			} else {
				unMatched.push(glove)
			}
		} else {
			unMatched.push(glove)
		}

		available.splice(0, 1)
	}
	return colorMatches
}

function matchGloves2(gloves) {
	let unMatched = [...gloves]
	let matches = []

	while (unMatched.length > 0) {
		// Define matching pair
		const firstGlove = unMatched[0]

		// Check if there is a match in remaining items
		const matchIndex = unMatched.findIndex((secondGlove) =>
			isGloveMatch(firstGlove, secondGlove),
		)

		if (matchIndex >= 0) {
			// if there is a match, remove it from the pile
			matches.push(firstGlove.color)
			unMatched.splice(matchIndex, 1)
			unMatched.splice(0, 1)
		} else {
			unMatched.splice(0, 1)
		}
	}
	return matches
}

function matchGloves3(gloves) {
	const pending = {}
	const matches = []

	for (const { hand, color } of gloves) {
		if (!pending[color]) pending[color] = []

		const opposite = hand === "R" ? "L" : "R"

		const available = pending[color]

		if (available[available.length - 1] === opposite) {
			matches.push(color)
			available.pop()
		} else {
			available.push(hand)
		}
	}
	return matches
}

const isEqualArrays = (a, b) =>
	a.length === b.length &&
	[...a].sort().every((val, index) => val === [...b].sort()[index])

const test = (func, data, expected) => {
	const actual = func(data)
	console.log(expected, actual)

	if (isEqualArrays(expected, actual)) {
		console.log("pass")
	} else {
		console.log("fail")
	}
}

test(
	matchGloves3,
	[
		{ hand: "L", color: "red" },
		{ hand: "R", color: "red" },
		{ hand: "R", color: "green" },
		{ hand: "L", color: "blue" },
		{ hand: "L", color: "green" },
	],
	["red", "green"],
)

test(
	matchGloves3,
	[
		{ hand: "L", color: "green" },
		{ hand: "L", color: "red" },
		{ hand: "R", color: "red" },
		{ hand: "R", color: "green" },
	],
	["red", "green"],
)
