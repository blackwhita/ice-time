/*ServerEvents.recipes((event) => {

    const id_prefix = 'enigmatica:base/modularrouters/shaped/';
    const recipes = [
        {
            output: '3x modularrouters:blank_module',
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: 'quark:rainbow_rune',
                B: 'pneumaticcraft:logistics_core',
                C: '#pneumaticcraft:plastic_sheets'
            },
            id: 'modularrouters:blank_module'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/