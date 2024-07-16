/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:ars_nouveau/glyph/';
    const recipes = [
        {
            output: 'ars_nouveau:glyph_pickup',
            inputItems: [
                { item: { item: 'minecraft:lodestone' } },
                { item: { item: 'minecraft:lodestone' } },
                { item: { item: 'supplementaries:antique_ink' } }
            ],
            count: 1,
            exp: 27,
            id: `ars_nouveau:glyph_pickup`
        }
    ];

    // Add Antique Ink to every glyph
    event.forEachRecipe({ type: 'ars_nouveau:glyph' }, (r) => {
        let found = recipes.some((recipe) => recipe.id === r.getId());
        let recipe = JSON.parse(r.json);
        recipe.inputItems.push({ item: { item: 'supplementaries:antique_ink' } });
        if (!found) event.custom(recipe).id(r.getId());
    });

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:glyph';
        event.custom(recipe).id(recipe.id);
    });
});
*/