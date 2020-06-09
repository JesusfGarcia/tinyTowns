export const getItems = async () => {
	let array = []
	for (let index = 0; index < 16; index++) {
		array.push({ builded: false, material: '' })
	}
	return array;
}
