/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:mekanism/purifying/';
    const recipes = [
        // {
        //     output: { item: 'minecraft:iron_ingot', count: 1 },
        //     itemInput: { ingredient: { tag: 'forge:ingots/pig_iron' } },
        //     chemicalInput: { gas: 'mekanism:oxygen', amount: 1 },
        //     id: `${id_prefix}iron_ingot`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:purifying';
        event.custom(recipe).id(recipe.id);
    });
});
*/