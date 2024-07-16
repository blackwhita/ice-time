/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:industrialforegoing/shaped/';

    const recipes = [
        {
            output: '2x industrialforegoing:machine_frame_simple',
            pattern: ['BDB', 'EAE', 'BCB'],
            key: {
                A: '#thermal:glass/hardened',
                B: '#forge:ingots/compressed_iron',
                C: 'powah:capacitor_niotic',
                D: 'immersiveengineering:rs_engineering',
                E: 'ae2:logic_processor'
            },
            id: `${id_prefix}machine_frame_simple`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/