function timeUntilTakeOff(fromTime, takeOffTime) {
	const convertToDate = (time) => {
		const year = time.slice(0, 4)
		const month = time.slice(5, 7)
		const day = time.slice(8, 10)
		const hour = time.slice(11, 13)
		const minute = time.slice(14, 16)
		const second = time.slice(17, 19)
		const newDate = new Date(year, month - 1, day, hour, minute, second)
		console.log(newDate)
		return newDate
	}
	const rawDiff = convertToDate(takeOffTime) - convertToDate(fromTime)

	return Math.floor(rawDiff / 1000)
}
