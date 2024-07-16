/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:thermal/smelter/';

    const recipes = [
        {
            ingredients: [
                { tag: 'forge:dusts/quartz' },
                { item: 'minecraft:obsidian' },
                { tag: 'forge:glass/colorless' }
            ],
            result: [{ item: 'thermal:obsidian_glass', count: 2 }],
            energy: 4800,
            id: `${id_prefix}obsidian_glass`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter';
        event.custom(recipe).id(recipe.id);
    });
});
*/