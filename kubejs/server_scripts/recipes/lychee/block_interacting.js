/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:lychee/block_interacting/';

    const recipes = [
        {
            item_in: { item: 'naturesaura:gold_leaf' },
            block_in: { tag: 'minecraft:logs' },
            post: [
                { type: 'prevent_default' },
                {
                    type: 'place',
                    block: 'naturesaura:wood_stand',
                    contextual: [
                        { type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }
                    ]
                },
                {
                    type: 'execute',
                    command: 'playsound ars_nouveau:ea_finish block @p ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle minecraft:explosion ~ ~ ~',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'particle twilightforest:firefly ~ ~ ~ 1 1 1 1 15',
                    hide: true
                },
                {
                    type: 'execute',
                    command: 'naaura remove 5000',
                    hide: true
                }
            ],
            contextual: [{ type: 'is_sneaking', description: 'Must be sneaking. Consumes a small amount of Aura.' }],
            id: `${id_prefix}wood_stand`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    });
});
*/