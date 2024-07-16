/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:supplementaries/shaped/';

    const recipes = [
        {
            output: 'supplementaries:faucet',
            pattern: [' B', 'AA', ' A'],
            key: {
                A: '#forge:ingots/bronze',
                B: 'create:copper_valve_handle'
            },
            id: 'supplementaries:faucet'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/