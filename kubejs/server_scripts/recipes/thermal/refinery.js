/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:thermal/refinery/';

    const recipes = [
        {
            ingredient: { fluid: 'industrialforegoing:latex', amount: 1000 },
            result: [
                { fluid: 'minecraft:water', amount: 100 },
                { item: 'thermal:rubber', chance: 2.0 }
            ],
            energy: 6000,
            id: `${id_prefix}rubber`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
*/