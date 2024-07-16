/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:pneumaticcraft/heat_properties/';

    const recipes = [
        {
            block: 'twilightforest:fiery_block',
            temperature: 1700,
            thermalResistance: 250,
            heatCapacity: 10000,
            transformCold: { block: 'emendatusenigmatica:source_block' },
            id: `${id_prefix}fiery_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:heat_properties';
        event.custom(recipe).id(recipe.id);
    });
});
*/