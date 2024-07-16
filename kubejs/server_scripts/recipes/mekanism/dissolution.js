/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:mekanism/dissolution/';
    const recipes = [
        {
            output: { chemicalType: 'gas', gas: 'mekanism:hydrofluoric_acid', amount: 1000 },
            gasInput: { gas: 'mekanism:sulfuric_acid', amount: 1 },
            itemInput: { ingredient: { tag: 'forge:gems/fluorite' } },
            id: `${id_prefix}hydrofluoric_acid`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:dissolution';
        event.custom(recipe).id(recipe.id);
    });
});
*/