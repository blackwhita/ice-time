/*ServerEvents.recipes((event) => {


    // Increase processing rate of all default recipes
    const rate_multiplier = 4;
    event.forEachRecipe({ type: 'mekanism:rotary' }, (r) => {
        let recipe = JSON.parse(r.json);

        recipe.fluidInput.amount *= rate_multiplier;
        recipe.fluidOutput.amount *= rate_multiplier;
        recipe.gasInput.amount *= rate_multiplier;
        recipe.gasOutput.amount *= rate_multiplier;
        event.custom(recipe).id(r.getId());
    });

    const id_prefix = 'ico:mekanism/rotary/';
    const recipes = [];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:rotary';
        event.custom(recipe).id(recipe.id);
    });
});*/