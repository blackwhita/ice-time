/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:naturesaura/offering/';
    const recipes = [
        {
            output: { item: 'ae2:sky_dust', count: 4 },
            input: { tag: 'forge:dusts/moon_dust' },
            start_item: { item: 'naturesaura:calling_spirit' },
            id: `${id_prefix}sky_dust`
        },
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);
    });
});*/
