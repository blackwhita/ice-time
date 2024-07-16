/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:create/mixing/';
    const recipes = [
        {
            results: [{ item: 'thermal:cured_rubber', count: 4 }],
            ingredients: [
                { amount: 100, fluid: 'minecraft:water' },
                { item: 'thermal:rubber' },
                { item: 'thermal:rubber' },
                { item: 'thermal:rubber' },
                { tag: 'forge:essences/fire' },
                { amount: 1000, fluid: 'minecraft:water' }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}cured_rubber`
        },
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
*/