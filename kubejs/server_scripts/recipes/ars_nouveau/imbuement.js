/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:ars_nouveau/imbuement/';

    const recipes = [
        {
            output: 'kubejs:primordial_seed',
            count: 1,
            reagent: 'minecraft:enchanted_golden_apple',
            inputs: [
                'twilightforest:quest_ram_trophy',
                'ars_nouveau:drygmy_charm',
                'ars_nouveau:whirlisprig_charm',
                'ars_elemental:firenando_charm',
                'ars_elemental:siren_charm'
            ],
            source: 10000,
            id: `${id_prefix}primordial_seed`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        if (recipe.inputs) {
            recipe.pedestalItems = recipe.inputs.map((input) => ({
                item: input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
            }));
        } else {
            recipe.pedestalItems = [];
        }

        recipe.input = recipe.reagent.startsWith('#') ? { tag: recipe.reagent.slice(1) } : { item: recipe.reagent };

        event.custom(recipe).id(recipe.id);
    });
});
*/