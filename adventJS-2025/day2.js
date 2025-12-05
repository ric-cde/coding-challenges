function manufactureGifts(giftsToProduce) {
	return giftsToProduce.flatMap((line) => {
		if (line.quantity > 0) {
			return Array(line.quantity).fill(line.toy)
		} else {
			return []
		}
	})
}
