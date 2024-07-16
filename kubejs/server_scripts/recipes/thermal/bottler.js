/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:thermal/bottler/';

    const recipes = [
        {
            ingredients: [{ item: 'minecraft:glass_bottle' }, { fluid_tag: 'forge:quicksilver', amount: 250 }],
            result: [{ item: 'hexerei:quicksilver_bottle' }],
            id: `${id_prefix}quicksilver_bottle`
        }
    ];

    // simple_metals.forEach((metal) => {
    //     let rate = 3;
    //     recipes.push({
    //         result: [{ item: `emendatusenigmatica:${metal}_dirty_dust`, count: 2 * rate }],
    //         ingredients: [
    //             { tag: `create:crushed_ores/${metal}`, count: 1 * rate },
    //             { fluid_tag: 'forge:sulfuric_acid', amount: 10 * rate }
    //         ],
    //         energy: 3000 * rate,
    //         id: `${id_prefix}${metal}_dirty_dust_from_acid`
    //     });
    // });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:bottler';
        event.custom(recipe).id(recipe.id);
    });
});
*/