/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:industrialforegoing/dissolution_chamber/';
    const recipes = [
        {
            output: 'minecraft:dragon_egg',
            inputs: [
                'minecraft:obsidian',
                'minecraft:obsidian',
                'minecraft:obsidian',
                'minecraft:obsidian',
                'minecraft:obsidian',
                'minecraft:obsidian',
                '#forge:gems/infused_ender',
                'minecraft:obsidian'
            ],
            inputFluid: '{Amount:1000,FluidName:"thermal:ender"}',
            processingTime: 200,
            id: `${id_prefix}dragon_egg`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        recipe.input = recipe.inputs.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});*/
