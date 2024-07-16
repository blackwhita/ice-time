/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:thermal/fuel/compression/';
    const recipes = [];

    fuelProperties.expert.forEach((prop) => {
        recipes.push({
            ingredient: { fluid_tag: prop.fuel, amount: 1000 },
            energy: prop.energy,
            id: `${id_prefix}${prop.fuel.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:compression_fuel';
        event.custom(recipe).id(recipe.id);
    });
});
*/