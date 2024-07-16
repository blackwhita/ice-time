/**ServerEvents.recipes((event) => {

    const id_prefix = 'ico:thermal/crystallizer/';

    const recipes = [
        {
            ingredients: [
                { fluid: 'kubejs:elysium', amount: 100 },
                { item: 'minecraft:sculk', count: 3 }
            ],
            result: [{ item: 'minecraft:echo_shard' }],
            energy: 12000,
            id: `${id_prefix}echo_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:crystallizer';
        event.custom(recipe).id(recipe.id);
    });
});
*/