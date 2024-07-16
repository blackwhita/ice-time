/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:powah/energizing/';
    const recipes = [
        {
            output: '3x emendatusenigmatica:brass_ingot',
            inputs: ['#forge:dusts/aluminum', '#forge:dusts/aluminum', '#forge:dusts/copper', '#forge:essences/earth'],
            energy: '50000',
            id: `${id_prefix}brass_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
*/