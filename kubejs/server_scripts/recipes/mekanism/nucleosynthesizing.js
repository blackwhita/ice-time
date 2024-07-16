/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:mekanism/nucleosynthesizing/';
    const recipes = [
        {
            output: { item: 'powah:steel_energized' },
            gasInput: { gas: 'mekanism:antimatter', amount: 1 },
            itemInput: { ingredient: { tag: 'forge:ingots/copper' } },
            duration: 500,
            id: `${id_prefix}steel_energized`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
*/