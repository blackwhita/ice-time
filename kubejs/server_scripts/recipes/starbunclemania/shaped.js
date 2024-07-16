/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:starbunclemania/shaped/';

    const recipes = [
        {
            output: 'starbunclemania:fluid_jar',
            pattern: ['CBC', ' C '],
            key: {
                B: 'ars_nouveau:mob_jar',
                C: 'ars_nouveau:blue_archwood_wood'
            },
            id: `${id_prefix}fluid_jar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/