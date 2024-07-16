/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:entangled/shaped/';

    const recipes = [
        {
            output: '4x entangled:block',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/bronze',
                B: 'ars_nouveau:sourcestone',
                C: 'ars_nouveau:ritual_warping'
            },
            id: 'entangled:block'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/