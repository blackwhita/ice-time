/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:pneumaticcraft/shaped/';

    const recipes = [
        {
            output: '8x pneumaticcraft:pressure_tube',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'pneumaticcraft:compressed_brick_tile',
                B: '#forge:essences/air'
            },
            id: `pneumaticcraft:pressure_tube`
        }
    ]
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/