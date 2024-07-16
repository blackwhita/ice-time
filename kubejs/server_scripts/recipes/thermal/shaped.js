/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:thermal/shaped/';

    const recipes = [
        {
            output: '8x thermal:jar',
            pattern: ['AA', 'BB', 'BB'],
            key: {
                A: 'farmersdelight:tree_bark',
                B: '#forge:glass/colorless'
            },
            id: `${id_prefix}jar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/