/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:occultism/shaped/';

    const recipes = [
        {
            output: '4x occultism:sacrificial_bowl',
            pattern: ['A A', 'ABA'],
            key: {
                A: 'ars_nouveau:sourcestone',
                B: '#forge:storage_blocks/source'
            },
            id: `occultism:crafting/sacrificial_bowl`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});*/
