/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:pneumaticcraft/thermo_plant/';

    // Base Air usage is approximately 350 mL per recipe
    // Base speed is approximately 40 ticks

    const recipes = [
        {
            fluid_output: { amount: 250, fluid: 'immersiveengineering:creosote' },
            item_output: { item: 'minecraft:charcoal' },
            item_input: [{ tag: 'minecraft:logs' }],
            exothermic: false,
            temperature: { max_temp: 1073, min_temp: 673 },
            speed: 0.5,
            id: `${id_prefix}charcoal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
*/