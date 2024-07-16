/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:create/item_application/';

    const recipes = [
        {
            ingredients: [{ item: 'twilightforest:stripped_canopy_log' }, { tag: 'pneumaticcraft:compressed_stone' }],
            results: [{ item: 'create:andesite_casing' }],
            id: 'create:item_application/andesite_casing_from_log'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:item_application';
        event.custom(recipe).id(recipe.id);
    });
});
*/