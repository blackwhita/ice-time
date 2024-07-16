ServerEvents.recipes((event) => {

    const id_prefix = 'ico:immersiveengineering/shaped/';

    const recipes = [
        {
            output: '9x immersiveengineering:cokebrick',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:clay',
                B: 'minecraft:bricks',
                C: 'minecraft:honey_block'
            },
            id: 'immersiveengineering:crafting/cokebrick'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
