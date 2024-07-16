/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:ars_nouveau/armor_upgrade/';
    const recipes = [
        {
            pedestalItems: [
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'quark:rainbow_rune' } }
            ],
            sourceCost: 2500,
            tier: 1,
            id: `ars_nouveau:upgrade_1`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:armor_upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
*/