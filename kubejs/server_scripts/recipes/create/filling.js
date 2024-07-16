/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:create/filling/';

    const recipes = [
        {
            results: [{ item: 'hexerei:blood_bottle' }],
            ingredients: [{ item: 'minecraft:glass_bottle' }, { fluidTag: 'forge:blood', amount: 250 }],
            id: `${id_prefix}blood_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:filling';
        event.custom(recipe).id(recipe.id);
    });
});
*/