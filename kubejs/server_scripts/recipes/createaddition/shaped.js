/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:createaddition/shaped/';

    const recipes = [
        {
            output: 'createaddition:tesla_coil',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'powah:capacitor_basic_large',
                C: 'immersiveengineering:coil_mv',
                D: 'powah:capacitor_basic_large',
                E: 'create:brass_casing'
            },
            id: `${id_prefix}tesla_coil`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/