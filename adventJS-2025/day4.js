function decodeSantaPin(code) {
	let finalDigits = []
	let initialCodes = code.slice(1, code.length - 1).split("][")
	if (initialCodes.length < 4) return null
	initialCodes.forEach((codeStr, i) => {
		const splitCodes = codeStr.split("")
		finalDigits[i] = splitCodes.reduce((acc, char) => {
			if (char.trim() !== "" && Number.isFinite(Number(char))) {
				return +char
			}
			switch (char) {
				case "+":
					return (acc + 1 + 10) % 10
				case "-":
					return (acc - 1 + 10) % 10
				case "<":
					return finalDigits[i - 1]
			}
		}, null)
	})
	return finalDigits.join("")
}
