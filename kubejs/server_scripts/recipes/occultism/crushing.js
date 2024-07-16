/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:occultism/crushing/';
    const recipes = [
        {
            output: '2x pneumaticcraft:logistics_core',
            input: 'naturesaura:infused_slab',
            crushing_time: 60,
            min_tier: 1,
            id: `${id_prefix}logistics_core`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:crushing';
        recipe.ingredient = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        recipe.result = Item.of(recipe.output).toJson();
        recipe.ignore_crushing_multiplier = true;
        event.custom(recipe).id(recipe.id);
    });
});*/
