/*ServerEvents.recipes((event) => {
    // Altar's Max Fill rate is 300 aura per tick[aura/time]. If a recipe draws faster than this, it'll still work, but will slow the craft down to that rate if a large enough batch goes through.
    const id_prefix = 'ico:naturesaura/altar/';
    const recipes = [
        {
            output: 'emendatusenigmatica:infused_iron_ingot',
            input: '#forge:ingots/ironwood',
            aura: 7500,
            time: 40,
            id: `${id_prefix}sky_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.output = Item.of(recipe.output).toJson();
        if (recipe.catalyst) {
            recipe.catalyst = { item: recipe.catalyst };
        }
        event.custom(recipe).id(recipe.id);
    });
});
*/