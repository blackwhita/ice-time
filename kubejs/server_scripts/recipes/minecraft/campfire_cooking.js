/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:minecraft/campfire_cooking/';

    const recipes = [
        // {
        //     cookingtime: 600,
        //     experience: 0.35,
        //     ingredient: { item: 'minecraft:clay_ball' },
        //     result: 'minecraft:brick',
        //     id: `${id_prefix}brick`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'minecraft:campfire_cooking';
        event.custom(recipe).id(recipe.id);
    });
});
*/