/*
ServerEvents.recipes((event) => {
    const id_prefix = 'ico:naturesaura/tree_ritual/';

    const recipes = [
        {
            output: 'naturesaura:offering_table',
            ingredients: [
                'naturesaura:infused_stone',
                'create:andesite_casing',
                '#forge:gems/source',
                '#forge:gems/source',
                'naturesaura:infused_stone',
                'create:andesite_casing',
                'naturesaura:infused_stone',
                'create:andesite_casing'
            ],
            time: 5,
            sapling: 'ars_nouveau:purple_archwood_sapling',
            id: `${id_prefix}offering_table`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = recipe.ingredients.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = Item.of(recipe.output).toJson();
        recipe.time = recipe.time;

        event.custom(recipe).id(recipe.id);
    });
});
*/