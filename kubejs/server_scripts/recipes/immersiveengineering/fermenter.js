/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:immersiveengineering/fermenter/';

    const recipes = [
        {
            fluid: { amount: 120, fluid: 'pneumaticcraft:ethanol' },
            input: [{ item: 'minecraft:nether_wart' }],
            energy: 400,
            id: `${id_prefix}ethanol_from_nether_wart`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:fermenter';

        event.custom(recipe).id(recipe.id);
    });
});
*/