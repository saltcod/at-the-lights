function rando(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function getFunName() {
	const adjectives = [
		"insane",
		"angry",
		"evil",
		"bitter",
		"jaded",
		"maleficent",
		"hateful",
		"bland",
		"lazy",
		"useless",
		"greedy",
		"selfish",
		"unhappy",
		"ignorant",
		"murderous",
		"miserable",
		"miserly",
		"infuriating",
		"stupid"
	];
	const vegetables = [
		"lettuce",
		"tomatoes",
		"cucumbers",
		"cabbage",
		"artichokes",
		"broccoli",
		"cauliflower",
		"garlic",
		"fennel",
		"spinach",
		"yams",
		"potatoes"
	];

	return `${rando(adjectives)}-${rando(adjectives)}-${rando(vegetables)}`;
}
