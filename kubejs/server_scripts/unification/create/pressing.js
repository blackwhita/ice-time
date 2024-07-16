/*ServerEvents.recipes((event) => {
	const id_prefix = "ico:create/pressing/";

	event.remove({ type: "create:pressing" });

	const recipes = [
		{
			input: ["minecraft:dirt"],
			output: "minecraft:dirt_path",
			id: `${id_prefix}dirt_path`,
		},
	];
	Object.keys(every_materials).forEach((metal) => {
		if (every_materials[metal].plate) {
			recipes.push({
				output: `alltheores:${metal}_plate`,
				input: [`forge:ingots/${metal}`],
				id: `${id_prefix}${metal}_plate`,
			});
		}
	});
	recipes.forEach((recipe) => {
		event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
	});
});
*/