/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:travelanchors/shaped/';

    const recipes = [
        {
            output: '4x travelanchors:travel_anchor',
            pattern: ['BAB', 'ACA', 'BAB'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:ingots/lead',
                C: 'ars_nouveau:ritual_warping'
            },
            id: 'travelanchors:travel_anchor'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/