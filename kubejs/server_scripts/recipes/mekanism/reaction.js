/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:mekanism/reaction/';
    const recipes = [
        {
            gasOutput: { gas: 'mekanism:polonium', amount: 100 },
            itemInput: { ingredient: { item: 'minecraft:echo_shard' }, amount: 4 },
            gasInput: { gas: 'mekanism:hydrofluoric_acid', amount: 25 },
            fluidInput: { tag: 'forge:magicite', amount: 100 },
            energyRequired: 3995,
            duration: 30,
            id: `${id_prefix}polonium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:reaction';
        event.custom(recipe).id(recipe.id);
    });
});
*/