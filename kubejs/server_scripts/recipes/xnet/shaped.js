/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:xnet/shaped/';

    const recipes = [
        {
            output: '16x xnet:netcable_routing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ae2:fluix_glass_cable',
                B: '#forge:fabrics/woven',
                C: 'quark:white_rune'
            },
            id: `${id_prefix}netcable_routing`
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/