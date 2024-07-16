/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:lychee/lightning_channeling/';
    const recipes = [
        {
            item_in: [
                { tag: 'forge:gems/source' },
                { item: 'minecraft:chiseled_stone_bricks' },
                { tag: 'forge:ores/ironwood' }
            ],
            post: [
                {
                    type: 'drop_item',
                    item: 'minecraft:lodestone',
                    count: 1
                }
            ],
            id: `${id_prefix}lodestone`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'lychee:lightning_channeling';
        event.custom(recipe).id(recipe.id);
    });
});
*/