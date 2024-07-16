/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:lychee/item_exploding/';
    const recipes = [
        {
            item_in: { item: 'occultism:soul_gem' },
            hide_in_viewer: true,
            post: [
                {
                    type: 'drop_item',
                    item: 'spirit:soul_crystal_shard',
                    count: 1,
                    contextual: { type: 'chance', chance: 0.5 }
                }
            ],
            id: `${id_prefix}soul_crystal_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:item_exploding';
        event.custom(recipe).id(recipe.id);
    });
});
*/