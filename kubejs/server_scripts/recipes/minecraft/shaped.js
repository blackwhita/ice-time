/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:minecraft/shaped/';

    const recipes = [
        {
            output: '2x minecraft:tripwire_hook',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:ingots/tin',
                B: '#forge:rods/wooden',
                C: '#minecraft:planks'
            },
            id: 'minecraft:tripwire_hook'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/