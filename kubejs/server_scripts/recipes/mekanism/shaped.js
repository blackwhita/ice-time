/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:mekanism/shaped/';

    const recipes = [
        {
            output: '9x mekanism:teleporter_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:ingots/infused_iron',
                C: 'ars_nouveau:ritual_warping'
            },
            id: 'mekanism:teleporter_frame'
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/