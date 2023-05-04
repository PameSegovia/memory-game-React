export const getImages = (size) => {

	const images = [
		"../images/confuso.jpeg",
		"../images/dolar.png",
		"../images/emocionado.png",
		"../images/emoji.png",
		"../images/enojado.png",
		"../images/estrella.png",
		"../images/guino.png",
		"../images/llorando.png",
		"../images/pensando.png",
		"../images/question.png",
		"../images/sonrisa.png"
	]
	const newImages = images.slice(0, size);


	return newImages.flatMap(item => [`1|${item}`, `2|${item}`])
		 .sort(()=> Math.random() -0.5)
}