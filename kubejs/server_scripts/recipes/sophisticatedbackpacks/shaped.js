/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:sophisticatedbackpacks/shaped/';

    const recipes = [
        {
            output: '5x sophisticatedbackpacks:upgrade_base',
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: 'ars_nouveau:archwood_slab',
                B: '#forge:nuggets/electrum'
            },
            id: 'sophisticatedbackpacks:upgrade_base'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/