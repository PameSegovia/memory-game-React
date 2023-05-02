export const getImages = (size) => {

	const images = [
		"../images/docker.svg",
		"../images/bun.svg",
		"../images/deno.svg",
		"../images/github.svg",
		"../images/javascript.svg",
		"../images/question.svg",
		"../images/redis.svg",
		"../images/supabase.svg",
		"../images/svelte.svg",
		"../images/vite.svg",
		"../images/vscode.svg"
	]
	const newImages = images.slice(0, size);


	return newImages.flatMap(item => [`1|${item}`, `2|${item}`])
		 .sort(()=> Math.random() -0.5)
}