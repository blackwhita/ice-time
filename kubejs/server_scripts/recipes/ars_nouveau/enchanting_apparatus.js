/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            output: '2x mekanism:teleportation_core',
            inputs: ['#forge:essences/conjuration', 'quark:rainbow_rune', 'quark:rainbow_rune'],
            reagents: ['occultism:spirit_attuned_gem'],
            sourceCost: 500,
            id: `${id_prefix}teleportation_core`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        recipe.output = Item.of(recipe.output).toJson();
        recipe.pedestalItems = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.reagent = recipe.reagents.map((reagent) => Ingredient.of(reagent).toJson());

        event.custom(recipe).id(recipe.id);
    });
});*/
