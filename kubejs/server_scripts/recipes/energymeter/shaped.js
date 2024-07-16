/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:energymeter/shaped/';

    const recipes = [
        {
            output: 'energymeter:meter',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                B: 'minecraft:comparator',
                C: '#forge:gems/source',
                D: 'supplementaries:crystal_display',
                E: 'minecraft:observer'
            },
            id: 'energymeter:meter'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/