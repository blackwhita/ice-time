/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:immersiveengineering/bottling_machine/';
    const recipes = [
        {
            results: [{ item: 'create:brass_casing', count: 4 }],
            inputs: [
                { base_ingredient: { item: 'thermal:sawdust_block' }, count: 4 },
                { base_ingredient: { tag: 'forge:ingots/brass' }, count: 1 }
            ],
            fluid: { amount: 100, tag: 'forge:phenolic_resin' },
            id: `${id_prefix}brass_casing`
        },
        
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:bottling_machine';
        event.custom(recipe).id(recipe.id);
    });
});
*/