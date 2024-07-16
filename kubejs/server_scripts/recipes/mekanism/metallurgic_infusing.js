/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:mekanism/metallurgic_infusing/';
    const recipes = [
        {
            output: { item: AlmostUnified.getPreferredItemForTag(`forge:ingots/iron`).getId() },
            itemInput: { ingredient: { tag: 'forge:ingots/crude_iron' } },
            chemicalInput: { infuse_type: 'emendatusenigmatica:air_essence', amount: 20 },
            id: `${id_prefix}iron_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:metallurgic_infusing';
        event.custom(recipe).id(recipe.id);
    });
});
*/