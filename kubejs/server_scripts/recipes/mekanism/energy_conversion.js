/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:mekanism/energy_conversion/';
    const recipes = [
        {
            input: { ingredient: { tag: 'forge:storage_blocks/source' } },
            output: 90000,
            id: `${id_prefix}source_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:energy_conversion';
        event.custom(recipe).id(recipe.id);
    });
});
*/