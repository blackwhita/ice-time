/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:mekanism/oxidizing/';
    const recipes = [
        {
            output: { gas: 'mekanism:oxygen', amount: 5000 },
            input: { ingredient: { tag: 'forge:essences/air' } },
            id: `${id_prefix}oxygen`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:oxidizing';
        event.custom(recipe).id(recipe.id);
    });
});
*/