/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            results: [{ item: 'ae2:quartz_fiber', count: 16 }],
            inputs: [
                { type: 'pneumaticcraft:stacked_item', item: 'minecraft:glass', count: 32 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:dusts/certus_quartz', count: 16 },
                { tag: 'forge:essences/fire' }
            ],
            pressure: 2.0,
            id: `${id_prefix}quartz_fiber`
        },
    ]

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:pressure_chamber';
        event.custom(recipe).id(recipe.id);
    });
});
*/