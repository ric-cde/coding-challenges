function drawGift(size, symbol) {
	if (size < 2) return ""

	let output = ""

	output += symbol.repeat(size) + "\n"
	for (let i = 0; i < size - 2; i++) {
		output += symbol + " ".repeat(size - 2) + symbol + "\n"
	}
	output += symbol.repeat(size)

	return output
}
