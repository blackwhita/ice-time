ServerEvents.recipes((event) => {
	const id_prefix = "ico:createaddition/rolling/";
	event.remove({ type: "createaddition:rolling" });
	const recipes = [];

	Object.keys(every_materials).forEach((metal) => {
		if (every_materials[metal].rod) {
			recipes.push({
				output: `2x alltheores:${metal}_rod`,
				input: `#forge:ingots/${metal}`,
				id: `${id_prefix}${metal}_rod`,
			});
		}

		if (every_materials[metal].wire) {
			recipes.push({
				output: `2x immersiveengineering:wire_${metal}`,
				input: `#forge:rods/${metal}`,
				id: `${id_prefix}${metal}_wire`,
			});
		}
	});

	recipes.forEach((recipe) => {
		recipe.type = "createaddition:rolling";
		recipe.input = recipe.input.startsWith("#")
			? { tag: recipe.input.slice(1) }
			: { item: recipe.input };
		recipe.result = Item.of(recipe.output).toJson();
		event.custom(recipe).id(recipe.id);
	});
});
