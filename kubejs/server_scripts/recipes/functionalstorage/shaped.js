/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:functionalstorage/shaped/';

    const recipes = [
        {
            output: 'functionalstorage:storage_controller',
            pattern: ['ABA', 'DCD', 'AEA'],
            key: {
                A: '#forge:plates/tin',
                B: 'pneumaticcraft:logistics_core',
                C: 'create:andesite_casing',
                D: '#forge:treated_wood_slab',
                E: 'ars_nouveau:ritual_warping'
            },
            id: 'functionalstorage:storage_controller'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/