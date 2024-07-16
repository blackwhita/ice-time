/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:immersiveengineering/mixer/';
    const recipes = [
        {
            result: { amount: 2000, fluid: 'starbunclemania:source_fluid' },
            fluid: { amount: 2000, tag: 'minecraft:water' },
            inputs: [{ tag: 'forge:storage_blocks/amethyst' }],
            energy: 2000,
            id: `${id_prefix}source_fluid_from_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:mixer';
        event.custom(recipe).id(recipe.id);
    });
});
*/