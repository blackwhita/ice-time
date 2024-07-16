/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:minecraft/smelting/';
    const recipes = [
        {
            input: 'minecraft:clay_ball',
            output: 'minecraft:brick',
            xp: 0.5,
            id: `${id_prefix}brick`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
*/