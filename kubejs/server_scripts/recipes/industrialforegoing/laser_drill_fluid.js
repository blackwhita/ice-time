/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:industrialforegoing/laser_drill_fluid/';
    const recipes = [
        {
            output: '{Amount:500,FluidName:"thermal:ender"}',
            catalyst: { tag: 'industrialforegoing:laser_lens/ender' },
            entity: 'minecraft:empty',
            pointer: 0,
            rarity: [
                {
                    depth_max: 256,
                    depth_min: -64,
                    weight: 8,
                    blacklist: {},
                    whitelist: { type: 'minecraft:worldgen/biome', values: biomes.in_the_end }
                }
            ],
            id: `industrialforegoing:laser_drill_fluid/ender`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
*/